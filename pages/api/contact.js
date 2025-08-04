import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, PutCommand } from '@aws-sdk/lib-dynamodb';
import { SES, SendEmailCommand } from '@aws-sdk/client-ses';
// import { v4 as uuidv4 } from 'uuid'; // Use uuid for generating UUIDs

const ses = new SES({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

const marshallOptions = {
    convertEmptyValues: false,
    removeUndefinedValues: true,
    convertClassInstanceToMap: false,
};

const unmarshallOptions = {
    wrapNumbers: false,
};

const translateConfig = { marshallOptions, unmarshallOptions };

const docClient = new DynamoDB({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

const ddbDocClient = DynamoDBDocument.from(docClient, translateConfig);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, purpose, message } = req.body;

    // Validation
    if (!name || !email || !phone || !purpose || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // DynamoDB PutItem example
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Item: {
                clientId: '85',
                userId: `${Date.now()}`, // Unique ID for the form submission
                name,
                email,
                phone,
                purpose,
                message,
                createdAt: new Date().toISOString(),
            },
        };

        await ddbDocClient.send(new PutCommand(params)); // Updated to use `send` with `PutCommand`

        // Send email using SES
        const mailTemplate = `<!DOCTYPE html>
 <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry Form Submission From FreshCon</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
    <tr>
      <td style="padding: 20px 0;">
        <table align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background-color: #ffffff;">
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px;">
              <h1 style="font-size: 24px; margin: 0;">New Request Info  from ${name}!</h1>
              <p style="font-size: 16px;">A new enquiry form has been submitted on your website(FreshCon). Here are the details:</p>
              <table style="margin: 20px auto; border: 2px solid #A9A9A9; width: 100%; max-width: 600px; border-collapse: collapse;">
                <tr style="border-bottom: 2px solid #A9A9A9;">
                  <td style="padding: 10px; border-right: 2px solid #A9A9A9;"><strong>Full Name:</strong></td>
                  <td style="padding: 10px;">${name}</td>
                </tr>
                <tr style="border-bottom: 2px solid #A9A9A9;">
                  <td style="padding: 10px; border-right: 2px solid #A9A9A9;"><strong>Email:</strong></td>
                  <td style="padding: 10px;">${email}</td>
                </tr>
               
                <tr style="border-bottom: 2px solid #A9A9A9;">
                  <td style="padding: 10px; border-right: 2px solid #A9A9A9;"><strong>Purpose:</strong></td>
                  <td style="padding: 10px;">${purpose}</td>
                </tr>
                <tr style="border-bottom: 2px solid #A9A9A9;">
                  <td style="padding: 10px; border-right: 2px solid #A9A9A9;"><strong>Contact Number:</strong></td>
                  <td style="padding: 10px;">${phone}</td>
                </tr>
         
                <tr style="border-bottom: 2px solid #A9A9A9;">
                  <td style="padding: 10px; border-right: 2px solid #A9A9A9;"><strong>Message:</strong></td>
                  <td style="padding: 10px;">${message}</td>
                </tr>
              </table>
              <p style="font-size: 16px; margin-top: 20px;">Thank you for your attention. Please follow up with the contact as soon as possible.</p>
              <p style="font-size: 14px; color: #666;">Best regards,</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
        const emailParams = {
            Source: process.env.SES_EMAIL_FROM,
            Destination: { ToAddresses: [process.env.SES_EMAIL_FROM,] }, // Ensure it is an array
            Message: {
                Subject: { Data: `Thank you for contacting us, ${name}` },
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: mailTemplate
                    }
                },
            },
        };

        await ses.send(new SendEmailCommand(emailParams)); // Updated to use `send` with `SendEmailCommand`

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to submit form.' });
    }
}
