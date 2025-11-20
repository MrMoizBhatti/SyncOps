"use client";
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { motionDurations, motionEasing } from '../../lib/motionConfig';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "SyncOps transformed our business with their AI-powered SaaS solution. The team's expertise and dedication exceeded our expectations. Our productivity increased by 300% within the first quarter.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    impact: "300% Productivity Increase in 90 Days"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "DataSync Pro",
    content: "Working with SyncOps was a game-changer for our startup. Their innovative approach to software development and commitment to quality helped us launch our product ahead of schedule.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    impact: "Product Launched 3 Weeks Early"
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "CloudSync",
    content: "The SyncOps team delivered an exceptional cloud management solution that perfectly fits our needs. Their attention to detail and ongoing support has been invaluable to our success.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    impact: "42% Cloud Cost Reduction in 60 Days"
  },
  {
    name: "David Kim",
    position: "VP Engineering",
    company: "InnovateCorp",
    content: "SyncOps delivered a complex AI integration that exceeded our expectations. Their technical expertise and project management skills are world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    impact: "AI Integration Completed 2 Weeks Early"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#0B0A1C] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Clients
            </span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative">
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_0_rgba(0,196,255,0.12)] transition-shadow duration-500"
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                transition={{ duration: motionDurations.short, ease: motionEasing.primary }}
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <FaQuoteLeft className="text-2xl text-white" />
                </div>
                
                {/* Impact Metric */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full border border-[#00F8B4]/30">
                    <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
                    <span className="text-[#00F8B4] font-semibold text-sm">
                      {testimonials[currentIndex].impact}
                    </span>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#00F8B4] text-xl mx-1" />
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#00C4FF]/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 