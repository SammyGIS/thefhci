"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { urlFor } from "../../../sanity/utils";
import Loading from "../../../components/Loading";
import { client } from "../../../sanity/sanity";
import Link from "next/link";

export default function ExpertiseAreaPage() {
  const { id } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArea() {
      const fetchedArea = await client.fetch(
        `*[_type == "areaOfExpertise" && _id == '${id}'][0]`,
        { id },
      );
      setArea(fetchedArea);
      setLoading(false);
    }
    fetchArea();
  }, [id]);

  if (loading) return <Loading />;
  if (!area) return <div>Area of expertise not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen py-16 text-gray-700"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href={"/what-we-do"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Back
          </motion.button>
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-600 my-8 text-center"
        >
          {area.title}
        </motion.h1>
        <img
          src={urlFor(area.image).url() || "/placeholder.svg"}
          alt={area.title}
          className="w-full h-full object-cover mb-8"
        />
        <div className="prose max-w-none">
          <p className="">{area.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
