"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SyncOps transformed our business with their innovative AI solutions. The team's expertise and dedication exceeded our expectations.",
      name: "Jennifer Martinez",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5,
      logo: "TF"
    },
    {
      quote: "Working with SyncOps was a game-changer for our company. Their attention to detail and commitment to quality is unmatched.",
      name: "Robert Chen",
      role: "CEO",
      company: "InnovateCorp",
      rating: 5,
      logo: "IC"
    },
    {
      quote: "The SyncOps team delivered exceptional results on time and within budget. Their collaborative approach made the entire process seamless.",
      name: "Sarah Williams",
      role: "Product Manager",
      company: "DataSync Inc",
      rating: 5,
      logo: "DS"
    },
    {
      quote: "SyncOps' expertise in AI and software development helped us achieve our digital transformation goals faster than expected.",
      name: "Michael Rodriguez",
      role: "VP of Technology",
      company: "FutureTech",
      rating: 5,
      logo: "FT"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Don't just take our word for it—hear from the businesses we've helped transform through innovative technology solutions.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        {/* Main Testimonial */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            {/* Quote */}
            <div className="mb-8">
              <svg className="w-12 h-12 text-[#00B894] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-2xl lg:text-3xl font-semibold text-[#1F3A56] leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Client Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">{testimonials[currentIndex].logo}</span>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#1F3A56]">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-[#1F3A56]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-[#1F3A56]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-[#00B894] to-[#00C4FF] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#1F3A56]">98%</span>
          </div>
          <h4 className="text-lg font-semibold text-[#1F3A56] mb-2">Client Satisfaction</h4>
          <p className="text-gray-600">Consistently high ratings from our clients</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#1F3A56]">50+</span>
          </div>
          <h4 className="text-lg font-semibold text-[#1F3A56] mb-2">Happy Clients</h4>
          <p className="text-gray-600">Businesses transformed by our solutions</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#1F3A56]">4.9/5</span>
          </div>
          <h4 className="text-lg font-semibold text-[#1F3A56] mb-2">Average Rating</h4>
          <p className="text-gray-600">Based on client feedback and reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 