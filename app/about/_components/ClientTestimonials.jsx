"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Solutions",
    content: "SyncOps transformed our development process with their AI-powered solutions. The team's expertise and dedication to quality exceeded our expectations.",
    rating: 5,
    company: "TechFlow Solutions",
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateCorp",
    content: "Working with SyncOps has been a game-changer for our business. Their innovative approach and technical excellence have helped us scale rapidly.",
    rating: 5,
    company: "InnovateCorp",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product, DataSync",
    content: "The SyncOps team delivered exceptional results on time and within budget. Their collaborative approach and attention to detail are unmatched.",
    rating: 5,
    company: "DataSync",
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            What Our <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Clients
            </span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with SyncOps.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
            
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-[#00F8B4]/20">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#222222] text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#00C4FF] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#00C4FF] hover:bg-[#00C4FF] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#00F8B4] hover:bg-[#00F8B4] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 