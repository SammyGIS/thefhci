"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "Our Impact",
      link: "/what-we-do",
      // subMenu: [
      //   { label: "Completed Projects", link: "/what-we-do" },
      //   { label: "Ongoing Projects", link: "/what-we-do" },
      //   { label: "Areas of Expertise", link: "/what-we-do" }
      // ],
    },
    {
      label: "Who We Are",
      link: "/who-we-are",
      subMenu: [
        { label: "Our Story", link: "/who-we-are?tab=our-story" },
        { label: "Our Team", link: "/who-we-are?tab=our-team" },
        {
          label: "Mission & Values",
          link: "/who-we-are?tab=mission-and-values",
        },
        {
          label: "Partners & Supporters",
          link: "/who-we-are?tab=partners-and-supporters",
        },
      ],
    },
    {
      label: "Resources",
      link: "/reports-insights",
      subMenu: [
        { label: "Reports", link: "/reports-insights?tab=Reports" },
        { label: "Dashboards", link: "/reports-insights?tab=Dashboards" },
        { label: "Data", link: "/reports-insights?tab=Data" },
        { label: "Publications", link: "/reports-insights?tab=Publications" },
        { label: "Brochures", link: "/reports-insights?tab=Brochures" },
      ],
    },
    {
      label: "Media",
      link: "/media",
      subMenu: [
        { label: "Articles", link: "/media?tab=Articles" },
        { label: "Videos", link: "/media?tab=Videos" },
        { label: "Gallery", link: "/media?tab=Gallery" },
      ],
    },
    {
      label: "Events",
      link: "/events",
      subMenu: [
        { label: "Upcoming", link: "/events?tab=Upcoming" },
        { label: "Past Events", link: "/events?tab=Past" },
      ],
    },
    {
      label: "Careers",
      link: "/careers",
      subMenu: [
        { label: "Job Openings", link: "/careers?tab=Job-Openings" },
        { label: "Internships", link: "/careers?tab=Internships" },
        { label: "Volunteer", link: "/careers?tab=Volunteer" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-2xl font-extrabold text-green-600">
          <Link href="/">
            <span className="hover:text-gray-600 transition-colors duration-300">
              FamKris
            </span>
          </Link>
        </div> */}

        {/* Logo */}
        <div className="h-16 w-auto text-2xl font-extrabold text-green-600">
          <Link href="/">
            <img
              src="/images/famkrislogo.png"
              alt="FamKris Logo"
              className="h-16 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-medium text-gray-800 items-center">
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.label}
              className="relative group"
              onMouseEnter={() => setHoveredMenu(menuItem.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={menuItem.link || "#"}
                className={`px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-600 transition-all duration-300 ${
                  pathname === menuItem.link
                    ? "bg-green-100 text-green-600"
                    : ""
                }`}
              >
                {menuItem.label}
              </Link>

              {menuItem.subMenu && hoveredMenu === menuItem.label && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-3 z-50 w-48 transition-all duration-300">
                  {menuItem.subMenu.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-200 hover:text-green-700 rounded transition-all duration-300 text-sm"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* {menuItem.subMenu && hoveredMenu === menuItem.label && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-3 z-50 w-48 transition-all duration-300">
                  {menuItem.subMenu.map((subItem, index) => (
                    <Link
                      key={index}
                      href={`/${subItem.toLowerCase().replace(/\s/g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-200 hover:text-green-700 rounded transition-all duration-300 text-sm"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-green-500 text-white px-5 py-2 rounded hover:shadow-green-500/50 hover:bg-green-700 transition-all duration-300"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="relative z-50 text-green-600 focus:outline-none"
          >
            <div
              className={`w-6 h-0.5 bg-green-600 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-green-600 mt-1.5 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-green-600 mt-1.5 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white bg-opacity-90 backdrop-blur-lg shadow-lg absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 text-lg font-medium"
          >
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link || "#"}
                  className="text-green-600 hover:bg-green-200 px-4 py-2 rounded transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
