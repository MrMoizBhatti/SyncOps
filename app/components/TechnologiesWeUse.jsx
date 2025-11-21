"use client";
import { useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, 
  FaDatabase, FaServer, FaBrain, FaCogs, FaGithub, FaFigma 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiTerraform } from 'react-icons/si';
import SafeLink from './ui/SafeLink';
import { motion } from 'framer-motion';
import { viewport, stagger, fadeUp } from '../../lib/motionConfig';

const techCategories = [
  {
    name: "Frontend",
    icon: <FaReact size={24} />,
    description: "Modern UI frameworks and design tools",
    technologies: [
      { name: "React", icon: <FaReact size={32} />, color: "text-blue-400", category: "Frontend", description: "Component-based UI library" },
      { name: "TypeScript", icon: <SiTypescript size={32} />, color: "text-blue-600", category: "Frontend", description: "Typed JavaScript superset" },
      { name: "Next.js", icon: <FaReact size={32} />, color: "text-gray-400", category: "Frontend", description: "React framework for production" },
      { name: "Figma", icon: <FaFigma size={32} />, color: "text-purple-400", category: "Frontend", description: "Design and prototyping tool" }
    ]
  },
  {
    name: "Backend",
    icon: <FaServer size={24} />,
    description: "Server-side technologies and APIs",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs size={32} />, color: "text-green-400", category: "Backend", description: "JavaScript runtime environment" },
      { name: "Python", icon: <FaPython size={32} />, color: "text-yellow-400", category: "Backend", description: "High-level programming language" },
      { name: "Java", icon: <FaJava size={32} />, color: "text-red-400", category: "Backend", description: "Enterprise-grade platform" },
      { name: "Express", icon: <FaServer size={32} />, color: "text-gray-400", category: "Backend", description: "Web application framework" }
    ]
  },
  {
    name: "Database",
    icon: <FaDatabase size={24} />,
    description: "Data storage and management solutions",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb size={32} />, color: "text-green-500", category: "Database", description: "NoSQL document database" },
      { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "text-blue-500", category: "Database", description: "Advanced open source database" },
      { name: "Redis", icon: <SiRedis size={32} />, color: "text-red-500", category: "Database", description: "In-memory data structure store" },
      { name: "MySQL", icon: <FaDatabase size={32} />, color: "text-blue-600", category: "Database", description: "Relational database management" }
    ]
  },
  {
    name: "AI/ML",
    icon: <FaBrain size={24} />,
    description: "Artificial intelligence and machine learning",
    technologies: [
      { name: "TensorFlow", icon: <FaBrain size={32} />, color: "text-orange-400", category: "AI/ML", description: "Open source ML platform" },
      { name: "PyTorch", icon: <FaBrain size={32} />, color: "text-red-400", category: "AI/ML", description: "Deep learning framework" },
      { name: "OpenAI", icon: <FaBrain size={32} />, color: "text-green-400", category: "AI/ML", description: "Advanced AI models and APIs" },
      { name: "Hugging Face", icon: <FaBrain size={32} />, color: "text-yellow-400", category: "AI/ML", description: "NLP and ML model hub" }
    ]
  },
  {
    name: "Infrastructure",
    icon: <FaCogs size={24} />,
    description: "Cloud and DevOps technologies",
    technologies: [
      { name: "AWS", icon: <FaAws size={32} />, color: "text-orange-400", category: "Infrastructure", description: "Cloud computing platform" },
      { name: "Docker", icon: <FaDocker size={32} />, color: "text-blue-400", category: "Infrastructure", description: "Containerization platform" },
      { name: "Kubernetes", icon: <SiKubernetes size={32} />, color: "text-blue-500", category: "Infrastructure", description: "Container orchestration" },
      { name: "Terraform", icon: <SiTerraform size={32} />, color: "text-purple-400", category: "Infrastructure", description: "Infrastructure as code" }
    ]
  }
];

export default function TechnologiesWeUse() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div className="text-center" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-center text-3xl md:text-4xl font-bold text-[#111] mb-4" variants={fadeUp(12)}>
          Technologies We <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
            Use
          </span>
        </motion.h2>
        <motion.p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed" variants={fadeUp(16)}>
          Cutting-edge tools and frameworks to build robust, scalable, and innovative solutions.
        </motion.p>
      </motion.div>
        
      {/* Enhanced Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {techCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-base shadow-lg backdrop-blur-md transition-all duration-300 border border-white/30 bg-white/20 hover:bg-white/30 hover:shadow-[0_0_16px_0_#00F8B4] hover:border-[#00F8B4] focus:outline-none focus:ring-2 focus:ring-[#00F8B4]/40 ${
              activeCategory === index
                ? 'bg-gradient-to-r from-[#00F8B4]/80 to-[#00C4FF]/80 text-white shadow-[0_0_24px_0_#00F8B4] border-[#00F8B4] scale-105'
                : 'text-black/90'
            }`}
            style={{backdropFilter:'blur(12px)'}}
          >
            <span className="text-xl md:text-2xl">{category.icon}</span>
            <div className="text-left">
              <div className="font-semibold">{category.name}</div>
              <div className="text-xs opacity-80">{category.description}</div>
            </div>
          </button>
        ))}
      </div>
        
      {/* Enhanced Technology Grid */}
      <motion.div className="relative min-h-[280px] mt-12" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.05)}>
        <div key={activeCategory} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techCategories[activeCategory].technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white/80 p-6 rounded-2xl text-center shadow-xl border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 hover:border-[#00C4FF]/80 hover:bg-gradient-to-br hover:from-[#E6FFFA]/60 hover:to-[#F0FCFF]/80 relative overflow-hidden"
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 text-[#00C4FF] text-xs font-medium rounded-full border border-[#00C4FF]/30">
                  {tech.category}
                </span>
              </div>
              
              {/* Technology Icon */}
              <div className={`flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse`}
                style={{minHeight:'64px'}}>
                <span className={`text-[48px] md:text-[56px] ${tech.color} drop-shadow-[0_2px_8px_rgba(0,196,255,0.10)]`}>{tech.icon}</span>
              </div>
              
              {/* Technology Name */}
              <h3 className="text-base md:text-lg text-gray-800 mt-2 font-semibold tracking-tight">
                {tech.name}
              </h3>
              
              {/* Tooltip */}
              {hoveredTech === tech && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#0B0A1C] text-white text-sm rounded-lg shadow-lg border border-[#00C4FF]/20 z-10 whitespace-nowrap">
                  <div className="text-center">
                    <div className="font-semibold text-[#00F8B4]">{tech.name}</div>
                    <div className="text-gray-300 text-xs mt-1">{tech.description}</div>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0B0A1C]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Enhanced CTA Section */}
      <div className="text-center mt-8 sm:mt-12 md:mt-16">
        <div className="bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-[#00F8B4]/20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3 sm:mb-4">
            Need a Custom Tech Stack?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-0">
            Our team can recommend and implement the perfect technology combination for your specific project requirements.
          </p>
          <SafeLink
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-[#00C4FF]/30 focus-visible:outline-none"
          >
            Get Tech Consultation
          </SafeLink>
        </div>
      </div>
    </div>
  );
} 