import React, { useState } from "react";
import Header from "@/components/GeneralComponents/Header";
import Footer from "@/components/GeneralComponents/Footer";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const handleValidation = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.purpose) newErrors.purpose = "purpose is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Phone number validation (must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (handleValidation()) {
      setLoading(true);
      try {
        // Submit the form data
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        if (response.ok) {
          // Handle success
          console.log("Form submitted successfully:", data);
          setFormData({
            name: '',
            email: '',
            phone: '',
            purpose: '',
            message: '',
          });
          setShowSuccessModal(true);  // Show success modal
        } else {
          // Handle errors returned from the server
          setErrors({ form: data.message || 'Submission failed.' });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ form: 'An error occurred during form submission.' });
      } finally {
        setLoading(false);
        setTimeout(() => {
          setShowSuccessModal(false)
        }, 2000);
      }
    }
  };

  return (  
    <>
      <Header />

      <div className="relative  font-quicksand">
        <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/contact/contact-bg.png"  alt="Banner Image" objectFit="cover" quality={100} className="w-full h-full object-cover" width={1920} height={768}/>  
      </div>

      <section className="relative overflow-hidden py-16 lg:py-[80px]">
        <div className="lg:max-w-[1200px] mx-auto">
          <div className="flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="text-green-700 mb-2 block text-base font-semibold">Contact Us</span>
                <h2 className="text-neutral-700 mb-4 text-[32px] font-bold uppercase lg:text-[36px]">GET IN TOUCH WITH US</h2>

                {/* <div className="mb-8 flex w-full max-w-[550px]">
                <div className="bg-green-50 text-green-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl sm:h-[70px] sm:max-w-[70px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" /></svg>
                </div>
                <div className="w-full">
                  <h4 className="text-slate-800 mb-1 text-lg font-bold">Our Location</h4>
                  <p className="text-body-color text-base mb-1">MZ- 29, Bansi Trade Center M.G. Road, Indore Madhya Pradesh</p>
                </div>
              </div> */}
                {/* <div className="mb-8 flex w-full max-w-[450px]">
                <div className="bg-green-50 text-green-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl sm:h-[70px] sm:max-w-[70px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-theme2"> <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" /> </svg>
                </div>
                
              </div> */}
                <div className="mb-8 flex w-full max-w-[450px]">
                  <div className="bg-green-50 text-green-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2xl sm:h-[70px] sm:max-w-[70px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>

                  </div>
                  <div className="w-full">
                    <h4 className="text-slate-800 mb-1 text-lg font-bold">Email Address</h4>
                    <p className="text-body-color text-base">freshconindia@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-2xl bg-gray-100 lg:p-8 p-6 shadow-lg">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="mb-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                    <div className="min-h-4 mt-1">
                    {errors.name && <p className="text-red-500 font-medium text-xs">{errors.name}</p>}

                    </div>
                  </div>

                  <div className="mb-2">
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      // required
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    >
                      <option value="" className="text-gray-400">Select Purpose</option>
                      <option value="Retail Inquiry">Retail Inquiry</option>
                      <option value="Distributor Inquiry">Distributor Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Customer Care">Customer Care</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="HoReCa Partnership">HoReCa Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="min-h-4 mt-1">
                    {errors.purpose && <p className="text-red-500 font-medium text-xs">{errors.purpose}</p>}
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                    <div className="min-h-4 mt-1">
                    {errors.email && <p className="text-red-500 font-medium text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                    <div className="min-h-4 mt-1">
                    {errors.phone && <p className="text-red-500 font-medium text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mb-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                    <div className="min-h-4 mt-1">
                    {errors.message && <p className="text-red-500 font-medium text-xs">{errors.message}</p>}
                    </div>

                  </div>
                  <div className="min-h-4 mt-1">
                    {errors.form && <p className="text-red-500 font-medium text-xs">{errors.form}</p>}
                  </div>
                  <div className="justify-start text-left mt-1">
                    <button
                      id="submit"
                      type="submit"
                      className="bg-green-700 w-full rounded font-medium border p-3 text-white"
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div >
      </section >
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-sm">
            <div className="flex flex-col items-center">
              {/* Success SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg font-medium">Form submitted successfully!</p>
              <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Contact;
