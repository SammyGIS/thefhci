// app/contact-us/page.js
"use client"; // This marks the file as a Client Component

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to the backend
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('/images/contact-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4">Get in touch with us for more information</p>
        </div>
      </section>

            {/* Contact Details Section */}
            <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-600">Our Contact Details</h2>
            <p className="text-lg text-gray-700">Feel free to always reach out to us using the information below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-700 mt-2">
                Plot 1551, Apo Resettlement Zone E,<br />
                FCT, Abuja, Nigeria
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-700 mt-2">+234 800 123 4567</p>
              <p className="text-gray-700 mt-2">+234 800 234 5678</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-700 mt-2">contact@famkris.com</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Social Media</h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-600">Send Us a Message</h2>
            <p className="text-lg text-gray-700">We'd love to hear from you!</p>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {isSubmitted && (
              <div className="mt-4 text-center text-green-600">
                <p>Thank you for reaching out! We will get back to you soon.</p>
              </div>
            )}
          </motion.form>
        </div>
      </section>



      {/* Google Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-600">Find Us on the Map</h2>
            <p className="text-lg text-gray-700">Our office location on Google Maps.</p>
          </div>

          <div className="relative w-full h-[600px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.7824428987!2d7.367465084910532!3d9.024416368328325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1734536828017!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-lg"
            ></iframe>
            </div>
        </div>
      </section>

    </div>
  );
}
