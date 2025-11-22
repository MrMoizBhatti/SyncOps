"use client";
import React from "react";

const ClientTestimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with SyncOps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#00F8B4]/20 relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
          
          <div className="relative z-10">
            {/* Quote Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl lg:text-3xl text-[#2D2D2D] font-medium leading-relaxed mb-8 italic">
              "SyncOps transformed our business with their innovative AI solutions. Their team's expertise and dedication to our success exceeded all expectations. The results speak for themselves - we've seen a 300% increase in efficiency."
            </blockquote>

            {/* Star Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-8 h-8 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">SC</span>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold text-[#2D2D2D]">Sarah Chen</h4>
                <p className="text-gray-600">CTO, United States</p>
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial; 