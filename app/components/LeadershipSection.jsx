"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react";

// Removed TypeScript types for plain JSX usage

const getInitials = (full) => {
  const p = full.trim().split(/\s+/);
  const f = p[0]?.[0] || "";
  const l = p[p.length - 1]?.[0] || "";
  return (f + l).toUpperCase();
};

// Reusable Tailwind classes
const gradientRing = "bg-gradient-to-tr from-[#00B894] to-[#00C4FF]";
const primaryBtn = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#00B894] to-[#00C4FF] shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4FF]/60";

const founder = [
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
];

const cSuite = [
  {
    name: "Ahmer Mairaj",
    role: "Chief Operating Officer (COO)",
    experienceBadge: "10+ years' experience",
    blurb: "Oversees daily operations, resource management, and execution of business strategies.",
    photo: "/images/leadership/Ahmer-Mairaj.jpg",
  },
  {
    name: "Rimsha Imran",
    role: "Chief Technology Officer (CTO)",
    experienceBadge: "5+ years' experience",
    blurb: "Leads product development, technology roadmap, and innovation strategy.",
    photo: "/images/leadership/RimshaimranCTO.jpeg",
  },
  {
    name: "Nida Naeem",
    role: "Chief Business Development Officer (CBDO) ",
    experienceBadge: "8+ years' experience",
    blurb: "Secures partnerships, expands market reach, and drives revenue growth.",
    photo: "/images/leadership/NidaNaeemCMO.jpeg",
  },
  {
    name: "Abu Sufian",
    role: "Chief Marketing Officer (CMO)",
    experienceBadge: "15+ years' experience",
    blurb: "Manages brand strategy, marketing campaigns, and global visibility.",
    photo: "/images/leadership/Abu-Sufian.jpg",
  },
];

// Combine all leadership members for coverflow
const allLeadership = [...founder, ...cSuite];

// Enhanced Framer Motion variants with premium scroll effects
const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
  }
};

const item = { 
  hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" }, 
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  } 
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

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

  // Calculate position relative to center
  const offset = index - currentIndex;
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
      // Side cards - rotated and scaled (showing 4 cards total - 2 on each side)
      const direction = offset > 0 ? 1 : -1;
      const rotateY = direction * 45; // Tilt angle
      const translateX = direction * (absOffset * 180 + 40); // Closer spacing for 4 visible cards
      const translateZ = -absOffset * 80; // Depth
      const scale = Math.max(0.65, 1 - absOffset * 0.12); // Scale down less aggressively
      const opacity = Math.max(0.4, 1 - absOffset * 0.25); // More visible
      
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
      <div className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        isActive 
          ? 'h-[480px] md:h-[460px] lg:h-[440px] shadow-[0_25px_50px_rgba(0,196,255,0.15)] border-[#00C4FF]/30 ring-2 ring-[#00C4FF]/20' 
          : 'h-[360px] md:h-[340px] lg:h-[320px] shadow-2xl border-gray-100 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]'
      }`}>
        {/* Image Section - Full size, less space */}
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
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 font-bold text-5xl md:text-6xl">
              {getInitials(name)}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Info overlay - Compact */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-0.5">{name}</h3>
            <div className="text-xs font-medium text-white/90 mb-1.5">{role}</div>
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium border border-white/30">
              {experienceBadge}
            </div>
          </div>
        </div>

        {/* Content Section - Only show on active card, no white space for inactive */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col p-3 md:p-4 bg-gradient-to-b from-white to-gray-50/50"
          >
            <p className="text-slate-700 leading-relaxed text-xs md:text-sm mb-3">{blurb}</p>
            
            {/* Social Icons - Compact */}
            <div className="flex items-center gap-2 text-slate-400">
              <a 
                aria-label="LinkedIn" 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-gray-100"
              >
                <Linkedin size={18} />
              </a>
              <a 
                aria-label="Twitter" 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-gray-100"
              >
                <Twitter size={18} />
              </a>
              <a 
                aria-label="Website" 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-gray-100"
              >
                <Globe size={18} />
              </a>
              <a 
                aria-label="Email" 
                href={`mailto:${email}`}
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-gray-100"
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

// Section Title Component - Premium style
const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    className="mb-16 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] shadow-lg shadow-[#00C4FF]/30" />
  </motion.div>
 );

// Main LeadershipSection Component with Coverflow
const LeadershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allLeadership.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allLeadership.length) % allLeadership.length);
  };

  // Auto-rotate with intersection observer to prevent reset when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;

    let interval = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only start auto-rotate when section is visible
            if (!interval) {
              interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % allLeadership.length);
              }, 5000); // Reduced from 20000ms to 5000ms (5 seconds)
            }
          } else {
            // Stop auto-rotate when section is not visible
            if (interval) {
              clearInterval(interval);
              interval = null;
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    observer.observe(sectionRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20  bg-white overflow-hidden">
      <div className="relative w-full mx-auto px-2 sm:px-4">
        
        {/* Main Title */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            SyncOps{" "}
            <span className="bg-gradient-to-r from-[#00B894] via-[#00C4FF] to-[#00B894] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Leadership & Management
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence across our global operations, 
            shaping the future of enterprise software solutions.
          </p>
        </motion.div>

        {/* Coverflow Container - Adjusted for 4 visible cards, no side space */}
        <div className="relative h-[600px] md:h-[560px] lg:h-[540px] flex items-center justify-center overflow-visible w-full">
          {/* Coverflow Cards - Full width to show 4 cards */}
          <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
            <AnimatePresence mode="wait">
              {allLeadership.map((person, index) => (
                <CoverflowCard
                  key={`${person.name}-${index}`}
                  person={person}
                  index={index}
                  currentIndex={currentIndex}
                  total={allLeadership.length}
                  onClick={setCurrentIndex}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet and desktop */}
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

          {/* Dots Indicator - Enhanced active look */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {allLeadership.map((_, index) => (
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

      </div>
    </section>
  );
};

export default LeadershipSection;
