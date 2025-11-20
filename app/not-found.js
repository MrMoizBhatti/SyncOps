"use client";
import React from "react";
import { motion } from "framer-motion";
import SafeLink from "./components/ui/SafeLink";
import { Home, AlertTriangle } from "lucide-react";

const Custom404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0fbab1] to-white opacity-5" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#0fbab1] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-[#0fbab1] mb-8"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AlertTriangle size={80} className="mx-auto" />
          </motion.div>
          <h1 className="text-6xl font-bold mb-4 text-[#042638]">404</h1>
          <h2 className="text-3xl font-semibold mb-6 text-[#042638]">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <SafeLink
              href="/"
              className="bg-[#0fbab1] text-white py-3 px-6 rounded-md font-semibold inline-flex items-center"
            >
              <Home className="mr-2" size={20} />
              Go Home
            </SafeLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Custom404;
