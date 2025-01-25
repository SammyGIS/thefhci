"use client";

// import { useState, useEffect } from "react";

// app/page.js
import { useState, useEffect } from "react";
import { getSlides, getImpactStats, getTestimonials } from "../sanityFetch"; // Import functions
import Image from "next/image";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [impactStats, setImpactStats] = useState([]); // Default to empty array
  const [testimonials, setTestimonials] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);  // State for the current slide index
  // States for subscription modal
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch all the content when the component mounts
    const fetchContent = async () => {
      try {
        const slidesData = await getSlides();
        const statsData = await getImpactStats();
        const testimonialsData = await getTestimonials();

        console.log("Fetched Slides:", slidesData);
        console.log("Fetched Impact Stats:", statsData);
        console.log("Fetched Testimonials:", testimonialsData);

        setSlides(slidesData || []); // Ensure it's always an array
        setImpactStats(statsData || []); // Ensure it's always an array
        setTestimonials(testimonialsData || []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching content from Sanity:", error);
      }
    };

    fetchContent();

    // Show subscription pop-up after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5000 ms = 5 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  
    const handleSubscribe = () => {
      // Handle email subscription here (API call or state update)
      alert(`Subscribed with: ${email}`);
      setShowPopup(false); // Close the pop-up after subscribing
      setEmail(''); // Clear the email input
    };

  return (
    <div>
      {/* Hero Carousel Section */}
      {slides.length > 0 ? (
        <div className="relative w-full h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide._id || index} 
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-4xl sm:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-2xl mb-6 animate-fadeIn delay-200">
                  {slide.description}
                </p>
                <a
                  href="#learn-more"
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 animate-fadeIn delay-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading slides...</div> // Add a loading message for slides
      )}


 {/* Our Mission and Values Section */}
 <section className="bg-gradient-to-r from-green-500 to-green-400 text-white py-16">
  <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between bg-white py-12 rounded-xl shadow-xl overflow-hidden">
    
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 text-left md:px-8 mb-8 md:mb-0 opacity-100 transform transition-all duration-500 ease-in-out">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
        Our Mission and Values
      </h2>
      {/* First Paragraph Only Visible on Mobile */}
      <p className="text-lg mb-8 text-gray-600 leading-relaxed">
        At the core of our operations lies a deep commitment to driving change and fostering sustainability. We believe in empowering communities, embracing innovation, and working together for a brighter future.
      </p>

      {/* "Our Mission" and "Our Values" sections hidden on small screens */}
      <div className="hidden md:block space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To inspire, lead, and empower communities around the world, creating sustainable solutions for global challenges and a better tomorrow.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            {['Integrity', 'Collaboration', 'Excellence', 'Sustainability'].map((value, index) => (
              <li key={index} className="transition-all duration-300 hover:text-green-500">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Read More Button */}
      <a
        href="/who-we-are" // Replace with your actual link
        className="inline-block mt-6 text-green-600 font-semibold text-lg border-b-2 border-green-600 hover:text-white hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Read More
      </a>
    </div>
    
    {/* Right Side - Video */}
    <div className="w-full md:w-1/2 h-96 md:h-[800px] relative md:mt-0 mt-8">
      <video
        src="/videos/mission-video.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110"
      />
      {/* Optional Text Overlay on Video */}
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full text-center">
        <p className="font-semibold text-lg">Empowering a sustainable future</p>
      </div>
    </div>
  </div>
</section>



{/* Our Projects Section */}
<section className="bg-white py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8">
      Our Projects Done So Far
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      We have successfully delivered numerous projects that empower communities and foster sustainable change. Here are some of the key projects that showcase our dedication to making a positive impact.
    </p>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Project 1 */}
      <div className="bg-gray-100 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/aboutimg.jpg" // Replace with your project image
          alt="Project 1"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Title 1</h3>
          <p className="text-gray-600">
            A brief description of the project that highlights its impact and significance. This section should tell the story of the project and its contributions to sustainability.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-100 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/aboutimg.jpg" // Replace with your project image
          alt="Project 2"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Title 2</h3>
          <p className="text-gray-600">
            A brief description of the project that highlights its impact and significance. This section should tell the story of the project and its contributions to sustainability.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-100 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/aboutimg.jpg" // Replace with your project image
          alt="Project 3"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Title 3</h3>
          <p className="text-gray-600">
            A brief description of the project that highlights its impact and significance. This section should tell the story of the project and its contributions to sustainability.
          </p>
        </div>
      </div>

      {/* Add more project cards as needed */}
    </div>
    
    {/* Call to Action Button */}
    <div className="mt-12">
      <a
        href="/what-we-do" // Link to the full projects page
        className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
      >
        View All Projects
      </a>
    </div>
  </div>
