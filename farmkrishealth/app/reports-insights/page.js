"use client";

import { useState } from "react";

const ReportsAndInsights = () => {
  const [activeTab, setActiveTab] = useState("Reports");

  // Updated data structure
  const data = {
    Reports: [
      {
        image: "/images/report.jpg",
        title: "Annual Report 2023",
        description: "Detailed insights and performance overview of 2023.",
      },
      {
        image: "/images/thumbnail.jpg",
        title: "Project Report 2023",
        description: "A comprehensive review of all ongoing projects.",
      },
      {
        image: "/images/report.jpg",
        title: "Annual Report 2023",
        description: "Detailed insights and performance overview of 2023.",
      },
      {
        image: "/images/thumbnail.jpg",
        title: "Project Report 2023",
        description: "A comprehensive review of all ongoing projects.",
      },
    ],
    Dashboards: [
      {
        image: "/images/dashboard.jpg",
        title: "Interactive Wastewater Map",
        description: "Explore real-time wastewater data across the US.",
        link: "#",
      },
      {
        image: "/images/dashboard.jpg",
        title: "Healthcare Analytics Dashboard",
        description: "Track key healthcare performance indicators.",
        link: "#",
      },
      {
        image: "/images/dashboard.jpg",
        title: "Interactive Wastewater Map",
        description: "Explore real-time wastewater data across the US.",
        link: "#",
      },
      {
        image: "/images/dashboard.jpg",
        title: "Healthcare Analytics Dashboard",
        description: "Track key healthcare performance indicators.",
        link: "#",
      },
    ],
    Data: [
      {
        image: "/images/data.jpg",
        title: "Health Survey Data 2023",
        tags: ["Health", "Survey"],
        downloadLink: "#",
      },
      {
        image: "/images/data.jpg",
        title: "Population Statistics",
        tags: ["Demographics", "Population"],
        downloadLink: "#",
      },
    ],
    Publications: [
      {
        image: "/images/publications.jpg",
        title: "Impact of Healthcare Innovations",
        description: "A deep dive into the impact of recent innovations.",
        link: "#",
      },
      {
        image: "/images/publications.jpg",
        title: "Sustainability Trends 2023",
        description: "Key insights into global sustainability trends.",
        link: "#",
      },
      {
        image: "/images/publications.jpg",
        title: "Impact of Healthcare Innovations",
        description: "A deep dive into the impact of recent innovations.",
        link: "#",
      },
      {
        image: "/images/publications.jpg",
        title: "Sustainability Trends 2023",
        description: "Key insights into global sustainability trends.",
        link: "#",
      },
    ],
  };

  return (
    <div>
      {/* Header Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/thumbnail.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Reports & Insights</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            Dive into our data, reports, and findings.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Reports", "Dashboards", "Data", "Publications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded ${
                activeTab === tab ? "bg-green-600 text-white" : "bg-white text-green-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Reports Section */}
        {activeTab === "Reports" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.Reports.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={report.image}
                  alt={report.title}
                  className="rounded-t-lg w-full h-32 object-cover"
                />
                <h3 className="text-lg font-bold text-green-700 mt-2">{report.title}</h3>
                <p className="text-gray-700 mt-2">{report.description}</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  View More
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Dashboards Section */}
        {activeTab === "Dashboards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.Dashboards.map((dashboard, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="rounded-t-lg w-full h-32 object-cover"
                />
                <h3 className="text-lg font-bold text-green-700">
                  <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                    {dashboard.title}
                  </a>
                </h3>
                <p className="text-gray-700 mt-2">
                  <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                    {dashboard.description}
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Data Section */}
        {activeTab === "Data" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.Data.map((dataset, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={dataset.image}
                  alt={dataset.title}
                  className="rounded-t-lg w-full h-32 object-cover"
                />
                <h3 className="text-lg font-bold text-green-700">{dataset.title}</h3>
                <div className="flex space-x-2 mt-2">
                  {dataset.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-600 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Download
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Publications Section */}
        {activeTab === "Publications" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.Publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="rounded-t-lg w-full h-32 object-cover"
                />
                <h3 className="text-lg font-bold text-green-700">{pub.title}</h3>
                <p className="text-gray-700 mt-2">{pub.description}</p>
                <a
                  href={pub.link}
                  className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  View More
                </a>
              </div>
            ))}
          </div>
        )}     
      </div>
        

    </div>
  );
};

export default ReportsAndInsights;
