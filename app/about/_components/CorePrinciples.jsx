"use client";
import React from "react";

const principles = [
  {
    title: "Client-Centric",
    description: "Your success is our priority. We build solutions that align with your business goals and drive measurable results.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
      </svg>
    ),
    color: "from-[#00B894] to-[#00C4FF]",
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of technology trends and continuously evolve our solutions to deliver cutting-edge results.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
      </svg>
    ),
    color: "from-[#00C4FF] to-[#00B894]",
  },
  {
    title: "Collaboration",
    description: "We work as an extension of your team, fostering open communication and shared ownership of success.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
      </svg>
    ),
    color: "from-[#00B894] to-[#00C4FF]",
  },
  {
    title: "Quality Assurance",
    description: "Every solution undergoes rigorous testing and quality checks to ensure reliability and performance.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    color: "from-[#00C4FF] to-[#00B894]",
  },
];

const CorePrinciples = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            What <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core principles guide every decision and action, ensuring we deliver exceptional value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:border-[#00B894]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(0,184,148,0.4)]`}>
                    {principle.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#222222] mb-4 group-hover:text-[#00B894] transition-colors duration-300">
                    {principle.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Floating particles */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${principle.color} rounded-full opacity-60 animate-pulse`}></div>
                <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 bg-gradient-to-r ${principle.color} rounded-full opacity-40 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples; 