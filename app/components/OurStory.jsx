import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-gray-700 md:text-xl">
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4 text-green-600"
        >
          Our Journey
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <p>
            This initiative began in 2011 with a simple mission: to provide
            medical and healthcare services to communities and individuals in
            need. What started as a passionate initiative to address health
            challenges quickly grew into a movement driven by the desire to
            create lasting impact and transform lives.
          </p>
          <p>
            In 2017, recognizing the need for a more formal structure to scale
            its impact effectively, the initiative transitioned into a
            registered Non-Governmental and Non-Profit Organization. This
            formalization allowed The FHCI to strengthen its operations, expand
            its reach, and solidify its role as a key player in community health
            and development.
          </p>
        </motion.div>
      </div>
      <div className="bg-green-50 p-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold mb-4 text-green-600"
        >
          Our Founder
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          The Famkris Healthcare Initiative was founded by Pharmacist Christian
          O. Onuh, with a vision to address the healthcare challenges faced by
          Africa's rural and underserved communities. Inspired by the belief
          that everyone deserves quality healthcare services, we aim to bridge
          this gap.
        </motion.p>
      </div>
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl font-bold mb-4 text-green-600"
        >
          Our Impact
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Over the years, we have focused on providing practical solutions to
          critical health issues, including HIV, malaria, tuberculosis,
          vaccination, maternal health, and communicable and non-communicable
          diseases. We have grown significantly to make a lasting impact and a
          tangible difference in the lives of countless people and communities.
        </motion.p>
      </div>
    </div>
  );
};

export default OurStory;
