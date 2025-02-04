"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  useFetchUpcomingEvents,
  useFetchPastEvents,
} from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import Image from "next/image";
import { urlFor } from "../sanity/utils";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "../components/ImageSlider";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [modalData, setModalData] = useState(null);

  const { upcomingEvents, loading, error } = useFetchUpcomingEvents();
  const { pastEvents } = useFetchPastEvents();

  const data = {
    Upcoming: upcomingEvents,
    Past: pastEvents,
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }

  const openModal = (event) => {
    setModalData(event);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/events.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl text-white font-bold"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white mt-4 max-w-xl text-center text-lg"
          >
            Stay informed about upcoming events and learn more about past
            events.
          </motion.p>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Upcoming", "Past"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-all duration-300 ease-in-out`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data[activeTab].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <Image
                  src={urlFor(event?.image || event?.eventImages[0]).url()}
                  width={544}
                  height={192}
                  alt={event.title}
                  className="object-cover object-center w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Date:</strong>{" "}
                    {new Date(event.eventDate).toDateString()}
                  </p>
                  <p className="text-gray-700 mt-2 line-clamp-3">
                    {event.description}
                  </p>
                  <motion.button
                    onClick={() => openModal(event)}
                    className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal for Event Details */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                {modalData.title}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong>{" "}
                {new Date(modalData.eventDate).toDateString()}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Location:</strong> {modalData.location || "TBA"}
              </p>
              {modalData.eventImages && modalData.eventImages.length > 0 && (
                <>
                  <p className="font-semibold text-lg mb-2 text-gray-700">
                    Highlights
                  </p>
                  <ImageSlider images={modalData.eventImages} />
                </>
              )}
              <p className="text-gray-700 mt-4 mb-6">{modalData.description}</p>
              {modalData.link && (
                <p className="mb-6 text-gray-700">
                  Register Here: {"  "}
                  <a
                    href={modalData.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-green-600 font-semibold underline"
                  >
                    {modalData.link}
                  </a>
                </p>
              )}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
