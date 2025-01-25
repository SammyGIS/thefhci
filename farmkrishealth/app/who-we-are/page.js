"use client";
import { useState } from "react";

const submenuContent = {
  "Our Story": {
    title: "Our Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/images/aboutimg.jpg",
  },
  "Our Team": {
    title: "Our Team",
    teamMembers: [
      {
        name: "John Doe",
        position: "Chief Executive Officer",
        image: "/images/jane.jpg",
      },
      {
        name: "Jane Smith",
        position: "Head of Operations",
        image: "/images/jane.jpg",
      },
      {
        name: "Robert Brown",
        position: "Lead Developer",
        image: "/images/jane.jpg",
      },
      {
        name: "Emily Davis",
        position: "Marketing Specialist",
        image: "/images/jane.jpg",
      },
    ],
  },
  "Mission & Values": {
    title: "Mission & Values",
    description:
      "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    image: "/images/aboutimg.jpg",
  },
  "Partners & Supporters": {
    title: "Partners & Supporters",
    partners: [
      { name: "Mitsubishi", logo: "/images/Mitsubishi-logo.png" },
      { name: "Partner 2", logo: "/images/Mitsubishi-logo.png" },
      { name: "Partner 3", logo: "/images/Mitsubishi-logo.png" },
      { name: "Partner 4", logo: "/images/Mitsubishi-logo.png" },
    ],
  },
};

export default function WhoWeAre() {
  // Set "Our Story" as the default submenu to display
  const [selectedSubmenu, setSelectedSubmenu] = useState("Our Story");

  return (
    <div>
      {/* Background Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/aboutimg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">We Are FamKris</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
        </div>
      </section>

      {/* Submenu Navigation */}
      <section className="py-8 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Explore More About Us
          </h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0">
            {Object.keys(submenuContent).map((submenu) => (
              <button
                key={submenu}
                onClick={() => setSelectedSubmenu(submenu)}
                className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-700 hover:text-white transition-all text-sm sm:text-base"
              >
                {submenu}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Submenu Content */}
      {selectedSubmenu && (
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {submenuContent[selectedSubmenu].title}
            </h2>

            {/* "Our Team" Submenu */}
            {selectedSubmenu === "Our Team" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {submenuContent["Our Team"].teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-32 w-32 mx-auto rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                ))}
              </div>
            )}

            {/* "Partners & Supporters" Submenu */}
            {selectedSubmenu === "Partners & Supporters" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {submenuContent["Partners & Supporters"].partners.map(
                  (partner, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            )}

            {/* Default Submenu Content */}
            {submenuContent[selectedSubmenu].description && (
              <p className="text-gray-700 mb-6">
                {submenuContent[selectedSubmenu].description}
              </p>
            )}

            {submenuContent[selectedSubmenu].image && (
              <img
                src={submenuContent[selectedSubmenu].image}
                alt={submenuContent[selectedSubmenu].title}
                className="mx-auto rounded-lg shadow-md max-w-md"
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
}





// "use client";
// import { useState } from "react";

// const submenuContent = {
//   "Our Story": {
//     title: "Our Story",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
//     image: "/images/aboutimg.jpg",
//   },
//   "Our Team": {
//     title: "Our Team",
//     teamMembers: [
//       {
//         name: "John Doe",
//         position: "Chief Executive Officer",
//         image: "/images/jane.jpg",
//       },
//       {
//         name: "Jane Smith",
//         position: "Head of Operations",
//         image: "/images/jane.jpg",
//       },
//       {
//         name: "Robert Brown",
//         position: "Lead Developer",
//         image: "/images/jane.jpg",
//       },
//       {
//         name: "Emily Davis",
//         position: "Marketing Specialist",
//         image: "/images/jane.jpg",
//       },
//     ],
//   },
//   "Mission & Values": {
//     title: "Mission & Values",
//     description:
//       "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
//     image: "/images/aboutimg.jpg",
//   },
//   "Partners & Supporters": {
//     title: "Partners & Supporters",
//     partners: [
//       { name: "Mitsubishi", logo: "/images/Mitsubishi-logo.png" },
//       { name: "Partner 2", logo: "/images/Mitsubishi-logo.png" },
//       { name: "Partner 3", logo: "/images/Mitsubishi-logo.png" },
//       { name: "Partner 4", logo: "/images/Mitsubishi-logo.png" },
//     ],
//   },
// };

// export default function WhoWeAre() {
//   const [selectedSubmenu, setSelectedSubmenu] = useState(null);

//   return (
//     <div>
//       {/* Background Section */}
//       <section
//         className="relative h-96 bg-cover bg-center"
//         style={{ backgroundImage: `url('/images/aboutimg.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
//           <h1 className="text-4xl text-white font-bold">We Are FamKris</h1>
//           <p className="text-white mt-4 max-w-xl text-center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//             odio. Praesent libero.
//           </p>
//         </div>
//       </section>

//       {/* Submenu Navigation */}
//       <section className="py-8 bg-green-600">
//         <div className="container mx-auto text-center">
//           <h2 className="text-2xl font-semibold mb-4 text-white">
//             Explore More About Us
//           </h2>
//           <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0">
//             {Object.keys(submenuContent).map((submenu) => (
//               <button
//                 key={submenu}
//                 onClick={() => setSelectedSubmenu(submenu)}
//                 className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-700 hover:text-white transition-all text-sm sm:text-base"
//               >
//                 {submenu}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Submenu Content */}
//       {selectedSubmenu && (
//         <section className="py-12">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">
//               {submenuContent[selectedSubmenu].title}
//             </h2>

//             {/* "Our Team" Submenu */}
//             {selectedSubmenu === "Our Team" && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {submenuContent["Our Team"].teamMembers.map((member, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all"
//                   >
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="h-32 w-32 mx-auto rounded-full object-cover"
//                     />
//                     <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
//                     <p className="text-gray-600">{member.position}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* "Partners & Supporters" Submenu */}
//             {selectedSubmenu === "Partners & Supporters" && (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//                 {submenuContent["Partners & Supporters"].partners.map(
//                   (partner, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all"
//                     >
//                       <img
//                         src={partner.logo}
//                         alt={partner.name}
//                         className="h-16 w-16 object-contain"
//                       />
//                     </div>
//                   )
//                 )}
//               </div>
//             )}

//             {/* Default Submenu Content */}
//             {submenuContent[selectedSubmenu].description && (
//               <p className="text-gray-700 mb-6">
//                 {submenuContent[selectedSubmenu].description}
//               </p>
//             )}

//             {submenuContent[selectedSubmenu].image && (
//               <img
//                 src={submenuContent[selectedSubmenu].image}
//                 alt={submenuContent[selectedSubmenu].title}
//                 className="mx-auto rounded-lg shadow-md max-w-md"
//               />
//             )}
//           </div>
//         </section>
//       )}

//     </div>
//   );
// }
