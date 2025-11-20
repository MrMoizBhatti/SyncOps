"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Settings,
  Users,
  Briefcase,
  Code,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (!mounted) return;
    const body = document.body;
    const prev = body.style.overflow;
    
    body.style.overflow = isOpen ? "hidden" : prev || "";
    
    return () => {
      body.style.overflow = prev || "";
    };
  }, [isOpen, mounted]);

  // Close with Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const menuItems = [
    { href: "/services", label: "Services", icon: Settings },
    { href: "/technologies", label: "Technologies", icon: Code },
    { href: "/ai-division", label: "AI Division", icon: Sparkles },
    { href: "/products", label: "Products", icon: Briefcase },
    { href: "/careers", label: "Careers", icon: Users },
    { href: "/referral-programs", label: "Referral Program", icon: GraduationCap },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/about", label: "About Us", icon: Users },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2,
      },
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
      },
    }),
  };

  const buttonVariants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 h-full w-full max-w-sm z-[10000]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Glassmorphism Container */}
            <div className="h-full w-full bg-white/20 backdrop-blur-xl border-l border-white/30 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F8B4] to-[#00C4FF] flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">SyncOps</h2>
                </div>
                
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={24} className="text-white group-hover:text-[#00F8B4] transition-colors duration-300" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-3">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      custom={index}
                      onClick={onClose}
                      className="group flex items-center gap-4 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-semibold"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                        <Icon size={20} className="text-white group-hover:text-[#00F8B4] transition-colors duration-300" />
                      </div>
                      <span className="flex-1">{item.label}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Gradient CTA Button */}
              <motion.div
                variants={buttonVariants}
                initial="closed"
                animate="open"
                className="p-6"
              >
                <motion.a
                  href="/contact"
                  onClick={onClose}
                  className="group relative block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-bold text-center shadow-lg hover:shadow-[0_0_30px_rgba(0,248,180,0.5)] transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    <span>Schedule a Call</span>
                  </div>
                </motion.a>
              </motion.div>

              {/* Bottom Spacing */}
              <div className="flex-1" />
            </div>
          </motion.div>

          {/* Vertical Badge Button */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[10001]"
          >
            <motion.a
              href="/contact"
              className="group flex items-center gap-2 bg-gradient-to-b from-[#00F8B4] to-[#00C4FF] text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,248,180,0.4)] transition-all duration-300 writing-mode-vertical-rl text-orientation-mixed"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm">Let's Talk Business</span>
            </motion.a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
