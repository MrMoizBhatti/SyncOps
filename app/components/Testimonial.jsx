"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The team delivered outstanding results for our project. Their innovative approach and technical expertise exceeded our expectations.",
    name: "John Doe",
    position: "CEO, United States",
    imageUrl: "https://avatar.iran.liara.run/public/20",
  },
  {
    text: "Their expertise in cloud solutions helped our business scale efficiently. The seamless integration and support were invaluable to our growth.",
    name: "Jane Smith",
    position: "CTO, United Kingdom",
    imageUrl: "https://avatar.iran.liara.run/public/30",
  },
  {
    text: "Their solutions empowered us to automate and optimize our workflows, saving us significant time and resources.",
    name: "Alice Brown",
    position: "Operations Manager, Canada",
    imageUrl: "https://avatar.iran.liara.run/public/40",
  },
  {
    text: "An exceptional team to work with. They consistently delivered beyond expectations and ensured the project was completed on time.",
    name: "Michael Lee",
    position: "Product Manager, Australia",
    imageUrl: "https://avatar.iran.liara.run/public/50",
  },
  {
    text: "The innovative solutions provided by the team have significantly improved our operational efficiency and customer satisfaction.",
    name: "Emily Chen",
    position: "Director of Operations, Singapore",
    imageUrl: "https://avatar.iran.liara.run/public/60",
  },
];

const TestimonialCard = ({ text, name, position, imageUrl }) => (
  <motion.div
    className="relative bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col min-h-[250px] sm:min-h-[300px] transition-all duration-500 overflow-hidden group hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    tabIndex={0}
    aria-label={`Testimonial from ${name}`}
  >
    {/* Enhanced gradient glow */}
    <div className="pointer-events-none absolute -inset-4 sm:-inset-6 z-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00B894]/20 via-[#00C4FF]/10 to-[#00B894]/20 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
    
    {/* Floating accent elements - Hidden on mobile */}
    <div className="hidden sm:block absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
    <div className="hidden sm:block absolute bottom-4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
    
    {/* Quote icon with enhanced styling */}
    <div className="relative z-10 mb-4 sm:mb-6">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
        <Quote className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
    </div>
    
    {/* Quote text with enhanced typography */}
    <p className="relative z-10 text-gray-800 italic text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">{text}</p>
    
    {/* Enhanced author info */}
    <div className="relative z-10 flex items-start mt-auto">
      <div>
        <p className="text-gray-900 font-bold text-base sm:text-lg leading-tight">{name}</p>
        <p className="text-[#00C4FF] text-xs sm:text-sm font-semibold">{position}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-0 bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 via-transparent to-[#00C4FF]/5"></div>
      <div className="hidden sm:block absolute top-20 left-5 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-5 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-4 h-4 bg-[#00B894] rounded-full animate-bounce opacity-60"></div>
      <div className="hidden sm:block absolute top-1/2 right-20 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
      <div className="hidden sm:block absolute bottom-1/4 left-20 w-2 h-2 bg-[#00B894] rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="hidden sm:block absolute bottom-1/3 right-10 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-500 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            What Our
            <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <div className="mx-auto w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#00B894] via-[#00C4FF] to-[#00B894] rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Trusted by leading companies worldwide to deliver exceptional results
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentPage}-${index}`}
                  {...testimonial}
                />
              ))}
            </div>
          </AnimatePresence>
          
          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 space-x-4 sm:space-x-6">
            <motion.button
              onClick={prevPage}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00B894]/30"
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            
            <div className="flex space-x-1.5 sm:space-x-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-gradient-to-r from-[#00B894] to-[#00C4FF] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextPage}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00B894]/30"
              aria-label="Next testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
