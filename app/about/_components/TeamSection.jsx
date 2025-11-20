"use client";
import React from "react";

const team = [
  {
    name: "Ahmed Khan",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in AI and software development. Passionate about transforming businesses through innovative technology solutions.",
    initials: "AK",
    linkedin: "https://linkedin.com/in/ahmedkhan",
    github: "https://github.com/ahmedkhan",
    email: "ahmed@syncops.tech",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Lead Architect",
    bio: "Technical expert specializing in scalable AI systems and cloud architecture. Drives innovation and ensures technical excellence across all projects.",
    initials: "SC",
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    email: "sarah@syncops.tech",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Product strategist focused on user-centric design and market-driven solutions. Bridges the gap between business needs and technical implementation.",
    initials: "MR",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    github: "https://github.com/michaelrodriguez",
    email: "michael@syncops.tech",
  },
];

const TeamSection = () => {
  return (
    <section className="py-32 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            Meet the <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Minds
            </span> Behind SyncOps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings together decades of experience in AI, software development, and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 hover:border-[#00F8B4]/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,248,180,0.15)] relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10 text-center">
                  {/* Enhanced Circular Profile Badge */}
                  <div className="relative mb-10">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full p-2 shadow-2xl group-hover:shadow-[0_0_40px_rgba(0,248,180,0.4)] transition-all duration-500 group-hover:scale-110">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced Glowing Effect */}
                    <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00F8B4] rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse delay-1000"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#222222] mb-3 group-hover:text-[#00F8B4] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#00C4FF] font-semibold text-base mb-6">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {member.bio}
                  </p>
                  
                  {/* Enhanced Social Links */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00F8B4] hover:text-white transition-all duration-300 group-hover:scale-110 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00C4FF] hover:text-white transition-all duration-300 group-hover:scale-110 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    
                    <a
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-[#00F8B4] hover:to-[#00C4FF] hover:text-white transition-all duration-300 group-hover:scale-110 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 