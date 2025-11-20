"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const FinalCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Let's harness the power of cutting-edge technology to build scalable, intelligent solutions that drive your business forward.
        </p>
        
        <SafeLink href="/contact">
          <button className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Start Your AI Journey Today
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </SafeLink>
        
        {/* Additional info */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
            Free Consultation
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
            No Commitment
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
            Expert Guidance
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA; 