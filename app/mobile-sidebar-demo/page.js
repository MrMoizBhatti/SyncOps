"use client";

import React from "react";
import { useMobileSidebar } from "../hooks/useMobileSidebar";
import MobileSidebar from "../components/MobileSidebar";
import AnimatedHamburger from "../components/AnimatedHamburger";

export default function MobileSidebarDemo() {
  const { isOpen, toggleSidebar, closeSidebar } = useMobileSidebar();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Ultra-Premium
            <span className="block bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Mobile Sidebar
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the future of mobile navigation with glassmorphism design, 
            smooth animations, and premium interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <AnimatedHamburger 
              isOpen={isOpen} 
              onClick={toggleSidebar}
              className="bg-white/10 hover:bg-white/20 text-white"
            />
            
            <button
              onClick={toggleSidebar}
              className="px-8 py-4 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,248,180,0.5)] transition-all duration-300 hover:scale-105"
            >
              Open Premium Sidebar
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Glassmorphism</h3>
              <p className="text-gray-300">Beautiful frosted glass effect with backdrop blur</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Smooth Animations</h3>
              <p className="text-gray-300">Framer Motion powered transitions and micro-interactions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Premium UX</h3>
              <p className="text-gray-300">Pixel-perfect design with hover effects and shadows</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} onClose={closeSidebar} />
      
      {/* Instructions for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden">
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <p className="text-white text-sm text-center">
            📱 Resize to mobile view or use device toolbar to see the sidebar in action
          </p>
        </div>
      </div>
    </div>
  );
}
