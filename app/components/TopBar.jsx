"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  User,
  ExternalLink,
} from "lucide-react";
import SafeLink from "./ui/SafeLink";
import { useContext, createContext } from "react";

// Context to share hidden state with NavBar and TopBar
export const TopBarContext = React.createContext(false);
export const MobileMenuContext = createContext({ isMobileMenuOpen: false, setIsMobileMenuOpen: () => {} });

const socialLinks = [
  { href: "https://www.linkedin.com/company/syncops", icon: Linkedin, label: "LinkedIn", tooltip: "Follow us on LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter", tooltip: "Follow us on Twitter" },
  { href: "https://www.facebook.com/people/SyncOps/61560935900877/?mibextid=kFxxJD", icon: Facebook, label: "Facebook", tooltip: "Follow us on Facebook" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube", tooltip: "Subscribe to our YouTube" },
  { href: "https://www.instagram.com/syncops_tech/", icon: Instagram, label: "Instagram", tooltip: "Follow us on Instagram" },
];

export default function TopBar() {
  const [showMobileContact, setShowMobileContact] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setShowMobileContact(false);
  }, [typeof window !== "undefined" ? window.location.pathname : null]);

  const isHidden = useContext(TopBarContext);
  const mobileMenuContextValue = useContext(MobileMenuContext);
  const isMobileMenuOpen = mobileMenuContextValue?.isMobileMenuOpen || false;

  const handleLocationClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://maps.app.goo.gl/tTdayYQH3rmzoNEv5", "_blank", "noopener,noreferrer");
    }
  };

  // Hide top bar when mobile menu is open
  if (isMobileMenuOpen) return null;

  return (
    <>
      {/* Top bar - hides on scroll down */}
      <div className={`fixed top-0 left-0 right-0 w-full bg-[#0A0A1F]/80 backdrop-blur-sm text-white text-sm font-medium h-10 flex items-center px-4 md:px-6 lg:px-8 justify-between select-none border-b border-white/5 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : ''}`}>
        {/* Left: Contact */}
        <div className="flex items-center gap-3 md:gap-4 flex-wrap min-w-0">
          <a
            href="mailto:info@syncops.tech"
            className="hidden lg:flex items-center gap-1 hover:text-[#00F8B4] hover:scale-105 transition-all duration-300 cursor-pointer group min-w-0"
            aria-label="Email info@syncops.tech"
          >
            <Mail size={12} className="text-[#00C4FF] group-hover:text-[#00F8B4] transition-colors duration-300 flex-shrink-0" />
            <span className="truncate">info@syncops.tech</span>
          </a>

          <a
            href="tel:+923018678319"
            className="hidden sm:flex items-center gap-1 hover:text-[#00F8B4] hover:scale-105 transition-all duration-300 cursor-pointer group min-w-0"
            aria-label="Call SyncOps"
          >
            <Phone size={12} className="text-[#00C4FF] group-hover:text-[#00F8B4] transition-colors duration-300 flex-shrink-0" />
            <span className="truncate">+92-301-8678-319</span>
          </a>

          <button
            className="hidden md:flex items-center gap-1 hover:text-[#00F8B4] hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={handleLocationClick}
            title="Open in Google Maps"
            aria-label="Open location in Google Maps"
          >
            <MapPin size={12} className="text-[#00C4FF] group-hover:text-[#00F8B4] transition-colors duration-300" />
            <span>Mumtaz Market, Gujranwala, Pakistan</span>
            <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Right: CEO & Social */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <SafeLink
            href="/ceo-message"
            className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-[#00F8B4] hover:scale-105 transition-all duration-300 group"
            title="Read our CEO's message"
          >
            <User size={12} className="text-[#00C4FF] group-hover:text-[#00F8B4] transition-colors duration-300" />
            <span className="hidden lg:inline">Message from the CEO</span>
            <span className="lg:hidden">CEO Message</span>
          </SafeLink>

          {/* Mobile contact toggle */}
          <button
            onClick={() => setShowMobileContact((s) => !s)}
            className="sm:hidden text-gray-300 hover:text-[#00F8B4] transition-colors duration-300 p-2 touch-manipulation min-h-[44px] min-w-[44px]"
            title="Toggle contact info"
            aria-expanded={showMobileContact}
            aria-controls="mobile-contact"
            aria-label="Toggle contact information"
          >
            <Phone size={16} />
          </button>

          {/* Social */}
          <div className="flex items-center gap-1 md:gap-2">
            {socialLinks.map(({ href, icon: Icon, label, tooltip }) => (
              <SafeLink
                key={label}
                href={href}
                aria-label={label}
                title={tooltip}
                className="text-gray-300 hover:text-[#00F8B4] hover:scale-105 transition-all duration-300 p-1.5 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00F8B4]/50 touch-manipulation min-h-[36px] min-w-[36px] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </SafeLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Contact Info */}
      {showMobileContact && (
        <div
          id="mobile-contact"
          className="sm:hidden bg-[#0A0A1F]/95 backdrop-blur-sm border-b border-white/5 animate-slideInFromTop"
        >
          <div className="px-4 py-3 space-y-3 text-[13px] text-gray-300">
            <a href="mailto:info@syncops.tech" className="flex items-center gap-2 touch-manipulation">
              <Mail size={14} className="text-[#00C4FF]" />
              <span className="truncate">info@syncops.tech</span>
            </a>
            <a href="tel:+923018678319" className="flex items-center gap-2 touch-manipulation">
              <Phone size={14} className="text-[#00C4FF]" />
              <span className="truncate">+92-301-8678-319</span>
            </a>
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-[#00F8B4] transition-colors duration-300 touch-manipulation"
              onClick={handleLocationClick}
            >
              <MapPin size={14} className="text-[#00C4FF]" />
              <span className="truncate">Mumtaz Market, Gujranwala, Pakistan</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

