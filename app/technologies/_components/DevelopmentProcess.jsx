"use client";
import React from "react";

const DevelopmentProcess = () => {
  const processes = [
    {
      title: "Design",
      icon: "🎨",
      description: "User-centered design approach",
      steps: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "UI/UX Design",
        "Design System Creation"
      ]
    },
    {
      title: "Develop",
      icon: "⚡",
      description: "Agile development methodology",
      steps: [
        "Sprint Planning",
        "Code Development",
        "Code Review",
        "Continuous Integration"
      ]
    },
    {
      title: "Test",
      icon: "🔍",
      description: "Comprehensive testing strategy",
      steps: [
        "Unit Testing",
        "Integration Testing",
        "User Acceptance Testing",
        "Performance Testing"
      ]
    },
    {
      title: "Deploy",
      icon: "🚀",
      description: "Automated deployment pipeline",
      steps: [
        "Environment Setup",
        "Automated Deployment",
        "Monitoring & Alerts",
        "Post-deployment Support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0B0A1C] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00F8B4]">Development Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Approach to
            <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"> Software Development</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Learn how we turn ideas into reliable and effective software solutions through our proven development methodology.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 relative overflow-hidden hover:scale-105"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-[#00F8B4] transition-colors duration-300">
                  {process.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center mb-6">
                  {process.description}
                </p>

                {/* Steps */}
                <ul className="space-y-3">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00F8B4] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden shadow-xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Proven Methodology
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Our development process ensures high-quality, scalable solutions delivered on time and within budget, while maintaining flexibility to adapt to changing requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  Agile Methodology
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Quality Assurance
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  Continuous Delivery
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Client Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
