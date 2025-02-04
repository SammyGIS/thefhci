"use client";

import Image from "next/image";
import { urlFor } from "../../sanity/utils";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { components } from "../../lib/portableText";

export default function ArticleContent({ article }) {
  return (
    <section className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen max-w-4xl mx-auto p-12"
      >
        <Link href={"/media"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 px-4 py-2 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Back to Media
          </motion.button>
        </Link>
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold text-green-700 mb-6"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src={urlFor(article.image).url() || "/placeholder.svg"}
              alt={article.title}
              width={1200}
              height={600}
              className="rounded-xl shadow-lg h-96 w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <PortableText value={article.content} components={components} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
