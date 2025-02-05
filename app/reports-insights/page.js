"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useFetchReports,
  useFetchDashboard,
  useFetchData,
  useFetchPublications,
  useFetchBrochures,
} from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import { urlFor } from "../sanity/utils";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { components } from "../lib/portableText";

const ReportsAndInsights = () => {
  const [activeTab, setActiveTab] = useState("Reports");
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { reports, loading, error } = useFetchReports();
  const { dashboard } = useFetchDashboard();
  const { data } = useFetchData();
  const { publications } = useFetchPublications();
  const { brochures } = useFetchBrochures();

  const datas = {
    Reports: reports,
    Dashboards: dashboard,
    Data: data,
    Publications: publications,
    Brochures: brochures,
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error loading content</div>;
  }

  const getFileUrl = (fileRef) => {
    if (!fileRef) return null;
    const fileId = fileRef.split("-").slice(1).join(".");
    return `https://cdn.sanity.io/files/2aomwlx8/production/${fileId}`;
  };

  const paginatedData = datas[activeTab].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(datas[activeTab].length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/thumbnail.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold mb-4">
            Reports & Insights
          </h1>
          <p className="text-white text-xl max-w-xl text-center">
            Dive into our data, reports, and findings.
          </p>
        </div>
      </motion.section>

      {/* Tabs */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {Object.keys(datas).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-lg text-lg font-semibold ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-12 md:px-0 px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={urlFor(item.image).url() || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      {item.title}
                    </h3>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-gray-600 mb-4">{item.information}</p>
                    {activeTab === "Reports" && (
                      <a
                        href={getFileUrl(item?.file?.asset?._ref)}
                        target="_blank"
                        download
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                        rel="noreferrer"
                      >
                        <Download size={18} className="mr-2" /> Download
                      </a>
                    )}
                    {activeTab === "Dashboards" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-2" /> View
                        Dashboard
                      </a>
                    )}
                    {activeTab === "Data" && (
                      <a
                        href={getFileUrl(item?.excelFile?.asset?._ref)}
                        target="_blank"
                        download
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                        rel="noreferrer"
                      >
                        <Download size={18} className="mr-2" /> Download Data
                      </a>
                    )}
                    {(activeTab === "Publications" ||
                      activeTab === "Brochures") && (
                      <button
                        onClick={() => setSelectedPublication(item)}
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                      >
                        View More
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Publication Modal */}
      <Modal
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
      >
        {selectedPublication && (
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {selectedPublication.title}
            </h2>
            <Image
              src={
                urlFor(selectedPublication.image).url() || "/placeholder.svg"
              }
              alt={selectedPublication.title}
              width={600}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">
              {selectedPublication.information}
            </p>
            <div className="text-gray-700 mb-5">
              <PortableText
                value={selectedPublication?.wysiwygEditor}
                components={components}
              />
            </div>
            <a
              href={selectedPublication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              <ExternalLink size={18} className="mr-2" /> Read Full Publication
            </a>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default ReportsAndInsights;
