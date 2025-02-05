import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "../sanity/utils";

const ExpertiseSlider = ({ areaOfExpertise }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= areaOfExpertise.length ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? areaOfExpertise.length - 1 : prevIndex - 1,
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % areaOfExpertise.length;
      items.push({ item: areaOfExpertise[index], index });
    }
    return items;
  };

  return (
    <div className="relative w-full mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        exit={{ x: -50 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {getVisibleItems().map(({ item: area, index }, arrayIndex) => (
          <motion.div
            key={`${area._id}-${index}`}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: arrayIndex * 0.1 }}
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
          </motion.div>
        ))}
      </motion.div>

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

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {areaOfExpertise.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSlider;