</section>



      {/* Impact Statistics Section */}
      import CountUp from "react-countup";

{impactStats && impactStats.length > 0 ? (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
        Our Impact So Far
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {impactStats.map((stat, index) => (
          <div key={stat._id || index} className="flex flex-col items-center">
            <div className="bg-green-600 text-white p-6 rounded-full shadow-md transform transition-transform hover:scale-110">
              {/* Fixed SVG icons based on index */}
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
                    d="M5.25 12.75l6 6 8.25-10.5" // Checkmark
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
                    d="M9 5l7 7-7 7" // Arrow
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
                    d="M12 6v12m6-6H6" // Plus
                  />
                </svg>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mt-4">
              <CountUp
                start={0}
                end={stat.value}
                duration={3}
                separator=","
              />+
            </h3>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
) : (
  <div>Loading Impact Stats...</div>
)}



      {/* Testimonials Section */}
      {/* {testimonials.length > 0 ? (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
              Transforming Lives: Our Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimony, index) => (
                <div
                  key={testimony._id || index}  
                  className="p-4 bg-white shadow-md rounded-lg"
                >
                  <img
                    src={testimony.imageUrl}
                    alt={testimony.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="italic text-gray-700 mb-2">{testimony.text}</p>
                  <h4 className="text-green-500 font-bold">{testimony.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div>Loading Testimonials...</div> // Add a loading message for testimonials
      )} */}
    {/* </div>
  );
} */}


{/* Featured Insights Section */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8">
      Featured Insights
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Explore our in-depth insights and articles that provide valuable perspectives on current trends, challenges, and opportunities in our field of expertise.
    </p>

    {/* Insights Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Insight 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/insight.jpg" // Replace with your article image
          alt="Insight 1"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Insight Title 1
          </h3>
          <p className="text-gray-600 mb-4">
            A brief snippet of the article that grabs attention and gives readers a reason to dive deeper.
          </p>
          <a
            href="/media" // Link to the full article
            className="text-green-600 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>

      {/* Insight 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/insight.jpg" // Replace with your article image
          alt="Insight 2"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Insight Title 2
          </h3>
          <p className="text-gray-600 mb-4">
            A brief snippet of the article that grabs attention and gives readers a reason to dive deeper.
          </p>
          <a
            href="/media" // Link to the full article
            className="text-green-600 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>

      {/* Insight 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          src="/images/insight.jpg" // Replace with your article image
          alt="Insight 3"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Insight Title 3
          </h3>
          <p className="text-gray-600 mb-4">
            A brief snippet of the article that grabs attention and gives readers a reason to dive deeper.
          </p>
          <a
            href="/media" // Link to the full article
            className="text-green-600 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>

    {/* Call to Action Button */}
    <div className="mt-12">
      <a
        href="/insights" // Link to the full insights page
        className="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
      >
        View All Articles
      </a>
    </div>
  </div>
</section>







      {/* Our Sponsors Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are proud to partner with organizations that share our vision.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: 'Sponsor A', logo: '/images/Mitsubishi-logo.png' },
              { name: 'Sponsor B', logo: '/images/Mitsubishi-logo.png' },
              { name: 'Sponsor C', logo: '/images/Mitsubishi-logo.png' },
            ].map((sponsor, index) => (
              <div key={index} className="text-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-700">
                  {sponsor.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Subscription Pop-Up Modal */}
{showPopup && (
  <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-xl w-96 text-center transform transition-all duration-300 ease-in-out scale-95 hover:scale-100 shadow-xl relative bg-opacity-90">
      
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-semibold text-xl"
      >
        &times;
      </button>

      <h3 className="text-3xl font-extrabold mb-6 text-gray-900">
        Stay Updated with Our Latest News!
      </h3>
      <p className="text-lg mb-6 text-gray-600">
        Subscribe to our newsletter and get the latest updates, offers, and insights directly in your inbox. Join our community now!
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all duration-200"
      />
      <button
        onClick={handleSubscribe}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300"
      >
        Subscribe Now
      </button>
      <p className="mt-4 text-sm text-gray-500">
        We respect your privacy. Your email is safe with us.
      </p>
    </div>
  </div>
)}





    </div>
  );
}



{/* Our Team Section */}
{/* <section className="bg-gray-100 py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
      Meet Our Team
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      A passionate group of individuals committed to making a difference.
    </p>
    <div className="flex justify-center gap-8 flex-wrap">
      {[
        { name: 'John Doe', role: 'CEO', photo: '/images/jane.jpg' },
        { name: 'Jane Smith', role: 'CTO', photo: '/images/jane.jpg' },
        { name: 'Maria Garcia', role: 'COO', photo: '/images/jane.jpg' },
      ].map((member, index) => (
        <div
          key={index}
          className="w-60 text-center bg-white rounded-lg shadow-md p-6"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800">
            {member.name}
          </h4>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section> */}





{/* 
Footer Section */}
{/* <footer class="bg-teal-900 text-white py-10">
<div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"> */}
{/* <!-- Logo and Address --> */}
{/* <div class="space-y-4">
<div class="flex items-center space-x-3">
  <img
    src="/images/famkrislogo.png"
    alt="Logo"
    class="h-12 w-12"
  />
  <h3 class="text-lg font-semibold">
    FamKris HealthCare Initiatives
  </h3>
</div>
<p>Corporate Headquarters</p>
<p>Plot 2435, Lorem Ipsum Zone C,</p>
<p>FCT, Abuja.</p>
<div class="flex space-x-4 mt-4">
  <a href="#" class="hover:opacity-80">
    <img
      src="/images/facebook-icon.png"
      alt="Facebook"
      class="h-6 w-6"
    />
  </a>
  <a href="#" class="hover:opacity-80">
    <img
      src="/images/instagram-icon.png"
      alt="Instagram"
      class="h-6 w-6"
    />
  </a>
  <a href="#" class="hover:opacity-80">
    <img
      src="/images/linkedin-icon.png"
      alt="LinkedIn"
      class="h-6 w-6"
    />
  </a>
  <a href="#" class="hover:opacity-80">
    <img
      src="/images/youtube-icon.png"
      alt="YouTube"
      class="h-6 w-6"
    />
  </a>
</div>
</div> */}

{/* <!-- Navigation Links --> */}
{/* <div>
<h4 class="text-lg font-semibold mb-4">Navigation</h4>
<ul class="space-y-2">
  <li><a href="#" class="hover:text-teal-300">About Us</a></li>
  <li><a href="#" class="hover:text-teal-300">Where we Work</a></li>
  <li><a href="#" class="hover:text-teal-300">Success Stories</a></li> */}
  {/* <li><a href="#" class="hover:text-teal-300">Careers</a></li>
  <li>
    <a href="#" class="hover:text-teal-300"
      >Vendor Management</a
    >
  </li> */}
  {/* <li><a href="/contact-us" class="hover:text-teal-300">Contact Us</a></li>
</ul>
</div> */}

{/* <!-- Subscribe Section --> */}
{/* <div>
<h4 class="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
<p class="mb-4">
  Subscribe to get the latest news from FamKris HealthCare Initiatives.
</p>
<form class="flex space-x-2">
  <input
    type="email"
    placeholder="Enter your email"
    class="flex-1 px-4 py-2 rounded-l-full bg-teal-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
  <button
    type="submit"
    class="px-4 py-2 rounded-r-full bg-green-500 hover:bg-green-600 transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="h-6 w-6 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.752 11.168l-9.192 5.452a2.25 2.25 0 01-3.36-1.95v-10.9a2.25 2.25 0 013.36-1.95l9.192 5.451a2.25 2.25 0 010 3.9z"
      />
    </svg>
  </button>
</form>
</div>
</div>

<div class="container mx-auto px-6 mt-10 text-center text-sm text-gray-400">
© 2024 FamKris HealthCare Initiatives. All rights reserved.
</div>
</footer> */}






// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';


// export default function Home() {
//   const slides = [
//     {
//       id: 1,
//       src: "/images/image1.png",
//       title: "Transforming Lives Through Education",
//       description: "Providing free education to underprivileged communities.",
//     },
//     {
//       id: 2,
//       src: "/images/image2.png",
//       title: "Healthcare For Everyone",
//       description: "Delivering quality healthcare to those in need.",
//     },
//     {
//       id: 3,
//       src: "/images/image3.png",
//       title: "Clean Water Initiative",
//       description: "Ensuring clean drinking water for rural communities.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <div>
//       {/* Hero Carousel Section */}
//       <div className="relative w-full h-screen overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={slide.src}
//               alt={slide.title}
//               layout="fill"
//               objectFit="cover"
//               priority
//             />
//             <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
//               <h2 className="text-4xl sm:text-6xl font-bold mb-4 animate-fadeIn">
//                 {slide.title}
//               </h2>
//               <p className="text-lg sm:text-2xl mb-6 animate-fadeIn delay-200">
//                 {slide.description}
//               </p>
//               <a
//                 href="#learn-more"
//                 className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 animate-fadeIn delay-300"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrevious}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
//         >
//           &#10095;
//         </button>

//         {/* Indicator Dots */}
//         <div className="absolute bottom-8 w-full flex justify-center gap-2">
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               className={`h-3 w-3 rounded-full ${
//                 index === currentIndex ? "bg-green-600" : "bg-gray-400"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>

//       {/* Impact Statistics Section */}
// {/* Impact Statistics Section */}
// <section className="bg-gray-50 py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
//       Our Impact So Far
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//       {/* Stat 1 */}
//       <div className="flex flex-col items-center">
//         <div className="bg-green-600 text-white p-6 rounded-full shadow-md transform transition-transform hover:scale-110">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-12 h-12"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M5.25 12.75l6 6 8.25-10.5"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-gray-700 mt-4">
//           <CountUp end={50000} duration={3} separator="," />+
//         </h3>
//         <p className="text-gray-600">Patients Treated</p>
//       </div>

//       {/* Stat 2 */}
//       <div className="flex flex-col items-center">
//         <div className="bg-green-600 text-white p-6 rounded-full shadow-md transform transition-transform hover:scale-110">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-12 h-12"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-gray-700 mt-4">
//           <CountUp end={10000} duration={3} separator="," />+
//         </h3>
//         <p className="text-gray-600">HIV Patients Supported</p>
//       </div>

//       {/* Stat 3 */}
//       <div className="flex flex-col items-center">
//         <div className="bg-green-600 text-white p-6 rounded-full shadow-md transform transition-transform hover:scale-110">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-12 h-12"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m6-6H6"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-gray-700 mt-4">
//           <CountUp end={1000} duration={3} separator="," />+
//         </h3>
//         <p className="text-gray-600">Clean Water Projects</p>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* Success Stories Section */}
// {/* Success Stories Section */}
// <section className="relative bg-gray-100 py-16 overflow-hidden">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center opacity-70"
//     style={{
//       backgroundImage: 'url("/images/bckg2.jpg")',
//     }}
//   ></div>

//   <div className="relative container mx-auto px-6 text-center">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
//       Transforming Lives: Our Success Stories
//     </h2>

//     {/* Animated Testimonies Carousel */}
//     <div className="overflow-hidden">
//       <motion.div
//         className="flex space-x-8"
//         initial={{ x: "100%" }}
//         animate={{ x: "-100%" }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 4 * 4, // Duration based on testimonies count (4 testimonies x 2 seconds each)
//           ease: "linear",
//         }}
//       >
//         {/* Testimonies */}
//         {[
//           {
//             text: "Thanks to this NGO, I now have clean water for my family. Their project truly changed our lives.",
//             name: "Jane Doe, Kenya",
//             image: "/images/jane.jpg",
//           },
//           {
//             text: "I received free education through their program, and now I’m a proud university graduate.",
//             name: "Ahmed Khan, India",
//             image: "/images/jane.jpg",
//           },
//           {
//             text: "This initiative helped me start my own business and support my community.",
//             name: "Maria Lopez, Brazil",
//             image: "/images/jane.jpg",
//           },
//           {
//             text: "Access to healthcare has saved my child’s life. I’m forever grateful to this NGO.",
//             name: "Chung Lee, China",
//             image: "/images/jane.jpg",
//           },
//         ].map((testimony, index) => (
//           <div
//             key={index}
//             className="min-w-[300px] md:min-w-[400px] text-left p-6 rounded-md shadow-lg"
//             style={{
//               background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
//               backdropFilter: "blur(10px)", // Frosted glass effect
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Soft shadow
//               border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for a glassy effect
//             }}
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={testimony.image}
//                 alt={testimony.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-gray-100 italic">{`"${testimony.text}"`}</p>
//                 <h4 className="text-green-300 font-bold mt-4">{`- ${testimony.name}`}</h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   </div>
// </section>

// {/* Donation Progress Section */}
// <section className="bg-white py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
//       Support Our Mission
//     </h2>
//     <p className="text-lg text-gray-600 mb-8">
//       Your contributions help us reach more communities. Every donation
//       counts!
//     </p>
//     <div className="w-full bg-gray-200 rounded-full overflow-hidden">
//       <div
//         className="bg-green-600 text-white text-center py-2 font-bold"
//         style={{ width: "70%" }} // Dynamic Value
//       >
//         70% of Goal Achieved
//       </div>
//     </div>
//     <a
//       href="/donate"
//       className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500"
//     >
//       Donate Now
//     </a>
//   </div>
// </section>

// {/* Interactive Map Section */}
// {/* <section className="bg-gray-50 py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
//       Where We Work
//     </h2>
//     <p className="text-lg text-gray-600 mb-8">
//       Explore the regions where we are making a difference.
//     </p>
//     <div className="relative w-full h-[600px]">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.7824428987!2d7.367465084910532!3d9.024416368328325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1734536828017!5m2!1sen!2sng"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="rounded-md shadow-lg"
//       ></iframe>
//     </div>
//   </div>
// </section> */}


// {/* Volunteer/Partner Section */}
// <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white py-16">
//   <div className="container mx-auto px-6 text-center">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//       Join Us to Make a Difference
//     </h2>
//     <p className="text-lg mb-8">
//       Whether you want to volunteer, donate, or become a partner, your
//       support drives our mission forward.
//     </p>
//     <div className="flex justify-center gap-4">
//       <a
//         href="/volunteer"
//         className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200"
//       >
//         Volunteer
//       </a>
//       <a
//         href="/partner"
//         className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200"
//       >
//         Partner With Us
//       </a>
//     </div>
//   </div>
// </section>

// {/* Footer Section */}
// <footer class="bg-teal-900 text-white py-10">
//   <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//     {/* <!-- Logo and Address --> */}
//     <div class="space-y-4">
//       <div class="flex items-center space-x-3">
//         <img
//           src="/images/famkrislogo.png"
//           alt="Logo"
//           class="h-12 w-12"
//         />
//         <h3 class="text-lg font-semibold">
//           FamKris HealthCare Initiatives
//         </h3>
//       </div>
//       <p>Corporate Headquarters</p>
//       <p>Plot 2435, Lorem Ipsum Zone C,</p>
//       <p>FCT, Abuja.</p>
//       <div class="flex space-x-4 mt-4">
//         <a href="#" class="hover:opacity-80">
//           <img
//             src="/images/facebook-icon.png"
//             alt="Facebook"
//             class="h-6 w-6"
//           />
//         </a>
//         <a href="#" class="hover:opacity-80">
//           <img
//             src="/images/instagram-icon.png"
//             alt="Instagram"
//             class="h-6 w-6"
//           />
//         </a>
//         <a href="#" class="hover:opacity-80">
//           <img
//             src="/images/linkedin-icon.png"
//             alt="LinkedIn"
//             class="h-6 w-6"
//           />
//         </a>
//         <a href="#" class="hover:opacity-80">
//           <img
//             src="/images/youtube-icon.png"
//             alt="YouTube"
//             class="h-6 w-6"
//           />
//         </a>
//       </div>
//     </div>

//     {/* <!-- Navigation Links --> */}
//     <div>
//       <h4 class="text-lg font-semibold mb-4">Navigation</h4>
//       <ul class="space-y-2">
//         <li><a href="#" class="hover:text-teal-300">About Us</a></li>
//         <li><a href="#" class="hover:text-teal-300">Where we Work</a></li>
//         <li><a href="#" class="hover:text-teal-300">Success Stories</a></li>
//         {/* <li><a href="#" class="hover:text-teal-300">Careers</a></li>
//         <li>
//           <a href="#" class="hover:text-teal-300"
//             >Vendor Management</a
//           >
//         </li> */}
//         <li><a href="/contact-us" class="hover:text-teal-300">Contact Us</a></li>
//       </ul>
//     </div>

//     {/* <!-- Subscribe Section --> */}
//     <div>
//       <h4 class="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
//       <p class="mb-4">
//         Subscribe to get the latest news from FamKris HealthCare Initiatives.
//       </p>
//       <form class="flex space-x-2">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           class="flex-1 px-4 py-2 rounded-l-full bg-teal-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <button
//           type="submit"
//           class="px-4 py-2 rounded-r-full bg-green-500 hover:bg-green-600 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="2"
//             stroke="currentColor"
//             class="h-6 w-6 text-white"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M14.752 11.168l-9.192 5.452a2.25 2.25 0 01-3.36-1.95v-10.9a2.25 2.25 0 013.36-1.95l9.192 5.451a2.25 2.25 0 010 3.9z"
//             />
//           </svg>
//         </button>
//       </form>
//     </div>
//   </div>

//   <div class="container mx-auto px-6 mt-10 text-center text-sm text-gray-400">
//     © 2024 FamKris HealthCare Initiatives. All rights reserved.
//   </div>
// </footer>




//     </div>
//   );
// }








