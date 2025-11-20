"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Their innovative solutions have transformed our business processes. Highly recommended!",
    author: "John Doe",
    company: "Tech Innovators Inc.",
  },
  {
    text: "The team's expertise and dedication to our project were truly impressive. Outstanding results!",
    author: "Jane Smith",
    company: "Global Solutions Ltd.",
  },
  {
    text: "They delivered a robust solution that exceeded our expectations. A pleasure to work with!",
    author: "Mike Johnson",
    company: "Future Systems Corp.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0fbab1] to-white opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-[#042638]">
            What Our Clients Say
          </h2>
          <div className="relative bg-white p-8 rounded-lg shadow-lg">
            <Quote className="w-12 h-12 text-[#0fbab1] opacity-20 absolute top-4 left-4" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl mb-6 text-gray-700">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="font-semibold text-[#042638]">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].company}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="bg-[#0fbab1] text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="bg-[#0fbab1] text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
