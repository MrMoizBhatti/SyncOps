"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const CareersHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0A1C] py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-snug mb-6">
              <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
                Join the Minds Behind
              </span>
              <br />
              <span className="text-white">Tomorrow's AI-Powered</span>
              <br />
              <span className="text-white">Innovations</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We empower teams to innovate, solve meaningful problems, and shape the future of intelligent software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SafeLink href="#open-positions">
                <button className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    View Open Positions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </SafeLink>
              
              <SafeLink href="#why-join">
                <button className="group border-2 border-[#00F8B4] text-[#00F8B4] font-semibold px-8 py-4 rounded-lg hover:bg-[#00F8B4] hover:text-white transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Why Work at SyncOps?
                  </span>
                </button>
              </SafeLink>
            </div>
          </div>
          
          {/* Right Side - Thematic Careers Widget */}
          <div className="relative">
            <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6  border border-white/10 shadow-2xl h-full w-full relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 rounded-2xl"></div>
              
              {/* Widget Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Join the Team</h3>
                    <p className="text-gray-400 text-sm">Shape the future with us</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <span className="text-[#00F8B4] text-sm font-medium">LIVE</span>
                </div>
              </div>
              
              {/* Central Icon Section */}
              <div className="flex flex-col items-center justify-center mb-6 relative z-10">
                {/* Glowing orb container */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center border border-[#00F8B4]/30 shadow-lg relative">
                    {/* Animated team/people icon */}
                    <div className="relative">
                      <svg className="w-12 h-12 text-[#00F8B4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full opacity-20 animate-pulse blur-sm"></div>
                </div>
                
                {/* Central message */}
                <h4 className="text-white font-semibold text-center mb-2">Build Something Amazing</h4>
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  Join a team where innovation meets purpose
                </p>
              </div>
              
              {/* Career Highlights */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                    <span className="text-[#00F8B4] text-lg">✅</span>
                  </div>
                  <span>Remote-first culture</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00C4FF]/20 to-[#00F8B4]/20 rounded-lg flex items-center justify-center border border-[#00C4FF]/30">
                    <span className="text-[#00C4FF] text-lg">🎓</span>
                  </div>
                  <span>Learn & grow together</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                    <span className="text-[#00F8B4] text-lg">🤝</span>
                  </div>
                  <span>Build meaningful products</span>
                </div>
              </div>
              
              {/* Floating accent elements inside widget */}
              <div className="absolute top-1/4 right-4 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-1/4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
            </div>
            
            {/* Floating Elements Outside */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-[#00F8B4] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/2 -left-6 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero; 