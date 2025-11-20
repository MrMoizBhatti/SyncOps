"use client";

import { useState, useEffect } from "react";

export const useMobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

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

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    mounted,
  };
};
