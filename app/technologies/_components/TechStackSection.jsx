"use client";
import React, { useState } from "react";

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
    frontend: [
      {
        name: "React",
        description: "Modern UI library for building interactive user interfaces with component-based architecture",
        icon: "⚛️",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Next.js",
        description: "Full-stack React framework for production applications with SSR and SSG",
        icon: "▲",
        color: "from-black to-gray-800"
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for better development experience and code reliability",
        icon: "📘",
        color: "from-blue-600 to-blue-700"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development and consistent design",
        icon: "🎨",
        color: "from-cyan-500 to-blue-500"
      },
      {
        name: "Vue.js",
        description: "Progressive JavaScript framework for building user interfaces",
        icon: "💚",
        color: "from-green-500 to-emerald-600"
      },
      {
        name: "Angular",
        description: "Platform for building mobile and desktop web applications",
        icon: "🔴",
        color: "from-red-500 to-red-600"
      }
    ],
    backend: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development with event-driven architecture",
        icon: "🟢",
        color: "from-green-600 to-green-700"
      },
      {
        name: "Python",
        description: "Versatile programming language for backend development and data science",
        icon: "🐍",
        color: "from-blue-600 to-blue-700"
      },
      {
        name: "Express.js",
        description: "Fast web application framework for Node.js with minimal overhead",
        icon: "⚡",
        color: "from-gray-800 to-gray-900"
      },
      {
        name: "Django",
        description: "High-level Python web framework for rapid development and clean design",
        icon: "🎯",
        color: "from-green-700 to-green-800"
      },
      {
        name: "FastAPI",
        description: "Modern Python web framework for building APIs with automatic documentation",
        icon: "🚀",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Laravel",
        description: "Elegant PHP web application framework with expressive syntax",
        icon: "🔥",
        color: "from-red-500 to-red-600"
      }
    ],
    database: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database system with ACID compliance",
        icon: "🐘",
        color: "from-blue-700 to-blue-800"
      },
      {
        name: "MongoDB",
        description: "NoSQL document database for modern applications with flexible schema",
        icon: "🍃",
        color: "from-green-600 to-green-700"
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching and real-time applications",
        icon: "🔴",
        color: "from-red-600 to-red-700"
      },
      {
        name: "MySQL",
        description: "Popular open-source relational database management system",
        icon: "🐬",
        color: "from-blue-600 to-blue-700"
      },
      {
        name: "SQL Server",
        description: "Enterprise-grade relational database with advanced analytics capabilities",
        icon: "💾",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Elasticsearch",
        description: "Distributed search and analytics engine for real-time data",
        icon: "🔍",
        color: "from-yellow-500 to-orange-500"
      }
    ]
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "database", label: "Database", icon: "🗄️" }
  ];

  return (
    <section className="py-24 bg-[#0B0A1C] text-white relative overflow-hidden" id="tech-stack">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00F8B4]">Our Technology Stack</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"> Technology</span>
            <br />
            Stack
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore our carefully curated suite of technologies that power modern software solutions with enterprise-grade reliability and performance.
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex shadow-lg border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-white text-[#00C4FF] shadow-lg transform scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies[activeTab].map((tech, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 relative overflow-hidden hover:scale-105"
            >
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl text-white text-2xl`}>
                    {tech.icon}
                  </div>
                </div>

                {/* Enhanced Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00F8B4] transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {tech.description}
                </p>
              </div>

              {/* Enhanced floating accent elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-[#00F8B4] rounded-full animate-pulse delay-1000 opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden shadow-xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Continuously Evolving
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Our technology stack is constantly updated to include the latest tools and frameworks, ensuring we deliver cutting-edge solutions that meet modern business requirements and industry standards.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  Latest Versions
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Security First
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  Performance Optimized
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Enterprise Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 