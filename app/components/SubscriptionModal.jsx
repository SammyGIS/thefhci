import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SubscriptionModal = ({ showPopup, setShowPopup }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SHEETS_URL =
      "https://script.google.com/macros/s/AKfycbwQ3zlWC2hh642IIzo3346cZ6EbV105-RQM_sbfv6IhuG5uzvEOrTpTcDTNCj35-2h2/exec";

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch(
        `${GOOGLE_SHEETS_URL}?email=${encodeURIComponent(email)}`,
        {
          method: "GET",
          mode: "no-cors",
        },
      );

      setSubmitStatus("success");
      setEmail("");

      setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white p-8 rounded-xl w-96 text-center relative shadow-xl"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-extrabold mb-6 text-gray-900">
              Stay Updated with Our Latest News!
            </h3>
            <p className="text-lg mb-6 text-gray-600">
              Subscribe to our newsletter and get the latest updates, offers,
              and insights directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 
                  ${isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"} text-white`}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </motion.button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600">Successfully subscribed!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600">
                  Error subscribing. Please try again.
                </p>
              )}
            </form>

            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Your email is safe with us.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
