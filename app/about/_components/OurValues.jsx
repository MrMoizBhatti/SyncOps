"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Shield } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and tailor our solutions to their unique challenges. Our focus is on understanding their requirements and delivering exceptional value.",
      icon: Heart,
    },
    {
      title: "Continuous Innovation",
      description:
        "We stay at the forefront of technology to deliver cutting-edge solutions. Our commitment to innovation drives us to constantly improve and adapt to the ever-changing tech landscape.",
      icon: Lightbulb,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster a collaborative environment. By working together, we achieve greater results and create a more inclusive and supportive workplace.",
      icon: Users,
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in all our products and services. Our rigorous testing and quality control processes ensure that we consistently deliver reliable and effective solutions.",
      icon: Shield,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-syncops-primary-500 rounded-full filter blur-3xl opacity-10"
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
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-syncops-dark-900 text-center">
            Core Principles that Drive Us
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto text-balance leading-relaxed">
            The guiding principles that shape our innovative approach and drive
            the development of effective software solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-6 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-syncops-primary-500 rounded-bl-full opacity-10" />
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-syncops-primary-500 p-3 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-syncops-dark-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
