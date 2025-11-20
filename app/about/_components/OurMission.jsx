"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, TrendingUp } from "lucide-react";

const OurMission = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with state-of-the-art solutions",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering superior quality in every project",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Driving significant change for businesses",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-syncops-primary-500 rounded-full filter blur-3xl opacity-10"
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
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            At the core of our ethos is a dedication to empowering businesses
            with innovative software solutions. We connect advanced technology
            with real-world challenges, fostering growth, improving efficiency,
            and driving digital transformation.
          </p>
          <motion.div
            className="bg-gradient-to-br from-syncops-primary-500 to-syncops-accent-400 p-px rounded-lg shadow-lg mb-16 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-semibold text-syncops-dark-900 mb-8">
                Our Core Values
              </h3>

              <div className="flex flex-col md:flex-row gap-8 justify-center">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-syncops-primary-500 mb-4"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-12 h-12" />
                    </motion.div>

                    <h4 className="text-xl font-semibold text-syncops-dark-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Together, these values guide our approach to delivering unparalleled
            software solutions that propel businesses forward in the digital
            age.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
