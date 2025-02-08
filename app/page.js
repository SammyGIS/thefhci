"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { urlFor } from "./sanity/utils";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import {
  useFetchArticles,
  useFetchVideo,
  useFetchSponsors,
  useFetchSlider,
  useFetchImpactStats,
  useFetchCompletedProjects,
} from "./hooks/useFetchPage";
import Loading from "./components/Loading";
import Marquee from "react-fast-marquee";
import HeroCarousel from "./components/HeroCarousel";
import SubscriptionModal from "./components/SubscriptionModal";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const { articles, loading, error } = useFetchArticles();
  const { completedProjects } = useFetchCompletedProjects();
  const { sponsors } = useFetchSponsors();
  const { slider } = useFetchSlider();
  const { impactStats } = useFetchImpactStats();
  const { video } = useFetchVideo();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const getFileUrl = (fileRef) => {
    if (!fileRef) return null;
    const fileId = fileRef.split("-").slice(1).join(".");
    return `https://cdn.sanity.io/files/2aomwlx8/production/${fileId}`;
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error loading media content</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Carousel Section */}
      {slider ? <HeroCarousel slider={slider} /> : <div>Loading slides...</div>}

      {/* Our Mission and Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-500 to-green-400 text-white py-16"
      >
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between bg-white py-12 rounded-xl shadow-xl overflow-hidden">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-left md:px-8 mb-8 md:mb-0"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
              Our Mission and Values
            </h2>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              We are the Famkris Healthcare Initiative (FHCI), a leading
              non-governmental organization, dedicated to providing
              community-based and primary healthcare intervention programs
              across Africa.
            </p>

            <div className="hidden md:block space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To improve healthcare access and quality for rural and
                  underserved communities in Africa, making a meaningful impact
                  in the lives of individuals and families in need.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Values
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  {[
                    "Integrity",
                    "Compassion",
                    "Equity",
                    "Collaboration",
                    "Innovation",
                    "Excellence",
                  ].map((value, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="transition-all duration-300 hover:text-green-500"
                    >
                      {value}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.a
              href="/who-we-are"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 text-green-600 font-semibold text-lg border-b-2 border-green-600 hover:text-white hover:border-green-500 transition-all duration-300 ease-in-out"
            >
              Read More
            </motion.a>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 h-96 md:h-[800px] relative md:mt-0 mt-8"
          >
            <video
              // src="/videos/mission-video.mp4"
              src={getFileUrl(video?.videoFile?.asset?._ref)}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full text-center">
              <p className="font-semibold text-lg">
                Empowering a sustainable future
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8"
          >
            Project Spotlight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          >
            We have successfully delivered numerous projects that empower
            communities and foster sustainable change. Here are some of the key
            projects that showcase our dedication to making a positive impact.
          </motion.p>

          <div>
            {completedProjects ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {completedProjects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={
                        urlFor(project?.images[0]).url() || "/placeholder.svg"
                      }
                      alt={project?.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {project?.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {project?.description}
                      </p>
                      <Link
                        href={`/what-we-do/completed/${project?._id}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2
                        bg-green-600 text-white rounded-lg hover:bg-green-700
                        transition-colors duration-300"
                      >
                        {" "}
                        Read More <ChevronRight size={20} className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div>Loading projects...</div>
            )}

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <motion.a
                href="/what-we-do"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
              >
                View All Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Statistics Section */}
      {impactStats ? (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 py-16"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800"
            >
              Our Impact So Far
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {impactStats.stats.map((stat, index) => (
                <motion.div
                  key={stat._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-green-600 text-white p-6 rounded-full shadow-md"
                  >
                    {/* SVG icons based on index */}
                    {index === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 12.75l6 6 8.25-10.5"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 12.75l6 6 8.25-10.5"
                        />
                      </svg>
                    )}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-700 mt-4">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      separator=","
                    />
                    +
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ) : (
        <div>Loading Impact Stats...</div>
      )}

      {/* Featured Insights Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8"
          >
            Featured Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12"
          >
            Explore our in-depth insights and articles that provide valuable
            perspectives on current trends, challenges, and opportunities in our
            field of expertise.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.slug.current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <Image
                  src={urlFor(article.image).url() || "/placeholder.svg"}
                  width={544}
                  height={300}
                  alt={article.title}
                  className="object-cover object-center w-full h-64"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{article.excerpt}</p>
                  </div>
                  <Link
                    href={{
                      pathname: `/media/${article.slug.current}`,
                    }}
                    className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/media"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
            >
              View All Articles
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Sponsors Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800"
          >
            Our Sponsors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            We are proud to partner with organizations that share our vision.
          </motion.p>
          {sponsors ? (
            <Marquee className="space-x-8">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 flex items-center justify-center transition-all"
                >
                  <Image
                    src={urlFor(sponsor.image).url() || "/placeholder.svg"}
                    alt="sponsor image"
                    width={200}
                    height={50}
                    className="px-10 object-contain"
                  />
                </motion.div>
              ))}
            </Marquee>
          ) : (
            <div>Loading sponsors...</div>
          )}
        </div>
      </motion.section>

      {/* Subscription Pop-Up Modal */}
      <SubscriptionModal showPopup={showPopup} setShowPopup={setShowPopup} />
    </motion.div>
  );
}
