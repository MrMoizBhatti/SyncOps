"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const getInitials = (full) => {
  const p = full.trim().split(/\s+/);
  const f = p[0]?.[0] || "";
  const l = p[p.length - 1]?.[0] || "";
  return (f + l).toUpperCase();
};

// All leaders in hierarchy order: CEO, COO, CTO, CBDO, CMO
  const team = [
    {
      name: "Majid Ali",
    role: "Founder & Chief Executive Officer (CEO)",
    experienceBadge: "More than 10 years' experience",
    blurb: "Overall visionary and leader of SyncOps, responsible for strategy, innovation, and company direction.",
    photo: "/images/leadership/Majid-aliCEO.jpeg",
    website: "#", 
    linkedin: "#", 
    twitter: "#", 
    email: "majid@syncops.tech",
    highlight: true
  },
  {
    name: "Ahmer Mairaj",
    role: "Chief Operating Officer (COO)",
    experienceBadge: "10+ years' experience",
    blurb: "Oversees daily operations, resource management, and execution of business strategies.",
    photo: "/images/leadership/Ahmer-Mairaj.jpg",
    website: "#",
      linkedin: "#",
      twitter: "#",
    email: "#",
    },
    {
      name: "Rimsha Imran",
    role: "Chief Technology Officer (CTO)",
    experienceBadge: "5+ years' experience",
    blurb: "Leads product development, technology roadmap, and innovation strategy.",
    photo: "/images/leadership/RimshaimranCTO.jpeg",
    website: "#",
      linkedin: "#",
      twitter: "#",
    email: "#",
    },
    {
      name: "Nida Naeem",
    role: "Chief Business Development Officer (CBDO) ",
    experienceBadge: "8+ years' experience",
    blurb: "Secures partnerships, expands market reach, and drives revenue growth.",
    photo: "/images/leadership/NidaNaeemCMO.jpeg",
    website: "#",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Abu Sufian",
    role: "Chief Marketing Officer (CMO)",
    experienceBadge: "15+ years' experience",
    blurb: "Manages brand strategy, marketing campaigns, and global visibility.",
    photo: "/images/leadership/Abu-Sufian.jpg",
    website: "#",
      linkedin: "#",
      twitter: "#",
    email: "#",
  },
];

