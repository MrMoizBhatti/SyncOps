"use client";
import { useState, useEffect } from 'react';
import { FaPhone, FaTimes } from 'react-icons/fa';
import SafeLink from './ui/SafeLink';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show CTA when user has scrolled past 50% of the page
      if (scrollY > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow-lg border-t border-white/20">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaPhone className="text-white text-sm" />
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Free 30-min Strategy Call</div>
              <div className="text-xs opacity-90">Get expert advice for your project</div>
            </div>
          </div>
          
          <SafeLink
            href="/contact"
            className="bg-white text-[#00C4FF] px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Book Now
          </SafeLink>
        </div>
      </div>
    </div>
  );
}
