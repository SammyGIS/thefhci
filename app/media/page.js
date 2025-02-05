"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useFetchArticles,
  useFetchVideos,
  useFetchGallery,
} from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/utils";
import { ChevronRight, Calendar, Tag } from "lucide-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Pagination from "../components/Pagination";

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState("Articles");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { articles, loading, error } = useFetchArticles();
  const { videos } = useFetchVideos();
  const { gallery } = useFetchGallery();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error loading media content</div>;
  }

  const tabContent = {
    Articles: articles,
    Videos: videos,
    Gallery: gallery,
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const paginatedData = tabContent[activeTab].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(tabContent[activeTab].length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
        style={{ backgroundImage: `url('/images/1media.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl text-white font-bold"
          >
            Media
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white mt-4 max-w-xl text-center text-lg"
          >
            Explore our mission through stories, visuals, and insights that
            capture the impact of our work.
          </motion.p>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-center space-x-4">
          {Object.keys(tabContent).map((tab) => (
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
              } transition-all duration-300 ease-in-out`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Media Content */}
      <div className="container mx-auto py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
              {activeTab}
            </h2>
            {activeTab === "Articles" && (
              <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
                Stay informed on project updates and stories from the field.
              </p>
            )}
            {activeTab === "Videos" && (
              <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
                Watch inspiring videos that showcase our work
              </p>
            )}
            {activeTab === "Gallery" && (
              <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
                Explore a collection of moments captured to tell our story
              </p>
            )}
            {activeTab === "Articles" && (
              <div className="space-y-8 max-w-4xl mx-auto">
                {paginatedData.map((article, index) => (
                  <motion.div
                    key={article.slug.current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col md:flex-row"
                  >
                    <Image
                      src={urlFor(article.image).url() || "/placeholder.svg"}
                      width={544}
                      height={300}
                      alt={article.title}
                      className="object-cover object-center w-full md:w-1/3 h-64 md:h-auto"
                    />
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-green-700 mb-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{formatDate(article._createdAt)}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                            >
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 mt-2">{article.excerpt}</p>
                      </div>
                      <Link
                        href={{
                          pathname: `/media/${article.slug.current}`,
                          // query: { articleData: JSON.stringify(article) },
                        }}
                        className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                      >
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === "Videos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedData.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={`https://img.youtube.com/vi/${new URL(video.link).searchParams.get("v")}/hqdefault.jpg`}
                        alt={video.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
                        >
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-green-600 border-b-8 border-b-transparent ml-1" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-700 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{video.description}</p>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
                      >
                        Watch Now <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === "Gallery" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedData.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={urlFor(image.image).url() || "/placeholder.svg"}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {image.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox for Gallery */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={urlFor(gallery[selectedImageIndex].image).url()}
          nextSrc={urlFor(
            gallery[(selectedImageIndex + 1) % gallery.length].image,
          ).url()}
          prevSrc={urlFor(
            gallery[(selectedImageIndex + gallery.length - 1) % gallery.length]
              .image,
          ).url()}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + gallery.length - 1) % gallery.length,
            )
          }
          onMoveNextRequest={() =>
            setSelectedImageIndex((selectedImageIndex + 1) % gallery.length)
          }
        />
      )}
    </div>
  );
};

export default MediaPage;
