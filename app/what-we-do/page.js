"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  useFetchAreaOfExpertise,
  useFetchOngoingProjects,
  useFetchCompletedProjects,
} from "../hooks/useFetchPage";
import { urlFor } from "../sanity/utils";
import Loading from "../components/Loading";
import { ChevronRight } from "lucide-react";

export default function WhatWeDo() {
  const { ongoingProjects, loading, error } = useFetchOngoingProjects();
  const { completedProjects } = useFetchCompletedProjects();
  const { areaOfExpertise } = useFetchAreaOfExpertise();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error loading content</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      {/* Ongoing Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-green-600 mb-12 text-center"
          >
            Ongoing Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={urlFor(project.image).url() || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={`/what-we-do/ongoing/${project._id}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Read More <ChevronRight size={20} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-green-600 mb-12 text-center"
          >
            Completed Projects
          </motion.h2>
          {completedProjects ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg"
                >
                  <Link href={`/what-we-do/completed/${project._id}`}>
                    <img
                      src={
                        urlFor(project?.images[0]).url() || "/placeholder.svg"
                      }
                      alt={project?.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold px-4 text-center">
                        {project?.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              No completed projects found
            </div>
          )}
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-green-600 mb-5 text-center"
          >
            Areas of Expertise
          </motion.h2>
          <p className="text-gray-700 mb-12 max-w-xl mx-auto text-center">
            At FHCI, we are committed to addressing the pressing health
            challenges faced by underserved communities in Africa and improving
            their health outcomes by focusing on these key areas:
          </p>
          {areaOfExpertise ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {areaOfExpertise.map((area, index) => (
                <motion.div
                  key={area._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={urlFor(area.image).url() || "/placeholder.svg"}
                    alt={area.title}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {area.description.substring(0, 100)}...
                  </p>
                  <Link
                    href={`/what-we-do/expertise/${area._id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Learn More <ChevronRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              No areas of expertise found
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
