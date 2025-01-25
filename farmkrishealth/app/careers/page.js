"use client";

import { useState } from "react";

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("Job Openings");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const jobData = {
    "Job Openings": [
      {
        title: "Software Engineer",
        location: "Lagos, Nigeria",
        description:
          "We are looking for a Software Engineer to join our innovative tech team. The ideal candidate will have a passion for coding, building scalable applications, and solving complex problems.",
        googleFormLink: "https://forms.gle/abc123", // Google Form link for this job
        image: "/images/manager.jpg", // Example image path
      },
      {
        title: "Product Manager",
        location: "Abuja, Nigeria",
        description:
          "Join our product team as a Product Manager. You will work closely with cross-functional teams to drive product strategies and lead product development.",
        googleFormLink: "https://forms.gle/xyz456", // Google Form link for this job
        image: "/images/manager.jpg", // Example image path
      },
      {
        title: "Product Manager",
        location: "Abuja, Nigeria",
        description:
          "Join our product team as a Product Manager. You will work closely with cross-functional teams to drive product strategies and lead product development.",
        googleFormLink: "https://forms.gle/xyz456", // Google Form link for this job
        image: "/images/manager.jpg", // Example image path
      },
    ],
    Internships: [
      {
        title: "Marketing Intern",
        location: "Remote",
        description:
          "We are offering an exciting internship opportunity in our marketing department. If you have a passion for digital marketing, this role is for you.",
        googleFormLink: "https://forms.gle/def789", // Google Form link for this internship
        image: "/images/interns.jpg", // Example image path
      },
      {
        title: "Data Science Intern",
        location: "Lagos, Nigeria",
        description:
          "Gain hands-on experience working with big data, machine learning, and advanced analytics in our data science internship program.",
        googleFormLink: "https://forms.gle/ghi101", // Google Form link for this internship
        image: "/images/datascience.jpg", // Example image path
      },
      {
        title: "Data Science Intern",
        location: "Lagos, Nigeria",
        description:
          "Gain hands-on experience working with big data, machine learning, and advanced analytics in our data science internship program.",
        googleFormLink: "https://forms.gle/ghi101", // Google Form link for this internship
        image: "/images/datascience.jpg", // Example image path
      },
    ],
    Volunteer: [
      {
        title: "Community Outreach Volunteer",
        location: "Lagos, Nigeria",
        description:
          "Help us make a difference in local communities. As a volunteer, you will engage with community members and support our outreach programs.",
        googleFormLink: "https://forms.gle/jkl112", // Google Form link for this volunteer
        image: "/images/volunteer.jpg", // Example image path
      },
      {
        title: "Community Outreach Volunteer",
        location: "Lagos, Nigeria",
        description:
          "Help us make a difference in local communities. As a volunteer, you will engage with community members and support our outreach programs.",
        googleFormLink: "https://forms.gle/jkl112", // Google Form link for this volunteer
        image: "/images/volunteer.jpg", // Example image path
      },
      {
        title: "Community Outreach Volunteer",
        location: "Lagos, Nigeria",
        description:
          "Help us make a difference in local communities. As a volunteer, you will engage with community members and support our outreach programs.",
        googleFormLink: "https://forms.gle/jkl112", // Google Form link for this volunteer
        image: "/images/volunteer.jpg", // Example image path
      },
    ],
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/interns.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Careers</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            Join us and make a difference. Explore opportunities to grow, learn, and contribute to meaningful projects.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Job Openings", "Internships", "Volunteer"].map((tab) => (
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

      {/* Careers Content */}
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {activeTab}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobData[activeTab].map((position, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={position.image}
                alt={position.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700">{position.title}</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Location:</strong> {position.location}
                </p>
                <p className="text-gray-600 mt-4">{position.description}</p>
                <button
                  onClick={() => handleApplyClick(position)}
                  className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Apply for {selectedPosition.title}
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Location:</strong> {selectedPosition.location}
            </p>
            <p className="text-gray-600 mb-6">{selectedPosition.description}</p>
            <a
              href={selectedPosition.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Go to Google Form
            </a>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;






// "use client";

// import { useState } from "react";

// const CareersPage = () => {
//   const [activeTab, setActiveTab] = useState("Job Openings");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   const jobData = {
//     "Job Openings": [
//       {
//         title: "Software Engineer",
//         location: "Lagos, Nigeria",
//         description:
//           "We are looking for a Software Engineer to join our innovative tech team. The ideal candidate will have a passion for coding, building scalable applications, and solving complex problems.",
//         link: "#",
//         image: "/images/manager.jpg", // Example image path
//       },
//       {
//         title: "Product Manager",
//         location: "Abuja, Nigeria",
//         description:
//           "Join our product team as a Product Manager. You will work closely with cross-functional teams to drive product strategies and lead product development.",
//         link: "#",
//         image: "/images/manager.jpg", // Example image path
//       },
//       {
//         title: "Product Manager",
//         location: "Abuja, Nigeria",
//         description:
//           "Join our product team as a Product Manager. You will work closely with cross-functional teams to drive product strategies and lead product development.",
//         link: "#",
//         image: "/images/manager.jpg", // Example image path
//       },
//     ],
//     Internships: [
//       {
//         title: "Marketing Intern",
//         location: "Remote",
//         description:
//           "We are offering an exciting internship opportunity in our marketing department. If you have a passion for digital marketing, this role is for you.",
//         link: "#",
//         image: "/images/interns.jpg", // Example image path
//       },
//       {
//         title: "Data Science Intern",
//         location: "Lagos, Nigeria",
//         description:
//           "Gain hands-on experience working with big data, machine learning, and advanced analytics in our data science internship program.",
//         link: "#",
//         image: "/images/datascience.jpg", // Example image path
//       },
//       {
//         title: "Data Science Intern",
//         location: "Lagos, Nigeria",
//         description:
//           "Gain hands-on experience working with big data, machine learning, and advanced analytics in our data science internship program.",
//         link: "#",
//         image: "/images/datascience.jpg", // Example image path
//       },
//     ],
//     Volunteer: [
//       {
//         title: "Community Outreach Volunteer",
//         location: "Lagos, Nigeria",
//         description:
//           "Help us make a difference in local communities. As a volunteer, you will engage with community members and support our outreach programs.",
//         link: "#",
//         image: "/images/volunteer.jpg", // Example image path
//       },
//       {
//         title: "Environmental Volunteer",
//         location: "Abuja, Nigeria",
//         description:
//           "Join our environmental initiative to preserve nature. As a volunteer, you will be part of the team that organizes cleanup drives and awareness campaigns.",
//         link: "#",
//         image: "/images/volunteer.jpg", // Example image path
//       },
//       {
//         title: "Environmental Volunteer",
//         location: "Abuja, Nigeria",
//         description:
//           "Join our environmental initiative to preserve nature. As a volunteer, you will be part of the team that organizes cleanup drives and awareness campaigns.",
//         link: "#",
//         image: "/images/volunteer.jpg", // Example image path
//       },
//     ],
//   };

//   const handleApplyClick = (position) => {
//     setSelectedPosition(position);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPosition(null);
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="relative h-64 bg-cover bg-center"
//         style={{ backgroundImage: `url('/images/interns.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
//           <h1 className="text-4xl text-white font-bold">Careers</h1>
//           <p className="text-white mt-4 max-w-xl text-center">
//             Join us and make a difference. Explore opportunities to grow, learn, and contribute to meaningful projects.
//           </p>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <div className="bg-gray-100 py-4">
//         <div className="container mx-auto flex justify-center space-x-4">
//           {["Job Openings", "Internships", "Volunteer"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-2 rounded ${
//                 activeTab === tab
//                   ? "bg-green-600 text-white"
//                   : "bg-white text-green-600"
//               } transition`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Careers Content */}
//       <div className="container mx-auto py-8">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           {activeTab}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobData[activeTab].map((position, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
//             >
//               <img
//                 src={position.image}
//                 alt={position.title}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-green-700">{position.title}</h3>
//                 <p className="text-gray-700 mt-2">
//                   <strong>Location:</strong> {position.location}
//                 </p>
//                 <p className="text-gray-600 mt-4">{position.description}</p>
//                 <button
//                   onClick={() => handleApplyClick(position)}
//                   className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Apply Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg w-96">
//             <h3 className="text-2xl font-bold text-green-700 mb-4">
//               Apply for {selectedPosition.title}
//             </h3>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="resume" className="block text-gray-700">
//                   Resume (PDF or Word)
//                 </label>
//                 <input
//                   id="resume"
//                   type="file"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="coverLetter" className="block text-gray-700">
//                   Cover Letter (Optional)
//                 </label>
//                 <textarea
//                   id="coverLetter"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Write a cover letter (optional)"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                 >
//                   Submit Application
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default CareersPage;
