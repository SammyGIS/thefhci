"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import ImageSlider from "../../../components/ImageSlider";
import { PortableText } from "@portabletext/react";
import { components } from "../../../lib/portableText";
import Loading from "../../../components/Loading";
import { client } from "../../../sanity/sanity";
import { ChevronLeft } from "lucide-react";

export default function CompletedProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      const fetchedProject = await client.fetch(
        `*[_type == "completedProjects" && _id == '${id}'][0]`,
        { id },
      );
      setProject(fetchedProject);
      setLoading(false);
    }
    fetchProject();
  }, [id]);

  if (loading) return <Loading />;
  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen py-16 text-gray-700"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
        >
          <ChevronLeft size={20} className="mr-2" /> Back
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-600 mb-8"
        >
          {project.title}
        </motion.h1>
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <ImageSlider images={project.images} />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose max-w-none"
        >
          <PortableText value={project.content} components={components} />
        </motion.div>
      </div>
    </motion.div>
  );
}
