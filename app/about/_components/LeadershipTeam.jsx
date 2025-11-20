"use client";
import React from "react";

const LeadershipTeam = () => {
  const team = [
    {
      name: "Majid Ali",
      role: "Founder & CEO",
      initials: "MA",
      bio: "Visionary leader with extensive experience in healthcare technology and AI innovation.",
      linkedin: "#",
      twitter: "#",
      github: "#",
      profileLink: "#"
    },
    {
      name: "Rimsha Imran",
      role: "Chief Technology Officer",
      initials: "RI",
      bio: "Technology expert specializing in AI development and healthcare software architecture.",
      linkedin: "#",
      twitter: "#",
      github: "#",
      profileLink: "#"
    },
    {
      name: "Nida Naeem",
      role: "Chief Marketing Officer",
      initials: "NN",
      bio: "Marketing strategist focused on healthcare technology adoption and client success.",
      linkedin: "#",
      twitter: "#",
      github: "#",
      profileLink: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">SyncOps</span>{" "}
          <span className="text-[#00C4FF]">Leadership Team</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Meet the visionary leaders driving SyncOps Software House forward in healthcare AI innovation.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="group bg-[#1A1A2E]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 text-center">
              {/* Avatar */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative">
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F8B4] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-[#00C4FF] font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-[#0077B5]/20 hover:bg-[#0077B5]/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-[#0077B5]/30 hover:border-[#0077B5]/60"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href={member.twitter}
                  className="w-10 h-10 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-[#1DA1F2]/30 hover:border-[#1DA1F2]/60"
                  aria-label={`${member.name} Twitter`}
                >
                  <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a
                  href={member.github}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/20 hover:border-white/40"
                  aria-label={`${member.name} GitHub`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00F8B4]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
            </svg>
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam; 