import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
   <>
   <Header/>
   <div className='bg-green-50'>
  <div className=" min-h-screen lg:max-w-[1200px] mx-auto py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="bg-white shadow-md rounded-md p-6 md:p-10">
        <h1 className="lg:text-4xl text-3xl font-extrabold text-theme2 mb-4">Privacy Policy</h1>
        <p className="text-base text-gray-600 mb-6">Last updated: November 11, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Freshcon. We value your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            We collect information that you voluntarily provide through our contact form, including:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Address</li>
            <li>Phone number</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Additionally, we collect analytics data, such as your IP address and browsing behavior, through cookies and similar tracking technologies to help us understand how visitors interact with our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. How We Use Collected Information</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Respond to inquiries and communications</li>
            <li>Improve website functionality and user experience</li>
            <li>Analyze website performance for future advertising and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-600 leading-relaxed">
            Freshcon does not currently share your personal information with third-party service providers. In the future, we may use third-party advertising and analytics services to enhance our marketing efforts, which may involve sharing limited data to facilitate these services. We will update this policy accordingly if any third-party sharing begins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Security of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We prioritize the security of your personal information and have implemented standard security practices to protect against unauthorized access, disclosure, or alteration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            Freshcon retains personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. User Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            Currently, Freshcon does not offer options for users to access, modify, or delete their data on the website. For any inquiries about your personal data, please contact us at <Link href="mailto:freshcon@freshcon.net" className="text-blue-500 underline">freshcon@freshcon.net</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Changes to the Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page, and significant changes will be communicated where possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions regarding this Privacy Policy, please reach out to us at <Link href="mailto:freshcon@freshcon.net" className="text-blue-500 underline">freshcon@freshcon.net</Link>.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            <strong>Contact Person:</strong> Anand Mukund Dhodapkar<br />
            <strong>Email:</strong> <Link href="mailto:anand.dhodapkar@gmail.com" className="text-blue-500 underline">anand.dhodapkar@gmail.com</Link>
          </p>
        </section>
      </div>
    </div>
  </div>
  <Footer/>
   </>
  )
}
