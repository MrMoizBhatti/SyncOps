"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code, Lightbulb } from "lucide-react";

const OurTeam = () => {
  const team = [
    {
      name: "Abu Sufian",
      role: "Chief Executive Officer",
      image: "https://pub-4ca13fa6704140af87fc061dad41881c.r2.dev/cbdo.png",
      icon: Lightbulb,
    },
    {
      name: "Fazal Tanveer",
      role: "Lead Developer",
      image: "https://pub-4ca13fa6704140af87fc061dad41881c.r2.dev/fazal.png",
      icon: Code,
    },
    {
      name: "Mohtashim Afzal",
      role: "Lead Developer",
      image:
        "https://pub-4ca13fa6704140af87fc061dad41881c.r2.dev/mohtashim.png",
      icon: Code,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(team.length / itemsPerPage);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [totalPages, isPaused]);

  const paginatedTeam = team.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-syncops-primary-500 rounded-full filter blur-3xl opacity-10"
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
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-syncops-dark-900">
            Meet the Minds Behind SyncOps
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Discover the innovative minds behind our advanced software
            solutions.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {paginatedTeam.map((member, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  className="card p-6 relative overflow-hidden transition-all duration-300 hover:shadow-syncops"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-syncops-primary-500 rounded-bl-full opacity-10" />
                  <div className="relative">
                    <div className="overflow-hidden mx-auto mb-4 flex justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-syncops-dark-900">
                    {member.name}
                  </h3>
                  <p className="text-syncops-primary-500 font-medium">{member.role}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {totalPages > 1 && (
            <div
              className="flex justify-center mt-8 space-x-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index ? "bg-syncops-primary-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
