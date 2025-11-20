"use client";

import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import { TopBarContext } from "./TopBar";
import { MobileMenuContext } from "./TopBar";

export default function Header() {
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide top bar on scroll down
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTopBarHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 0) {
        setIsTopBarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted, lastScrollY]);

  return (
    <TopBarContext.Provider value={isTopBarHidden}>
      <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
        <TopBar />
        <NavBar />
        {/* Spacer to prevent content from going under fixed header */}
        <div style={{ height: '104px' }} />
      </MobileMenuContext.Provider>
    </TopBarContext.Provider>
  );
}
