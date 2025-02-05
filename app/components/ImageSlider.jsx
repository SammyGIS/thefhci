import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { urlFor } from "../sanity/utils";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, autoplayEnabled]);

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
    setAutoplayEnabled(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAutoplayEnabled(true);
  };

  const NavigationButtons = ({ isModal }) => (
    <>
      <button
        onClick={goToPrev}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-20 ${
          isModal ? "md:left-8" : ""
        }`}
      >
        <ChevronLeft size={isModal ? 32 : 24} />
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-20 ${
          isModal ? "md:right-8" : ""
        }`}
      >
        <ChevronRight size={isModal ? 32 : 24} />
      </button>
    </>
  );

  return (
    <>
      <div className="relative w-full md:h-[40rem] h-96 overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 cursor-pointer"
            onClick={handleImageClick}
          >
            <Image
              src={urlFor(images[currentIndex]).url() || "/placeholder.svg"}
              alt={`Slide ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
        <NavigationButtons isModal={false} />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 z-40 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <Image
                  src={urlFor(images[currentIndex]).url() || "/placeholder.svg"}
                  alt={`Slide ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </motion.div>
            </AnimatePresence>
            <NavigationButtons isModal={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
