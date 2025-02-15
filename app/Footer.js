"use client"; // Make this a client component

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"; // Import React Icons

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook className="h-6 w-6" />, alt: "Facebook", link: "#" },
    { icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram", link: "#" },
    { icon: <FaLinkedin className="h-6 w-6" />, alt: "LinkedIn", link: "#" },
    { icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube", link: "#" },
  ];

  const navigationLinks = [
    { label: "About Us", link: "#" },
    { label: "Where we Work", link: "#" },
    { label: "Success Stories", link: "#" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src="/images/famkrislogo.png"
              alt="Logo"
              className="h-12 w-12"
            />
            <h3 className="text-lg font-semibold">
              FamKris HealthCare Initiatives
            </h3>
          </div>
          <p>Corporate Headquarters</p>
          <p>Plot 2435, Lorem Ipsum Zone C,</p>
          <p>FCT, Abuja.</p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.link} className="hover:opacity-80">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navigationLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="hover:text-teal-300 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
          <p className="mb-4">
            Subscribe to get the latest news from FamKris HealthCare Initiatives.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-full bg-teal-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-full bg-green-500 hover:bg-green-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-9.192 5.452a2.25 2.25 0 01-3.36-1.95v-10.9a2.25 2.25 0 013.36-1.95l9.192 5.451a2.25 2.25 0 010 3.9z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 text-center text-sm text-gray-400">
        © 2024 FamKris HealthCare Initiatives. All rights reserved.
      </div>
    </footer>
  );
}






// "use client"; // Make this a client component

// import Link from "next/link";

// export default function Footer() {
//   const socialLinks = [
//     { icon: "/images/facebook-icon.png", alt: "Facebook", link: "#" },
//     { icon: "/images/instagram-icon.png", alt: "Instagram", link: "#" },
//     { icon: "/images/linkedin-icon.png", alt: "LinkedIn", link: "#" },
//     { icon: "/images/youtube-icon.png", alt: "YouTube", link: "#" },
//   ];

//   const navigationLinks = [
//     { label: "About Us", link: "#" },
//     { label: "Where we Work", link: "#" },
//     { label: "Success Stories", link: "#" },
//     { label: "Contact Us", link: "/contact-us" },
//   ];

//   return (
//     <footer className="bg-teal-900 text-white py-10">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Logo and Address */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-3">
//             <img
//               src="/images/famkrislogo.png"
//               alt="Logo"
//               className="h-12 w-12"
//             />
//             <h3 className="text-lg font-semibold">
//               FamKris HealthCare Initiatives
//             </h3>
//           </div>
//           <p>Corporate Headquarters</p>
//           <p>Plot 2435, Lorem Ipsum Zone C,</p>
//           <p>FCT, Abuja.</p>
//           <div className="flex space-x-4 mt-4">
//             {socialLinks.map((social, index) => (
//               <Link key={index} href={social.link} className="hover:opacity-80">
//                 <img
//                   src={social.icon}
//                   alt={social.alt}
//                   className="h-6 w-6"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Navigation</h4>
//           <ul className="space-y-2">
//             {navigationLinks.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   href={item.link}
//                   className="hover:text-teal-300 transition-all duration-300"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Subscribe Section */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
//           <p className="mb-4">
//             Subscribe to get the latest news from FamKris HealthCare Initiatives.
//           </p>
//           <form className="flex space-x-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-2 rounded-l-full bg-teal-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 rounded-r-full bg-green-500 hover:bg-green-600 transition-all"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 className="h-6 w-6 text-white"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.752 11.168l-9.192 5.452a2.25 2.25 0 01-3.36-1.95v-10.9a2.25 2.25 0 013.36-1.95l9.192 5.451a2.25 2.25 0 010 3.9z"
//                 />
//               </svg>
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 mt-10 text-center text-sm text-gray-400">
//         © 2024 FamKris HealthCare Initiatives. All rights reserved.
//       </div>
//     </footer>
//   );
// }
