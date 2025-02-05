import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = ({ setIsSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        "service_c41263l", // Get this from EmailJS dashboard
        "template_uiaf0x5", // Get this from EmailJS dashboard
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "famkrishealthcare@gmail.com", // Your email address
        },
        "q6-uhGRAZiEtfk1aT", // Get this from EmailJS dashboard
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl text-gray-700"
      onSubmit={handleSubmit}
    >
      {["name", "email", "message"].map((field) => (
        <motion.div
          key={field}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: ["name", "email", "message"].indexOf(field) * 0.2,
            duration: 0.5,
          }}
          className="mb-6"
        >
          <label className="block text-lg font-medium text-gray-700 mb-2 capitalize">
            {field}
          </label>
          {field === "message" ? (
            <textarea
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder={`Your ${field}`}
              rows={6}
              required
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder={`Your ${field}`}
              required
            />
          )}
        </motion.div>
      ))}

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center"
      >
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          className={`bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
