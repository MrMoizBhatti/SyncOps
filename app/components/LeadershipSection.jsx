"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe, Mail } from "lucide-react";

// Removed TypeScript types for plain JSX usage

const getInitials = (full) => {
  const p = full.trim().split(/\s+/);
  const f = p[0]?.[0] || "";
  const l = p[p.length - 1]?.[0] || "";
  return (f + l).toUpperCase();
};

// Reusable Tailwind classes
const gradientRing = "bg-gradient-to-tr from-[#00F8B4] to-[#00C4FF]";
const primaryBtn = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4FF]/60";

const founder = [
  {
    name: "Majid Ali",
    role: "Founder & Chief Executive Officer",
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
    photo: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Rimsha Imran",
    role: "Chief Technology Officer (CTO)",
    experienceBadge: "5+ years' experience",
    blurb: "Leads product development, technology roadmap, and innovation strategy.",
    photo: "/images/leadership/RimshaimranCTO.jpeg",
  },
  {
    name: "Abu Sufian",
    role: "Chief Business Development Officer (CBDO)",
    experienceBadge: "15+ years' experience",
    blurb: "Secures partnerships, expands market reach, and drives revenue growth.",
    photo: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Nida Naeem",
    role: "Chief Marketing Officer (CMO)",
    experienceBadge: "8+ years' experience",
    blurb: "Manages brand strategy, marketing campaigns, and global visibility.",
    photo: "/images/leadership/NidaNaeemCMO.jpeg",
  },
];

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.06 } 
  }
};

const item = { 
  hidden: { opacity: 0, y: 16 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  } 
};

// Person Card Component
const PersonCard = ({ person, size = "medium", className = "" }) => {
  const { 
    name, 
    role, 
    company = "SyncOps Technologies", 
    experienceBadge, 
    blurb, 
    photo,
    linkedin = "#", 
    twitter = "#", 
    website = "#", 
    email = "#" 
  } = person;

  const isLarge = size === "large";

  return (
    <motion.div 
      className={`group relative w-full rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#00C4FF]/50 focus-visible:outline-none ${className}`}
      whileHover={{ y: -2 }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Photo or Initials */}
        <div className="mb-6">
          <div className={`relative rounded-full p-[3px] ${gradientRing} shadow-lg ${
            isLarge ? "w-32 h-32" : "w-28 h-28"
          }`}>
            {photo ? (
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={photo}
                  alt={`${name} - ${role}`}
                  width={isLarge ? 128 : 112}
                  height={isLarge ? 128 : 112}
                  className="object-cover"
                  priority={isLarge}
                  loading={isLarge ? "eager" : "lazy"}
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-700 font-bold text-lg">
                {getInitials(name)}
              </div>
            )}
          </div>
        </div>

        <h3 className={`${isLarge ? "text-2xl" : "text-xl"} font-semibold text-slate-900 mb-2`}>{name}</h3>
        <div className="text-sm tracking-wide uppercase font-medium text-slate-600 mb-1">{role}</div>
        <div className="text-sm text-slate-500 mb-4">{company}</div>

        {/* Experience Badge */}
        <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-200 mb-4">
          {experienceBadge}
        </div>

        <p className="text-slate-700 leading-relaxed text-balance mb-6">{blurb}</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          <a 
            aria-label="LinkedIn" 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#00C4FF] hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#00C4FF]/50 focus-visible:outline-none"
          >
            <Linkedin size={18} />
          </a>
          <a 
            aria-label="Twitter" 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#00C4FF] hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#00C4FF]/50 focus-visible:outline-none"
          >
            <Twitter size={18} />
          </a>
          <a 
            aria-label="Website" 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#00C4FF] hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#00C4FF]/50 focus-visible:outline-none"
          >
            <Globe size={18} />
          </a>
          <a 
            aria-label="Email" 
            href={`mailto:${email}`}
            className="hover:text-[#00C4FF] hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#00C4FF]/50 focus-visible:outline-none"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Section Title Component
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow-sm" />
  </div>
 );

// Main LeadershipSection Component
const LeadershipSection = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-[#FAFAFF] overflow-hidden">
      {/* Ultra-subtle top radial gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#00F8B4]/3 via-[#00C4FF]/2 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            SyncOps{" "}
            <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Leadership & Management
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence across our global operations, 
            shaping the future of enterprise software solutions.
          </p>
        </div>

        {/* Founder */}
        <SectionTitle title="Founder & CEO" />
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {founder.map((p, i) => (
            <motion.div key={i} variants={item} className="md:col-span-2">
              <PersonCard person={p} size="large" />
            </motion.div>
          ))}
        </motion.div>

        {/* C-Suite */}
        <div className="mt-20">
          <SectionTitle 
            title="C-Suite Executives" 
            subtitle="Report directly to the CEO" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cSuite.map((person, index) => (
              <motion.div key={index} variants={item}>
                <PersonCard person={person} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
