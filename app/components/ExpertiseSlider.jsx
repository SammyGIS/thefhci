import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "../sanity/utils";

const ExpertiseSlider = ({ areaOfExpertise }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= areaOfExpertise.length
        ? 0
        : prevIndex + itemsPerSlide,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(areaOfExpertise.length - itemsPerSlide, 0)
        : prevIndex - itemsPerSlide,
    );
  };

  const currentSlide = areaOfExpertise.slice(
    currentIndex,
    currentIndex + itemsPerSlide,
  );

  return (
    <div className="relative w-full mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {currentSlide.map((area, index) => (
            <div
              key={area._id}
              className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-between h-[400px]"
            >
              <img
                src={urlFor(area.image).url() || "/placeholder.svg"}
                alt={area.title}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {area.description.slice(0, 100)}
                {area.description.length > 100 ? "..." : ""}
              </p>
              <Link
                href={`/what-we-do/expertise/${area._id}`}
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Learn More <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
      >
        <ChevronLeft size={24} className="text-green-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
      >
        <ChevronRight size={24} className="text-green-600" />
      </button>
    </div>
  );
};

export default ExpertiseSlider;
