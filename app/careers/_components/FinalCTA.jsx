"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9FCFE] via-white to-[#F0FCFF] text-[#1F3A56] py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00B894] rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#00B894] rounded-full animate-bounce delay-1000 opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#00C4FF] rounded-full animate-pulse delay-500 opacity-60"></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#00B894] rounded-full animate-pulse delay-1500 opacity-40"></div>
      <div className="absolute bottom-1/2 right-1/3 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-2000 opacity-55"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl blur-3xl"></div>
          
          {/* Glass Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-white/50 shadow-2xl">
            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-30 animate-pulse blur-sm"></div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
                Ready to Build Your Future with{" "}
                <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                  SyncOps?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                Join a team of innovators, problem-solvers, and visionaries who are shaping the future of AI-powered software. Your next career milestone starts here.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <SafeLink href="#open-positions">
                  <button className="group bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(0,184,148,0.5)] hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      View Open Positions
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SafeLink>
                
                <SafeLink href="#contact">
                  <button className="group border-2 border-[#00B894] text-[#00B894] font-bold px-10 py-4 rounded-xl hover:bg-[#00B894] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,184,148,0.4)]">
                    <span className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Get in Touch
                    </span>
                  </button>
                </SafeLink>
              </div>

              {/* Additional Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
                  <span>Fast application process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full animate-pulse"></div>
                  <span>Remote-first opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
                  <span>Competitive compensation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Back Link */}
          <div className="text-center mt-8">
            <SafeLink href="#open-positions">
              <button className="group text-gray-500 hover:text-[#00B894] transition-colors duration-300 flex items-center gap-2 mx-auto">
                <span className="text-sm">Join Us</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
            </SafeLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 