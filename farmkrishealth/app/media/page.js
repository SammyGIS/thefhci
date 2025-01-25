"use client";

import { useState } from "react";

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState("Articles");

  const articles = [
    {
      title: "The Future of Tech in Nigeria",
      date: "January 15, 2024",
      author: "John Doe",
      comments: 5,
      excerpt:
        "Explore the emerging trends in technology and their impact on various sectors in Nigeria...",
      link: "#",
    },
    {
      title: "The Impact of Healthcare Innovations",
      date: "February 10, 2024",
      author: "Jane Smith",
      comments: 3,
      excerpt:
        "This article examines how innovations in healthcare are changing the landscape of the industry...",
      link: "#",
    },
    // Add more articles as needed
  ];

  const videos = [
    {
      title: "Innovation in Action",
      description: "Watch our exclusive documentary on groundbreaking innovations.",
      thumbnail: "/images/video-thumbnail1.jpg",
      duration: "12:45",
      views: 1200,
      link: "#",
    },
    {
      title: "Interviews with Pioneers",
      description: "Engage with thought leaders in this series of interviews.",
      thumbnail: "/images/video-thumbnail2.jpg",
      duration: "08:30",
      views: 800,
      link: "#",
    },
    {
      title: "Interviews with Pioneers",
      description: "Engage with thought leaders in this series of interviews.",
      thumbnail: "/images/video-thumbnail2.jpg",
      duration: "08:30",
      views: 800,
      link: "#",
    },
    // Add more videos as needed
  ];

  const galleryImages = [
    {
      src: "/images/image2.png",
      title: "Community Outreach",
      description: "A snapshot of our recent community outreach program.",
    },
    {
      src: "/images/image2.png",
      title: "Environmental Impact",
      description: "A visual representation of our environmental sustainability efforts.",
    },
    {
      src: "/images/aboutimg.jpg",
      title: "Environmental Impact",
      description: "A visual representation of our environmental sustainability efforts.",
    },
    // Add more gallery images as needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/media.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Media</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            Watch, read, and explore our content.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Articles", "Videos", "Gallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Media Content */}
      <div className="container mx-auto py-8">
        {/* Articles Section */}
        {activeTab === "Articles" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Articles
            </h2>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700">{article.title}</h3>
                    <p className="text-gray-500 text-sm">{article.date} by {article.author}</p>
                    <p className="text-gray-600 mt-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-400">{article.comments} Comments</span>
                      <a
                        href={article.link}
                        className="text-green-600 hover:text-green-700 font-bold"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === "Videos" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <button className="text-white text-lg font-bold">Play</button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700">{video.title}</h3>
                    <p className="text-gray-500 text-sm">Duration: {video.duration} | Views: {video.views}</p>
                    <p className="text-gray-600 mt-2">{video.description}</p>
                    <a
                      href={video.link}
                      className="text-green-600 hover:text-green-700 font-bold mt-4 block"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {activeTab === "Gallery" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-black bg-opacity-50 p-4 text-center">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default MediaPage;