// Coverflow Card Component
const CoverflowCard = ({ person, index, currentIndex, total, onClick }) => {
  const { 
    name, 
    role, 
    experienceBadge, 
    blurb, 
    photo,
    linkedin = "#", 
    twitter = "#", 
    website = "#", 
    email = "#" 
  } = person;

  // Calculate position relative to center with circular wrapping
  const rawOffset = index - currentIndex;
  // Handle circular offset for smooth looping
  let offset = rawOffset;
  if (rawOffset > total / 2) {
    offset = rawOffset - total;
  } else if (rawOffset < -total / 2) {
    offset = rawOffset + total;
  }
  const absOffset = Math.abs(offset);
  
  // Calculate 3D transform values
  const getTransform = () => {
    if (absOffset === 0) {
      // Center card - no rotation, full scale
      return {
        rotateY: 0,
        translateX: 0,
        translateZ: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10
      };
    } else {
      // Side cards - rotated and scaled (show up to 2 cards on each side)
      if (absOffset > 2) {
        // Hide cards that are too far away
        return {
          rotateY: 0,
          translateX: 0,
          translateZ: 0,
          scale: 0,
          opacity: 0,
          zIndex: 0
        };
      }
      
      const direction = offset > 0 ? 1 : -1;
      const rotateY = direction * 45;
      const translateX = direction * (absOffset * 180 + 40);
      const translateZ = -absOffset * 80;
      const scale = Math.max(0.65, 1 - absOffset * 0.12);
      const opacity = Math.max(0.4, 1 - absOffset * 0.25);
      
      return {
        rotateY,
        translateX,
        translateZ,
        scale,
        opacity,
        zIndex: 10 - absOffset
      };
    }
  };

  const transform = getTransform();
  const isActive = absOffset === 0;

  return (
    <motion.div
      className="absolute w-[360px] md:w-[380px] cursor-pointer"
      style={{
        left: '50%',
        marginLeft: '-180px',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        zIndex: transform.zIndex,
      }}
      animate={{
        x: transform.translateX,
        rotateY: transform.rotateY,
        scale: transform.scale,
        opacity: transform.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={() => onClick(index)}
      whileHover={isActive ? { 
        scale: transform.scale * 1.05,
        y: -5,
      } : {
        scale: transform.scale * 1.02,
      }}
    >
      <div className={`bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        isActive 
          ? 'h-[480px] md:h-[460px] lg:h-[440px] shadow-[0_25px_50px_rgba(0,196,255,0.15)] border-[#00C4FF]/30 ring-2 ring-[#00C4FF]/20' 
          : 'h-[360px] md:h-[340px] lg:h-[320px] shadow-2xl border-white/10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]'
      }`}>
        {/* Image Section */}
        <div className="relative h-[360px] md:h-[340px] lg:h-[320px] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white flex-shrink-0">
          {photo ? (
            <Image
              src={photo}
              alt={`${name} - ${role}`}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 10%' }}
              priority={isActive}
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00B894] to-[#00C4FF] text-white font-bold text-5xl md:text-6xl">
              {getInitials(name)}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-0.5">{name}</h3>
            <div className="text-xs font-medium text-white/90 mb-1.5">{role}</div>
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium border border-white/30">
              {experienceBadge}
            </div>
          </div>
        </div>

        {/* Content Section - Only show on active card */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col p-3 md:p-4 bg-gradient-to-b from-[#1A1A2E] to-[#0B0A1C]"
          >
            <p className="text-gray-300 leading-relaxed text-xs md:text-sm mb-3">{blurb}</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 text-gray-400">
              <a 
                aria-label="LinkedIn" 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Linkedin size={18} />
              </a>
              <a 
                aria-label="Twitter" 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Twitter size={18} />
              </a>
              <a 
                aria-label="Website" 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Globe size={18} />
              </a>
              <a 
                aria-label="Email" 
                href={`mailto:${email}`}
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const LeadershipTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  // Auto-rotate with intersection observer - continuous looping
  useEffect(() => {
    if (!sectionRef.current) return;

    let intervalId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start auto-rotate when section is visible
            if (!intervalId) {
              intervalId = setInterval(() => {
                setCurrentIndex((prev) => {
                  const next = (prev + 1) % team.length;
                  return next;
                });
              }, 5000);
            }
          } else {
            // Stop auto-rotate when section is not visible
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = null;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [team.length]);

  return (
    <div id="team" className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">SyncOps</span>{" "}
          <span className="text-[#00C4FF]">Leadership Team</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Meet the visionary leaders driving SyncOps Software House forward in healthcare AI innovation.
        </p>
      </motion.div>

      {/* Coverflow Container */}
      <section ref={sectionRef} className="relative py-10">
        {isMobile ? (
          <div className="space-y-6">
            {team.map((person, index) => (
              <motion.div
                key={`${person.name}-mobile-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <div className="relative h-72 bg-white">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-contain"
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#00B894] to-[#00C4FF] text-white text-4xl font-bold">
                      {getInitials(person.name)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                    <p className="text-sm text-white/80 mb-2">{person.role}</p>
                    <span className="inline-flex text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur">
                      {person.experienceBadge}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-gray-300 text-sm leading-relaxed">
                  {person.blurb}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
        <div className="relative h-[600px] md:h-[560px] lg:h-[540px] flex items-center justify-center overflow-visible w-full">
          <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
            {team.map((person, index) => (
              <CoverflowCard
                key={`${person.name}-${index}`}
                person={person}
                index={index}
                currentIndex={currentIndex}
                total={team.length}
                onClick={setCurrentIndex}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#00C4FF]/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 border border-gray-200 hover:border-[#00C4FF]/30 items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-slate-700 hover:text-[#00C4FF] transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#00C4FF]/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 border border-gray-200 hover:border-[#00C4FF]/30 items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-slate-700 hover:text-[#00C4FF] transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#00C4FF] w-8 shadow-lg shadow-[#00C4FF]/40' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
      </div>
        )}
      </section>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00B894]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
            </svg>
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam; 