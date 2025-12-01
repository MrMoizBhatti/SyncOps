"use client";
import React from "react";
import Image from "next/image";
import SafeLink from "../../components/ui/SafeLink";

const CEOMessage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FAFAFF] to-white py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00B894]/3 to-[#00C4FF]/3 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title with Animated Underline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#222222] mb-6 relative">
              A Message from Our CEO
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full shadow-[0_0_10px_rgba(0,184,148,0.5)]"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full"></div>
            </h1>
          </div>

          {/* Main CEO Message Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-[0_0_40px_rgba(0,184,148,0.15)] transition-all duration-500 relative overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-0 hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - CEO Profile */}
              <div className="text-center">
                {/* CEO Image - Centered */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full p-[6px] shadow-2xl">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden border-2 border-white shadow-inner">
                      <Image
                        src="/images/leadership/Majid-aliCEO.jpeg"
                        alt="Majid Ali - CEO of SyncOps"
                        width={192}
                        height={192}
                        priority
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Enhanced Glowing effect */}
                  {/* <div className="absolute inset-0 w-48 h-48 mx-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-20 blur-xl"></div> */}
                  
                  {/* Additional floating elements around image */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-3 h-3 bg-[#00B894] rounded-full"></div>
                </div>

                {/* Badge - Centered under avatar */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E6F7F5] to-[#F0FDFA] rounded-full border border-[#007E7A]/20 mb-8 shadow-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full mr-2"></div>
                  <span className="text-[#007E7A] font-bold text-sm">Vision & Leadership</span>
                </div>

                {/* CEO Info */}
                <div className="mb-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-0 hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
                  
                  <div className="relative z-10">
                    {/* Name */}
                    <h2 className="text-3xl font-semibold text-[#1F3A56] mb-4 leading-tight">Majid Ali</h2>
                    
                    {/* Title */}
                    <p className="text-[#007E7A] font-medium text-lg mb-8">Founder & CEO, SyncOps</p>
                    
                    {/* Bio paragraph */}
                    <p className="text-[#555F6B] text-base leading-relaxed max-w-xs mx-auto text-center mb-8">
                      Driving innovation through cutting-edge technology solutions that transform businesses and accelerate digital growth.
                    </p>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E6F7F5] to-[#F0FDFA] rounded-full border border-[#00B894]/20">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full mr-2"></div>
                      <span className="text-[#007E7A] font-semibold text-sm">Founder & Visionary</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons - Centered with platform-specific colors */}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/majidali-syncops/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Majid Ali on LinkedIn"
                    title="Connect on LinkedIn"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] group"
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/majidali"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Majid Ali on X (Twitter)"
                    title="Follow on X (Twitter)"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(29,161,242,0.5)] group"
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/majidali"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Majid Ali's GitHub profile"
                    title="View GitHub Profile"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(51,51,51,0.5)] group"
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Message */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6 text-[#0B0A1C] leading-relaxed max-w-[70ch]">
                  <p className="text-lg text-gray-700">
                    Welcome to <span className="font-bold text-[#009688]">SyncOps</span>! We're passionate about building technology that inspires <span className="font-semibold text-[#009688]">trust</span>, drives <span className="font-semibold text-[#009688]">innovation</span>, and delivers real value for our clients and partners.
                  </p>
                  
                  <p className="text-lg text-gray-700">
                    SyncOps was founded with a vision to <span className="font-semibold text-[#009688]">empower organizations</span> through digital transformation. From our early days to our current growth, our commitment to <span className="font-semibold text-[#009688]">excellence</span> and <span className="font-semibold text-[#009688]">client success</span> has never wavered.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-xl p-6 border-l-4 border-[#00B894] backdrop-blur-sm relative">
                    {/* Accent dot in top-left corner */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full"></div>
                    <p className="text-lg font-semibold italic text-[#1F3A56] leading-relaxed drop-shadow-sm">
                      "Our mission is to <span className="text-[#009688] font-bold">lead with innovation</span>, integrity, and a relentless focus on delivering solutions that shape the future of business."
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-[#0A3E4E]">Our core services:</span> <span className="font-semibold text-[#009688]">AI Solutions</span>, <span className="font-semibold text-[#009688]">Cybersecurity</span>, <span className="font-semibold text-[#009688]">Software Development</span>, <span className="font-semibold text-[#009688]">Web & Mobile Development</span>, <span className="font-semibold text-[#009688]">Cloud</span>, <span className="font-semibold text-[#009688]">Data Analytics</span>.
                  </p>
                  
                  <p className="text-lg text-gray-700">
                    Thank you for choosing SyncOps as your <span className="font-semibold text-[#009688]">technology partner</span>. We look forward to achieving <span className="font-semibold text-[#009688]">great things</span> together.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-16 pt-8 border-t border-gray-200 relative">
                  {/* Floating accent dot near signature */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-70"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-[#0A3E4E] mb-2 drop-shadow-sm" style={{ fontFamily: 'cursive' }}>
                        Majid Ali
                      </div>
                      <div className="text-sm text-gray-500">Founder & CEO, SyncOps</div>
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full shadow-[0_0_5px_rgba(0,196,255,0.3)]"></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16 relative">
                  {/* Floating accent dot near CTA */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-60"></div>
                  <SafeLink href="/about#team">
                    <button className="group bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,184,148,0.4)] hover:scale-105 transition-all duration-300 relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                        </svg>
                        Meet Our Team
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </SafeLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage; 