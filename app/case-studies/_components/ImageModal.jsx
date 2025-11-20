"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, title }) => {
  // Close on Escape key and hide navbar
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    
    // Hide navbar when modal is open
    const navbar = document.querySelector('nav[role="navigation"]');
    if (navbar) {
      navbar.style.display = 'none';
    }
    
    const topbar = document.querySelector('div[class*="fixed top-0"]');
    if (topbar && topbar.style) {
      topbar.style.display = 'none';
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      // Show navbar when modal closes
      if (navbar) {
        navbar.style.display = '';
      }
      if (topbar && topbar.style) {
        topbar.style.display = '';
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 99999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg hover:scale-110"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Title (if provided) */}
            {title && (
              <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {title}
              </div>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full max-h-[90vh] overflow-auto bg-gray-100 flex items-center justify-center p-4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1400}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                style={{ objectPosition: 'center 20%' }}
                unoptimized
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;

