"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const JoinTeamCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          We're Always Seeking Talent
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our team of innovators and help shape the future of technology.
        </p>
        
        <SafeLink href="/careers">
          <button className="group bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,184,148,0.4)] hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              View Open Positions
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </SafeLink>
      </div>
    </div>
  );
};

export default JoinTeamCTA; 