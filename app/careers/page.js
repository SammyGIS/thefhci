"use client";

import { useState, useEffect } from "react";
import {
  useFetchJobOpenings,
  useFetchVolunteers,
  useFetchInternships,
} from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import { components } from "../lib/portableText";
import { OctagonX, FileX } from "lucide-react";
import Pagination from "../components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

const CareersPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("Job Openings");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    jobOpenings,
    loading: jobOpeningsLoading,
    error: jobOpeningsError,
  } = useFetchJobOpenings();
  const {
    volunteers,
    loading: volunteersLoading,
    error: volunteersError,
  } = useFetchVolunteers();
  const {
    internships,
    loading: internshipsLoading,
    error: internshipsError,
  } = useFetchInternships();

  const loading = jobOpeningsLoading || volunteersLoading || internshipsLoading;
  const error = jobOpeningsError || volunteersError || internshipsError;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["Job Openings", "Internships", "Volunteer"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error loading content</div>;
  }

  const jobData = {
    "Job Openings": jobOpenings,
    Internships: internships,
    Volunteer: volunteers,
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  const paginatedData = jobData[activeTab].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(jobData[activeTab].length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    router.push(`/careers?tab=${tab.replace(" ", "-")}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/1careers.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-gray-700">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl text-white font-bold"
          >
            Careers
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white mt-4 max-w-xl mx-auto text-center text-lg"
          >
            <span>
              The FHCI is a dynamic and rewarding place to work. We are always
              seeking talented and passionate individuals to join our team and
              contribute to our mission of improving healthcare access and
              quality for underserved communities in Africa.
            </span>
          </motion.p>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Job Openings", "Internships", "Volunteer"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
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

      {/* Careers Content */}
      <div className="container mx-auto py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-5"
        >
          {activeTab}
        </motion.h2>
        {activeTab === "Job Openings" && (
          <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
            Be a part of our dynamic team passionate about making a positive
            impact in public health and development.{" "}
          </p>
        )}
        {activeTab === "Internships" && (
          <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
            Kickstart your career and gain hands-on experience in healthcare and
            community development by joining our internship program.
          </p>
        )}
        {activeTab === "Volunteer" && (
          <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
            Join us on our mission to improve health and well-being for all.
            You'll work directly with communities, support our projects, and be
            a part of initiatives that create lasting change.
          </p>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {paginatedData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedData.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
                  >
                    <Image
                      src="/images/thumbnail.jpg"
                      width={400}
                      height={250}
                      alt="sdg image"
                      className="w-full object-cover h-48"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">
                        {position.jobTitle ||
                          position.volunteerTitle ||
                          position.internshipTitle}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Location:</strong> {position.location}
                      </p>
                      <motion.button
                        onClick={() => handleApplyClick(position)}
                        className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <FileX size={64} className="text-gray-400 mb-4" />
                <p className="text-xl text-gray-600">
                  No {activeTab} available at the moment.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {paginatedData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white p-8 rounded-2xl w-full max-h-[100vh] overflow-y-auto"
            >
              <div className="max-w-2xl mx-auto pb-20">
                <div className="flex justify-end mt-8">
                  <motion.button
                    onClick={handleCloseModal}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <OctagonX />
                  </motion.button>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-4">
                  Apply for{" "}
                  {selectedPosition.jobTitle ||
                    selectedPosition.volunteerTitle ||
                    selectedPosition.internshipTitle}
                </h3>
                <p className="text-gray-700 text-lg">
                  <strong>Location:</strong> {selectedPosition.location}
                </p>
                <div className="mb-4 text-gray-700">
                  {selectedPosition?.volunteerType && (
                    <p>
                      <strong>Volunteer Type:</strong>{" "}
                      {selectedPosition.volunteerType}
                    </p>
                  )}
                  {selectedPosition?.internshipType && (
                    <p>
                      <strong>Internship Type:</strong>{" "}
                      {selectedPosition.internshipType}
                    </p>
                  )}
                  {selectedPosition?.duration && (
                    <p>
                      <strong>Duration:</strong>
                      {selectedPosition.duration}
                    </p>
                  )}
                  {selectedPosition?.startDate && (
                    <p>
                      <strong>Start Date:</strong>
                      {selectedPosition.startDate}
                    </p>
                  )}
                </div>
                <div className="text-gray-600 mb-6">
                  <PortableText
                    value={
                      selectedPosition?.jobDetails ||
                      selectedPosition?.internshipDetails ||
                      selectedPosition?.volunteerDetails
                    }
                    components={components}
                  />
                </div>
                <p className="text-gray-700">
                  Apply Here:
                  {"  "}
                  <a
                    href={selectedPosition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    {selectedPosition?.link}
                  </a>
                </p>{" "}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;
