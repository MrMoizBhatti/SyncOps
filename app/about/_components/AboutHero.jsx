"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0A1C] py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 opacity-30"></div>
      <div className="absolute top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-snug mb-3 sm:mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Empowering the Future
              </span>
              <br />
              <span className="text-white">with Purpose-Driven</span>
              <br />
              <span className="text-white">Innovation</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              At SyncOps, we transform businesses through technology, people, and purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <SafeLink href="#team">
                <button className="group w-full sm:w-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                    </svg>
                    Meet the Team
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </SafeLink>
              
              <SafeLink href="#mission">
                <button className="group w-full sm:w-auto border-2 border-[#00B894] text-[#00B894] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#00B894] hover:text-white transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Our Mission
                  </span>
                </button>
              </SafeLink>
            </div>
          </div>
          
          {/* Right Side - Futuristic Icon Cluster */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl max-h-[400px] sm:max-h-[450px] md:max-h-[500px] w-full">
              {/* Icon Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Innovation Icon */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Innovation</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Cutting-edge solutions</p>
                </div>

                {/* Technology Icon */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Technology</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">AI-powered tools</p>
                </div>

                {/* People Icon */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">People</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Expert team</p>
                </div>

                {/* Purpose Icon */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Purpose</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Meaningful impact</p>
                </div>

                {/* Growth Icon */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Growth</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Scalable solutions</p>
                </div>

                {/* Future Icon */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Future</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Forward-thinking</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-3 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-[#00B894] rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 