"use client";

import Image from "next/image";
import { urlFor } from "../../sanity/utils";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { components } from "../../lib/portableText";
import { useState } from "react";
import { Copy, Share, Share2 } from "lucide-react";

export default function ArticleContent({ article }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gray-50 text-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen max-w-4xl mx-auto md:p-12 p-5"
      >
        <Link href={"/media"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
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

          <div className="mb-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src={urlFor(article.image).url() || "/placeholder.svg"}
                alt={article.title}
                width={1200}
                height={600}
                className="rounded-xl shadow-lg h-96 w-full object-cover object-center"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <PortableText value={article.content} components={components} />
          </motion.div>
        </div>
        <div className="flex items-center justify-end my-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 z-40 text-green-600 flex items-center gap-2"
          >
            Share
            <Share2 />
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Share Article</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <div className="bg-gray-100 p-3 rounded-md text-sm break-all">
                  {window.location.href}
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-3 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                title="Copy Link"
              >
                <Copy
                  className={copied ? "text-green-600" : "text-gray-600"}
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
