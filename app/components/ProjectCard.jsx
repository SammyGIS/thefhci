import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "../sanity/utils";
import { ChevronRight } from "lucide-react";

const ProjectCard = ({ project, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={
            urlFor(
              type === "ongoing" ? project.image : project.images[0],
            ).url() || "/placeholder.svg"
          }
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project?.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project?.description}
        </p>
        <Link href={`/what-we-do/${type}/${project._id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            View Details <ChevronRight size={20} className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
