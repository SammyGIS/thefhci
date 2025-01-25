"use client";

import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const ongoingProjects = [
  {
    id: 1,
    title: "Project A",
    image: "/images/aboutimg.jpg",
    description: `This project focuses on leveraging technology to enhance healthcare outcomes. 
    Our goal is to provide solutions that are sustainable and scalable.`,
    readMore: `In-depth details about Project A: The project explores new methods of healthcare innovation, ensuring access to underserved populations globally.`,
  },
  {
    id: 2,
    title: "Project B",
    image: "/images/aboutimg.jpg",
    description: `With this initiative, we are improving access to education in underserved regions, 
    enabling better opportunities for communities in need.`,
    readMore: `In-depth details about Project B: The initiative involves building modern learning infrastructure, delivering teacher training programs, and creating digital learning platforms.`,
  },
];

const completedProjects = [
  {
    id: 1,
    title: "Completed Project 1",
    image: "/images/aboutimg.jpg",
  },
  {
    id: 2,
    title: "Completed Project 2",
    image: "/images/aboutimg.jpg",
  },
  {
    id: 3,
    title: "Completed Project 3",
    image: "/images/aboutimg.jpg",
  },
  {
    id: 4,
    title: "Completed Project 4",
    image: "/images/aboutimg.jpg",
  },
];

// const areasOfExpertise = [
//   {
//     id: 1,
//     title: "HIV",
//     description: "Our work in the fight against HIV.",
//   },
//   {
//     id: 2,
//     title: "Malaria",
//     description: "Projects focused on malaria prevention and treatment.",
//   },
//   {
//     id: 3,
//     title: "Other Health Issues",
//     description: "Includes work in areas like Tuberculosis, Maternal Health, etc.",
//   },
// ];

const expertiseAreas = [
  {
    id: 1,
    title: "HIV",
    description: "Our work in the fight against HIV.",
    image: "/images/hiv.jpg",
  },
  {
    id: 2,
    title: "Malaria",
    description: "Projects focused on malaria prevention and treatment.",
    image: "/images/malaria.jpg",
  },
  {
    id: 3,
    title: "Tuberculosis",
    description: "Efforts to combat Tuberculosis through treatment and awareness.",
    image: "/images/tb.jpg",
  },
  {
    id: 4,
    title: "Maternal Health",
    description: "Improving maternal and child health globally.",
    image: "/images/maternal.jpg",
  },
  {
    id: 5,
    title: "Nutrition",
    description: "Promoting better nutrition for a healthier future.",
    image: "/images/nutrition.jpg",
  },
  {
    id: 6,
    title: "Vaccination",
    description: "Increasing vaccine coverage and awareness.",
    image: "/images/vaccination.jpg",
  },
];



export default function WhatWeDo() {
  const [selectedOngoingProject, setSelectedOngoingProject] = useState(null);
  const [selectedCompletedProject, setSelectedCompletedProject] = useState(null);

    // Settings for the carousel
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024, // Tablet and smaller
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600, // Mobile
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <div>
      {/* Ongoing Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-600 mb-8">
            Ongoing Projects
          </h2>
          <div className="space-y-12">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row items-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0"
                />
                <div className="md:ml-8">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-gray-700">{project.description}</p>
                  <button
                    className="mt-4 text-blue-600 hover:underline"
                    onClick={() => setSelectedOngoingProject(project)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-600 mb-8">
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="relative cursor-pointer"
                onClick={() => setSelectedCompletedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-600 mb-8">
            Areas of Expertise
          </h2>
          <Slider {...sliderSettings}>
            {expertiseAreas.map((area) => (
              <div key={area.id} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* Modal for Ongoing Project Details */}
      {selectedOngoingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedOngoingProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedOngoingProject.image}
              alt={selectedOngoingProject.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedOngoingProject.title}
            </h3>
            <p className="text-gray-700">{selectedOngoingProject.readMore}</p>
          </div>
        </div>
      )}

      {/* Modal for Completed Project Details */}
      {selectedCompletedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedCompletedProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedCompletedProject.image}
              alt={selectedCompletedProject.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedCompletedProject.title}
            </h3>
            <p className="text-gray-700">
              This is a detailed description of {selectedCompletedProject.title}.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
