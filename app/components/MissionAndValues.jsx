import { motion } from "framer-motion";
import { Heart, Shield, Users, Lightbulb, Award } from "lucide-react";

const MissionAndValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold transparency and accountability in our actions and use of resources.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We are driven by a deep empathy and care for the people and communities we serve.",
    },
    {
      icon: Users,
      title: "Equity",
      description: "We believe in fair and equal access to healthcare for all.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We value partnerships that enhance our ability to make a difference.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creative approaches to solving healthcare challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for continuous improvement and deliver the highest quality services.",
    },
  ];

  return (
    <div className="space-y-8 text-gray-700 md:text-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h3>
        <p>
          To improve healthcare access and quality for rural and underserved
          communities in Africa, making a meaningful impact in the lives of
          individuals and families in need.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h3>
        <p>
          To be a leading healthcare NGO committed to ensuring everyone in
          Africa has access to quality healthcare services.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold mb-6 text-green-600">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <value.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MissionAndValues;
