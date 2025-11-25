"use client";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaShieldAlt, FaRocket, FaServer, FaDatabase as FaPostgresql, FaLeaf, FaFire, FaPython, FaPhp, FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiAngular, SiMysql } from "react-icons/si";

const TechnologyStackCards = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const technologies = [
    {
      name: "React",
      description: "Modern UI library for building interactive user interfaces with component-based architecture",
      icon: <FaReact className="w-8 h-8" />,
      category: "frontend",
      color: "text-blue-600"
    },
    {
      name: "Next.js",
      description: "Full-stack React framework for production applications with SSR and SSG",
      icon: <SiNextdotjs className="w-8 h-8" />,
      category: "frontend",
      color: "text-black"
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript for better development experience and code reliability",
      icon: <SiTypescript className="w-8 h-8" />,
      category: "frontend",
      color: "text-blue-600"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development and consistent design",
      icon: <SiTailwindcss className="w-8 h-8" />,
      category: "frontend",
      color: "text-cyan-500"
    },
    {
      name: "Vue.js",
      description: "Progressive JavaScript framework for building user interfaces",
      icon: <SiVuedotjs className="w-8 h-8" />,
      category: "frontend",
      color: "text-green-500"
    },
    {
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      icon: <SiAngular className="w-8 h-8" />,
      category: "frontend",
      color: "text-red-500"
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development with event-driven architecture",
      icon: <FaNodeJs className="w-8 h-8" />,
      category: "backend",
      color: "text-green-600"
    },
    {
      name: "Express.js",
      description: "Fast web application framework for Node.js with minimal overhead",
      icon: <FaServer className="w-8 h-8" />,
      category: "backend",
      color: "text-gray-800"
    },
    {
      name: "Django",
      description: "High-level Python web framework for rapid development and clean design",
      icon: <FaPython className="w-8 h-8" />,
      category: "backend",
      color: "text-green-700"
    },
    {
      name: "FastAPI",
      description: "Modern Python web framework for building APIs with automatic documentation",
      icon: <FaPython className="w-8 h-8" />,
      category: "backend",
      color: "text-blue-500"
    },
    {
      name: "Laravel",
      description: "Elegant PHP web application framework with expressive syntax",
      icon: <FaPhp className="w-8 h-8" />,
      category: "backend",
      color: "text-red-500"
    },
    {
      name: "PostgreSQL",
      description: "Advanced open-source relational database system with ACID compliance",
      icon: <FaPostgresql className="w-8 h-8" />,
      category: "database",
      color: "text-blue-700"
    },
    {
      name: "MongoDB",
      description: "NoSQL document database for modern applications with flexible schema",
      icon: <FaLeaf className="w-8 h-8" />,
      category: "database",
      color: "text-green-600"
    },
    {
      name: "MySQL",
      description: "Reliable relational database trusted for transactional workloads",
      icon: <SiMysql className="w-8 h-8" />,
      category: "database",
      color: "text-sky-600"
    },
    {
      name: "Redis",
      description: "In-memory data structure store for caching and real-time applications",
      icon: <FaFire className="w-8 h-8" />,
      category: "database",
      color: "text-red-600"
    },
    {
      name: "AWS",
      description: "Comprehensive cloud computing platform with global infrastructure",
      icon: <FaAws className="w-8 h-8" />,
      category: "cloud",
      color: "text-orange-500"
    },
    {
      name: "Azure",
      description: "Microsoft's cloud computing platform for building, testing, and deploying applications",
      icon: <FaMicrosoft className="w-8 h-8" />,
      category: "cloud",
      color: "text-blue-600"
    },
    {
      name: "Google Cloud",
      description: "Google's cloud platform with advanced AI and machine learning capabilities",
      icon: <FaGoogle className="w-8 h-8" />,
      category: "cloud",
      color: "text-blue-500"
    }
  ];

  const filters = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "cloud", label: "Cloud" }
  ];

  const filteredTechnologies = activeFilter === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section className="py-20 bg-white" id="tech-stack">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00B894]">Our Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
            Comprehensive Technology Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of cutting-edge technologies that power modern software solutions and drive digital transformation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`${tech.color} mb-4 origin-left transition-transform duration-300 group-hover:scale-105`}>
                  {tech.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                  {tech.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00B894] mb-2">17+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C4FF] mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00B894] mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C4FF] mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackCards; 