import React from "react";
import { FaRocket, FaChartLine } from 'react-icons/fa';

export default function CTA() {
  return (
    <section
      className="bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] py-20 px-6 text-center relative overflow-hidden"
      data-aos="fade-up"
      aria-label="Ready to Transform Your Business CTA"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#00F8B4] rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-500 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
          Ready to <span className="text-cyan-400">Transform</span> Your Business?
        </h2>
        
        <p className="text-gray-300 text-lg mt-2 mb-8 max-w-2xl mx-auto">
          Let's schedule a free 1-on-1 session to help you build scalable, intelligent solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#3DD6C7] to-[#00C4FF] shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Get free consultancy session"
          >
            <FaRocket className="w-4 h-4 mr-2 opacity-80" />
            Get Free Consultancy
          </a>
          
          <a
            href="/case-studies"
            className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0B0A1C] hover:scale-105 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="View case studies"
          >
            <FaChartLine className="w-4 h-4 mr-2 inline" />
            See Case Studies
          </a>
        </div>
      </div>
      
      {/* Floating Vertical Button */}
      <button
        className="fixed top-1/3 right-0 z-50 w-[48px] h-[160px] bg-gradient-to-b from-[#00F8B4] to-[#00C4FF] text-white font-semibold rounded-l-lg transform rotate-90 origin-bottom-right shadow-md text-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:brightness-110 transition-all duration-200"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        aria-label="Let's Talk Business"
      >
        Let's Talk Business
      </button>
    </section>
  );
}
