"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  text-black py-20">
      {/* Abstract background shapes */}
      {/* <motion.div
        className="absolute -top-1/2 -left-1/4 w-1/2 h-full rounded-full bg-[#0fbab1] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
      {/* <motion.div
        className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full rounded-full bg-[#0fbab1] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      /> */}

      {/* Glowing lines */}
      {/* <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0fbab1] to-transparent opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: ["-100%", "100%", "-100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0fbab1] to-transparent opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: ["100%", "-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-[#0fbab1]">
              About Our Innovative
            </span>
            <br />
            Software Solutions
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-foreground-muted font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the story behind our passion for creating cutting-edge
            software that transforms businesses and drives innovation.
          </motion.p>
        </div>
      </div>

      {/* Floating abstract shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-[#0fbab1] rounded-full mix-blend-multiply filter blur-xl opacity-10"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#0fbab1] rounded-full mix-blend-multiply filter blur-xl opacity-10"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </section>
  );
};

export default Hero;
