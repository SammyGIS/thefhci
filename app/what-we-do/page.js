"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  useFetchAreaOfExpertise,
  useFetchOngoingProjects,
  useFetchCompletedProjects,
} from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ExpertiseSlider from "../components/ExpertiseSlider";

export default function WhatWeDo() {
  const { ongoingProjects, loading, error } = useFetchOngoingProjects();
  const { completedProjects } = useFetchCompletedProjects();
  const { areaOfExpertise } = useFetchAreaOfExpertise();

  const [currentOngoingPage, setCurrentOngoingPage] = useState(1);
  const [currentCompletedPage, setCurrentCompletedPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastOngoing = currentOngoingPage * projectsPerPage;
  const indexOfFirstOngoing = indexOfLastOngoing - projectsPerPage;
  const currentOngoingProjects = ongoingProjects?.slice(
    indexOfFirstOngoing,
    indexOfLastOngoing,
  );

  const indexOfLastCompleted = currentCompletedPage * projectsPerPage;
  const indexOfFirstCompleted = indexOfLastCompleted - projectsPerPage;
  const currentCompletedProjects = completedProjects?.slice(
    indexOfFirstCompleted,
    indexOfLastCompleted,
  );

  const paginateOngoing = (pageNumber) => setCurrentOngoingPage(pageNumber);
  const paginateCompleted = (pageNumber) => setCurrentCompletedPage(pageNumber);

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
          {ongoingProjects?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentOngoingProjects.map((project, index) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    type="ongoing"
                  />
                ))}
              </div>
              <Pagination
                projectsPerPage={projectsPerPage}
                totalProjects={ongoingProjects.length}
                paginate={paginateOngoing}
                currentPage={currentOngoingPage}
              />
            </>
          ) : (
            <div className="text-center text-gray-600">
              No ongoing projects found
            </div>
          )}
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
          {completedProjects?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCompletedProjects.map((project) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    type="completed"
                  />
                ))}
              </div>
              <Pagination
                projectsPerPage={projectsPerPage}
                totalProjects={completedProjects.length}
                paginate={paginateCompleted}
                currentPage={currentCompletedPage}
              />
            </>
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
            className="text-4xl font-bold text-green-600 mb-12 text-center"
          >
            Areas of Expertise
          </motion.h2>
          {areaOfExpertise ? (
            <ExpertiseSlider areaOfExpertise={areaOfExpertise} />
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

const Pagination = ({
  projectsPerPage,
  totalProjects,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8 flex justify-center">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                currentPage === number
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 hover:bg-green-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
