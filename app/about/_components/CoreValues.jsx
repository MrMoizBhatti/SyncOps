"use client";
import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Excellence",
      description: "Delivering exceptional quality in every project and interaction",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Impact",
      description: "Creating meaningful change that transforms businesses and lives",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Transparency",
      description: "Building trust through open communication and honest collaboration",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Collaboration",
      description: "Working together with clients and teams to achieve shared success",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Client Success",
      description: "Prioritizing our clients' goals and ensuring their long-term success",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          What We Stand For
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our core values guide every decision we make and every solution we create, ensuring we deliver exceptional results while maintaining the highest standards.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#1F3A56] mb-4 group-hover:text-[#00B894] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>

            {/* Floating accent elements */}
            <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${value.gradient} rounded-full animate-pulse opacity-60`}></div>
            <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r ${value.gradient} rounded-full animate-bounce opacity-50`}></div>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00B894]/20">
          <blockquote className="text-2xl font-semibold text-[#1F3A56] mb-4 italic">
            "Our values aren't just words on a wall—they're the foundation of everything we do."
          </blockquote>
          <p className="text-gray-600">— SyncOps Team</p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues; 