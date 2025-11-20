"use client";
import React, { useState } from "react";

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
    frontend: [
      {
        name: "React",
        description: "Modern UI library for building interactive user interfaces with component-based architecture",
        icon: (
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.276 0-.56.015-.854.046 3.9 1.73 6.74 5.44 6.74 9.87 0 4.43-2.84 8.14-6.74 9.87.294.031.578.046.854.046 1.345 0 3.107-.96 4.888-2.622 1.78 1.653 3.542 2.602 4.887 2.602.276 0 .56-.015.854-.046-3.9-1.73-6.74-5.44-6.74-9.87 0-4.43 2.84-8.14 6.74-9.87-.294-.031-.578-.046-.854-.046z"/>
          </svg>
        )
      },
      {
        name: "Next.js",
        description: "Full-stack React framework for production applications with SSR and SSG",
        icon: (
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 4.317 8.296 8.918 9.695.779.234 1.62.422 2.748.528.379.035 2.994.044 3.378.01 2.52-.225 4.877-1.108 6.823-2.514 1.747-1.277 3.235-3.085 4.156-5.217.403-.924.67-1.931.771-2.892.18-1.723-.032-3.368-.618-4.823-.403-.984-1.01-1.914-1.748-2.697-1.386-1.86-3.272-3.198-5.386-3.957-.984-.354-2.118-.586-3.248-.658-.364-.023-1.83-.031-2.156-.007zm.027 1.808c.302.018.378.025.47.058 1.17.42 2.078 1.158 2.79 2.228.374.557.594 1.209.594 1.891 0 .682-.22 1.334-.594 1.891-.712 1.07-1.62 1.808-2.79 2.228-.092.033-.168.04-.47.058-.302-.018-.378-.025-.47-.058-1.17-.42-2.078-1.158-2.79-2.228-.374-.557-.594-1.209-.594-1.891 0-.682.22-1.334.594-1.891.712-1.07 1.62-1.808 2.79-2.228.092-.033.168-.04.47-.058z"/>
          </svg>
        )
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for better development experience and code reliability",
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>
        )
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development and consistent design",
        icon: (
          <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        )
      },
      {
        name: "Vue.js",
        description: "Progressive JavaScript framework for building user interfaces",
        icon: (
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
          </svg>
        )
      },
      {
        name: "Angular",
        description: "Platform for building mobile and desktop web applications",
        icon: (
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L2 4v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V4l-10-4zm6 10.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"/>
          </svg>
        )
      }
    ],
    backend: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development with event-driven architecture",
        icon: (
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.604 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
          </svg>
        )
      },
      {
        name: "Python",
        description: "Versatile programming language for backend development and data science",
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "Express.js",
        description: "Fast web application framework for Node.js with minimal overhead",
        icon: (
          <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-1.415v-5.008a1.529 1.529 0 011.895-1.415c.026.003.052.003.078.003a1.529 1.529 0 011.529 1.529v5.008a1.529 1.529 0 01-1.529 1.529c-.026 0-.052 0-.078-.003zM10.596 18.588a1.529 1.529 0 01-1.895-1.415v-5.008a1.529 1.529 0 011.895-1.415c.026.003.052.003.078.003a1.529 1.529 0 011.529 1.529v5.008a1.529 1.529 0 01-1.529 1.529c-.026 0-.052 0-.078-.003zM5.318 18.588a1.529 1.529 0 01-1.895-1.415v-5.008a1.529 1.529 0 011.895-1.415c.026.003.052.003.078.003a1.529 1.529 0 011.529 1.529v5.008a1.529 1.529 0 01-1.529 1.529c-.026 0-.052 0-.078-.003z"/>
          </svg>
        )
      },
      {
        name: "Django",
        description: "High-level Python web framework for rapid development and clean design",
        icon: (
          <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "FastAPI",
        description: "Modern Python web framework for building APIs with automatic documentation",
        icon: (
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      }
    ],
    database: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database system with ACID compliance",
        icon: (
          <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "MongoDB",
        description: "NoSQL document database for modern applications with flexible schema",
        icon: (
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching and real-time applications",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "MySQL",
        description: "Popular open-source relational database management system",
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      },
      {
        name: "SQL Server",
        description: "Enterprise-grade relational database with advanced analytics capabilities",
        icon: (
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          </svg>
        )
      }
    ]
  };

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8" id="tech-stack">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          Our Technology Stack
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Explore our comprehensive suite of technologies that power modern software solutions with enterprise-grade reliability and performance.
        </p>
      </div>

      {/* Enhanced Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 rounded-2xl p-2 flex shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-[#00C4FF] shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Technology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies[activeTab].map((tech, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden hover:scale-105"
          >
            {/* Enhanced glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Enhanced Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  {tech.icon}
                </div>
              </div>

              {/* Enhanced Content */}
              <h3 className="text-xl font-bold text-[#1F3A56] mb-3 group-hover:text-[#00F8B4] transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
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
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00F8B4]/20 relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#1F3A56] mb-4">
              Continuously Evolving
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our technology stack is constantly updated to include the latest tools and frameworks, ensuring we deliver cutting-edge solutions that meet modern business requirements and industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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
  );
};

export default TechnologyStack; 