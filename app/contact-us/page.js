"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Suite C2, Trow Plaza, Jabi, Abuja.",
    },
    { icon: Phone, title: "Phone", content: "+2347035074611" },
    { icon: Mail, title: "Email", content: "famkrishealthcare@thefhci.org" },
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", color: "text-green-600" },
    { icon: Instagram, href: "#", color: "text-green-600" },
    { icon: Linkedin, href: "#", color: "text-green-600" },
    { icon: Youtube, href: "#", color: "text-green-600" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/manager.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl"
          >
            Get in touch with us for more information
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              We'd love to hear from you!
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Whether you have a question, want to learn more about our work, or
              are interested in partnering with us, we are here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Connect with us
            </h3>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={item.color}
                >
                  <item.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-700">We'd love to hear from you!</p>
          </motion.div>

          <ContactForm setIsSubmitted={setIsSubmitted} />

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center text-green-600 text-xl font-semibold"
            >
              <p>Thank you for reaching out! We will get back to you soon.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-700">
              Our office location on Google Maps
            </p>
          </motion.div>

          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.7824428987!2d7.367465084910532!3d9.024416368328325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1734536828017!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
