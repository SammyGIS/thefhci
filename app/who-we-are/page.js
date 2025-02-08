"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetchTeamMembers, useFetchPartners } from "../hooks/useFetchPage";
import Loading from "../components/Loading";
import { urlFor } from "../sanity/utils";
import OurStory from "../components/OurStory";
import MissionAndValues from "../components/MissionAndValues";
import { useRouter, useSearchParams } from "next/navigation";

export default function WhoWeAre() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSubmenu, setSelectedSubmenu] = useState("Our Story");

  const { teamMembers, loading, error } = useFetchTeamMembers();
  const { partners } = useFetchPartners();

  const submenuContent = {
    "our-story": {
      title: "Our Story",
      component: <OurStory />,
    },
    "our-team": {
      title: "Our Team",
      teamMembers: teamMembers,
    },
    "mission-and-values": {
      title: "Mission & Values",
      component: <MissionAndValues />,
    },
    "partners-and-supporters": {
      title: "Partners & Supporters",
      partners: partners,
    },
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && submenuContent[tab]) {
      setSelectedSubmenu(submenuContent[tab].title);
    }
  }, [searchParams, submenuContent]); // Added submenuContent to dependencies

  const handleSubmenuClick = (submenu) => {
    const paramKey = submenu
      .toLowerCase()
      .replace(/ & /g, "-and-")
      .replace(/ /g, "-");
    router.push(`/who-we-are?tab=${paramKey}`, undefined, { shallow: true });
    setSelectedSubmenu(submenu);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Background Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/aboutimg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">We Are the FHCI</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            The Famkris Healthcare Initiative (FHCI) is a leading
            non-governmental, non-profit, and non-political organization in
            Africa dedicated to providing free medical and surgical treatments
            for underserved communities across Africa, improving their health
            outcomes and standard of living.
          </p>
        </div>
      </section>

      {/* Submenu Navigation */}
      <section className="py-8 bg-green-600 sticky top-0 z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Explore More About Us
          </h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0">
            {Object.keys(submenuContent).map((submenu) => (
              <motion.button
                key={submenu}
                onClick={() =>
                  handleSubmenuClick(submenuContent[submenu].title)
                }
                className={`px-4 py-2 rounded transition-all text-sm sm:text-base ${
                  selectedSubmenu === submenuContent[submenu].title
                    ? "bg-white text-green-600"
                    : "bg-green-700 text-white hover:bg-green-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submenuContent[submenu].title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Submenu Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedSubmenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
              {selectedSubmenu}
            </h2>

            {selectedSubmenu === "Our Team" && (
              <p className="text-gray-700 text-center mb-10 max-w-lg mx-auto">
                We are a team of dedicated healthcare professionals and
                volunteers who play a vital role in delivering quality
                healthcare to those who need it most.
              </p>
            )}
            {selectedSubmenu === "Partners & Supporters" && (
              <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
                Our work would not be possible without the generous support of
                our partners, sponsors, and donors. We are proud to collaborate
                with healthcare providers, government agencies, donor
                organizations, individual donors, and international
                organizations who share our vision of equitable and quality
                healthcare for all.
              </p>
            )}

            {/* "Our Story" and "Mission & Values" Submenus */}
            {(selectedSubmenu === "Our Story" ||
              selectedSubmenu === "Mission & Values") && (
              <div className="max-w-4xl mx-auto">
                {
                  submenuContent[
                    Object.keys(submenuContent).find(
                      (key) => submenuContent[key].title === selectedSubmenu,
                    )
                  ].component
                }
              </div>
            )}

            {/* "Our Team" Submenu */}
            {selectedSubmenu === "Our Team" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {submenuContent["our-team"].teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all text-center"
                  >
                    <img
                      src={urlFor(member.image).url() || "/placeholder.svg"}
                      alt={member.name}
                      className="h-32 w-32 mx-auto rounded-full object-cover"
                    />
                    <h4 className="mt-4 text-lg font-semibold text-gray-700">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 font-semibold">{member.role}</p>
                    <p className="text-gray-700 font-light text-sm">
                      {member?.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* "Partners & Supporters" Submenu */}
            {selectedSubmenu === "Partners & Supporters" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {submenuContent["partners-and-supporters"].partners.map(
                  (partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all"
                    >
                      <img
                        src={urlFor(partner.image).url() || "/placeholder.svg"}
                        alt={partner.title}
                        className="h-32 w-32 object-contain"
                      />
                    </motion.div>
                  ),
                )}
              </div>
            )}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
