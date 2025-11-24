"use client";
import { useState } from 'react';
import {
  FaAws,
  FaDatabase,
  FaFire,
  FaGoogle,
  FaLeaf,
  FaMicrosoft,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
} from 'react-icons/fa';
import {
  SiAngular,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import SafeLink from './ui/SafeLink';
import { motion } from 'framer-motion';
import { viewport, stagger, fadeUp } from '../../lib/motionConfig';

const technologyData = [
  {
    name: 'React',
    description:
      'Modern UI library for building interactive user interfaces with component-based architecture',
    icon: <FaReact size={32} />,
    color: 'text-blue-500',
    category: 'frontend',
  },
  {
    name: 'Next.js',
    description:
      'Full-stack React framework for production applications with SSR and SSG',
    icon: <SiNextdotjs size={32} />,
    color: 'text-gray-900',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    description:
      'Typed JavaScript for better development experience and code reliability',
    icon: <SiTypescript size={32} />,
    color: 'text-blue-600',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    description:
      'Utility-first CSS framework for rapid UI development and consistent design',
    icon: <SiTailwindcss size={32} />,
    color: 'text-cyan-500',
    category: 'frontend',
  },
  {
    name: 'Vue.js',
    description:
      'Progressive JavaScript framework for building user interfaces',
    icon: <SiVuedotjs size={32} />,
    color: 'text-green-500',
    category: 'frontend',
  },
  {
    name: 'Angular',
    description:
      'Platform for building mobile and desktop web applications',
    icon: <SiAngular size={32} />,
    color: 'text-red-500',
    category: 'frontend',
  },
  {
    name: 'Node.js',
    description:
      'JavaScript runtime for server-side development with event-driven architecture',
    icon: <FaNodeJs size={32} />,
    color: 'text-green-600',
    category: 'backend',
  },
  {
    name: 'Express.js',
    description:
      'Fast web application framework for Node.js with minimal overhead',
    icon: <FaServer size={32} />,
    color: 'text-gray-600',
    category: 'backend',
  },
  {
    name: 'Django',
    description:
      'High-level Python web framework for rapid development and clean design',
    icon: <FaPython size={32} />,
    color: 'text-green-700',
    category: 'backend',
  },
  {
    name: 'FastAPI',
    description:
      'Modern Python web framework for building APIs with automatic documentation',
    icon: <FaPython size={32} />,
    color: 'text-blue-500',
    category: 'backend',
  },
  {
    name: 'Laravel',
    description:
      'Elegant PHP web application framework with expressive syntax',
    icon: <FaPhp size={32} />,
    color: 'text-red-500',
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    description:
      'Advanced open-source relational database system with ACID compliance',
    icon: <FaDatabase size={32} />,
    color: 'text-blue-700',
    category: 'database',
  },
  {
    name: 'MongoDB',
    description:
      'NoSQL document database for modern applications with flexible schema',
    icon: <FaLeaf size={32} />,
    color: 'text-green-600',
    category: 'database',
  },
  {
    name: 'MySQL',
    description:
      'Reliable relational database trusted for transactional workloads',
    icon: <SiMysql size={32} />,
    color: 'text-sky-600',
    category: 'database',
  },
  {
    name: 'Redis',
    description:
      'In-memory data structure store for caching and real-time applications',
    icon: <FaFire size={32} />,
    color: 'text-red-600',
    category: 'database',
  },
  {
    name: 'AWS',
    description:
      'Comprehensive cloud computing platform with global infrastructure',
    icon: <FaAws size={32} />,
    color: 'text-orange-500',
    category: 'cloud',
  },
  {
    name: 'Azure',
    description:
      "Microsoft's cloud computing platform for building, testing, and deploying applications",
    icon: <FaMicrosoft size={32} />,
    color: 'text-blue-600',
    category: 'cloud',
  },
  {
    name: 'Google Cloud',
    description:
      "Google's cloud platform with advanced AI and machine learning capabilities",
    icon: <FaGoogle size={32} />,
    color: 'text-blue-500',
    category: 'cloud',
  },
];

const categoryConfig = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <FaReact size={24} />,
    description: 'Modern UI frameworks and design tools',
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <FaServer size={24} />,
    description: 'Server-side technologies and APIs',
  },
  {
    id: 'database',
    name: 'Database',
    icon: <FaDatabase size={24} />,
    description: 'Data storage and management solutions',
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: <FaAws size={24} />,
    description: 'Cloud platforms and DevOps tooling',
  },
];

const techCategories = categoryConfig.map((category) => ({
  ...category,
  technologies: technologyData
    .filter((tech) => tech.category === category.id)
    .map((tech) => ({ ...tech, categoryLabel: category.name })),
}));

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
                  {tech.categoryLabel}
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