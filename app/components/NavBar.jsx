"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import SafeLink from "./ui/SafeLink";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { TopBarContext, MobileMenuContext } from "./TopBar";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/ai-division", label: "AI Division" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/referral-program", label: "Referral Program" },
  { href: "/blog", label: "Blogs" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathname = usePathname();
  const isTopBarHidden = useContext(TopBarContext);
  const mobileMenuContextValue = useContext(MobileMenuContext);
  const setMobileMenuOpen = mobileMenuContextValue?.setIsMobileMenuOpen;

  useEffect(() => {
    setMounted(true);
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Sticky on scroll with throttling for better performance
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setIsSticky(prevSticky => {
        const newSticky = scrollY > 10;
        // Only update if state actually changed to prevent unnecessary re-renders
        return prevSticky !== newSticky ? newSticky : prevSticky;
      });
    }
  }, []);

  // Throttled scroll handler to prevent excessive updates
  useEffect(() => {
    if (!mounted) return;
    
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll, mounted]);

  useEffect(() => {
    if (!mounted) return;
    setIsMenuOpen(false);
  }, [pathname, mounted]);


  // Share mobile menu state with parent to hide top bar
  useEffect(() => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(isMenuOpen);
    }
  }, [isMenuOpen, setMobileMenuOpen]);

  // Lock body scroll + (optional) hide floating ribbons when menu is open
  useEffect(() => {
    if (!mounted) return;
    const body = document.body;
    const html = document.documentElement;
    const prev = body.style.overflow;

    body.style.overflow = isMenuOpen ? "hidden" : prev || "";
    html.classList.toggle("menu-open", isMenuOpen); // if you want to hide fixed ribbons via CSS

    return () => {
      body.style.overflow = prev || "";
      html.classList.remove("menu-open");
    };
  }, [isMenuOpen, mounted]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setFocusedIndex(-1);
        // Return focus to hamburger button
        const hamburgerButton = document.querySelector('[aria-label*="menu"]');
        if (hamburgerButton) hamburgerButton.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, navLinks.length + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, -1));
      } else if (e.key === "Tab") {
        // Allow natural tab navigation
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      setFocusedIndex(-1);
    };
  }, [isMenuOpen]);

  const isActive = (href) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className={`w-full left-0 right-0 fixed transition-all duration-300 bg-white border-b ${isSticky
        ? "shadow-lg"
        : "shadow-sm"
        }`}
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: isTopBarHidden ? '0px' : '40px',
        left: 0,
        right: 0,
        zIndex: 45,
        transition: 'top 0.3s ease'
      }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8"
        style={{ height: "64px", minHeight: "64px" }}
      >
        {/* Logo */}
        <SafeLink
          href="/"
          className="flex items-center h-full hover:scale-105 transition-transform duration-300 touch-manipulation"
          aria-label="SyncOps Homepage"
        >
          <Image
            src="/images/logo.png"
            width={120}
            height={36}
            alt="SyncOps Logo"
            priority
            className="h-8 sm:h-9 md:h-10 w-auto max-h-10 object-contain"
          />
        </SafeLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 2xl:gap-9" role="menubar">
          {navLinks.map((link) => (
            <SafeLink
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-gray-700 font-medium hover:text-[#00C4FF] transition-all duration-200 text-sm relative group ${isActive(link.href) ? "text-[#00C4FF] font-semibold" : ""
                }`}
              aria-label={`Navigate to ${link.label}`}
              role="menuitem"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00B894] to-[#00C4FF] transition-all duration-200 ${isActive(link.href)
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
              />
            </SafeLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <SafeLink
            href="/contact"
            className="group bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,184,148,0.4)] hover:scale-105 transition-all duration-300 relative overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 1.25 }}
            aria-label="Schedule a Call"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle size={16} />
              Schedule a Call
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </SafeLink>
        </div>

        {/* Premium Hamburger with Animation */}
        <button
          onClick={() => setIsMenuOpen((s) => !s)}
          className="lg:hidden text-gray-800 p-2 hover:bg-gradient-to-br hover:from-[#00B894]/10 hover:to-[#00C4FF]/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center relative group shadow-sm hover:shadow-lg"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={26} className="text-gray-900 group-hover:text-[#00C4FF] drop-shadow-sm" />
            </motion.div>
          ) : (
            <Menu size={26} className="group-hover:text-[#00C4FF] group-hover:scale-110 transition-all duration-300" />
          )}
          {/* Premium Pulse Indicator */}
          <span className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full shadow-lg ${isMenuOpen ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`} />
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-xl blur-sm ${isMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />
        </button>
      </div>

      {/* Premium Mobile Menu Overlay - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 z-[9999] top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            aria-hidden={!isMenuOpen}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            aria-describedby="mobile-menu-description"
            style={{ zIndex: 9999 }}
          >
            <h2 id="mobile-menu-title" className="sr-only">Main Navigation Menu</h2>
            <p id="mobile-menu-description" className="sr-only">
              Use arrow keys to navigate menu items, Enter to select, or Escape to close.
            </p>

            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#0A0A1F]/90 via-black/80 to-[#0A0A1F]/90 backdrop-blur-2xl pointer-events-none"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Premium Menu Panel with Glass Morphism - Full Screen */}
            <motion.div
              className="absolute left-0 top-0 h-screen w-full 
              bg-gradient-to-b from-[#0A0A1F] via-[#1a1a2e] to-[#0A0A1F]
              backdrop-blur-3xl shadow-2xl shadow-black/50
              border-r border-white/5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: prefersReducedMotion ? 0.1 : 0.6
              }}
              style={{ willChange: "transform" }}
            >
              {/* Ambient Background Effects */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#00B894]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00C4FF]/10 rounded-full blur-3xl" />
              </div>
              {/* Ultra Premium Close Button - No Border */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-[#00B894] 
                         p-3 hover:bg-white/5 rounded-full 
                         transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-[#00B894]/50 
                         touch-manipulation min-h-[56px] min-w-[56px] 
                         flex items-center justify-center z-50"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                style={{ zIndex: 10000 }}
              >
                <X size={36} className="drop-shadow-lg" />
              </motion.button>

              {/* Premium Brand Logo Section */}
              <motion.div
                className="flex flex-col items-center justify-center pt-16 pb-8 px-6 relative"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                {/* Gradient Accent */}
                <motion.div
                  className="absolute top-10 w-32 h-1 bg-gradient-to-r from-transparent via-[#00B894] to-transparent blur-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />

                <SafeLink
                  href="/"
                  className="group relative"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="SyncOps Homepage"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src="/images/logo-footer.png"
                      width={200}
                      height={60}
                      alt="SyncOps Logo"
                      priority
                      className="h-16 w-auto object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(0,184,148,0.5)] transition-all duration-300"
                    />
                    {/* Premium Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00B894]/30 to-[#00C4FF]/30 blur-2xl opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </SafeLink>
              </motion.div>

              {/* Ultra Premium Navigation */}
              <nav className="px-6 pb-8 h-full overflow-y-auto relative z-10">
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : 0.4 + index * 0.05,
                        duration: prefersReducedMotion ? 0.1 : 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <SafeLink
                        href={link.href}
                        className={`group relative text-white 
                                   transition-all duration-300 touch-manipulation 
                                   min-h-[80px] flex items-center px-6 py-6 
                                   rounded-3xl border-2
                                   hover:border-[#00B894]/60 hover:scale-[1.02] hover:-translate-y-2
                                   hover:shadow-2xl
                                   active:scale-[0.98] active:translate-y-0
                                   focus:outline-none focus:ring-4 focus:ring-[#00B894]/30
                                   backdrop-blur-md
                                   ${isActive(link.href)
                            ? "bg-gradient-to-r from-[#00B894]/25 to-[#00C4FF]/25 text-[#00B894] border-[#00B894]/60 shadow-2xl shadow-[#00B894]/25 text-2xl font-extrabold"
                            : "hover:bg-gradient-to-r hover:from-white/8 hover:to-white/4 border-white/15 text-xl font-bold hover:shadow-xl"}`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        <span className="relative z-10 tracking-wide">{link.label}</span>

                        {/* Premium Active Indicator */}
                        {isActive(link.href) && (
                          <motion.div
                            className="absolute right-6 w-4 h-4 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full shadow-lg shadow-[#00B894]/60"
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                          />
                        )}

                        {/* Glass Morphism Hover Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#00B894]/15 to-[#00C4FF]/15 rounded-3xl opacity-0 group-hover:opacity-100 border-2 border-[#00B894]/30"
                          transition={{ duration: 0.3 }}
                        />

                        {/* Shimmer Effect on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </SafeLink>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Ultra Premium CTA Section */}
                <motion.div
                  className="mt-10 space-y-5 px-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.6,
                    duration: prefersReducedMotion ? 0.1 : 0.5
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Secondary CTA */}
                  <SafeLink
                    href="/contact"
                    className="group relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-bold 
                             text-lg px-6 py-5 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#00B894]/20
                             hover:border-[#00B894]/40 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 
                             flex items-center justify-center gap-3 min-h-[64px]
                             focus:outline-none focus:ring-4 focus:ring-[#00B894]/40 overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Schedule Strategy Consultation"
                  >
                    <MessageCircle size={22} className="relative z-10" />
                    <span className="relative z-10">Schedule Strategy Consultation</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </SafeLink>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

