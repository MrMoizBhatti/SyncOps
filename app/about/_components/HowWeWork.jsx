"use client";
import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Discovery",
      description: "Understanding your business needs and objectives",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Design",
      description: "Creating intuitive and scalable architecture",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Develop",
      description: "Building robust and efficient solutions",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Test",
      description: "Ensuring quality and reliability",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Deliver",
      description: "Deploying and launching your solution",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Iterate",
      description: "Continuous improvement and optimization",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00B894]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our proven development process ensures quality, transparency, and successful delivery of every project.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                  {/* Glowing ring */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00B894] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Floating accent elements */}
            <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse opacity-60`}></div>
            <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r ${step.gradient} rounded-full animate-bounce opacity-50`}></div>
          </div>
        ))}
      </div>

      {/* Process Flow Visual */}
      <div className="mt-16 hidden lg:block">
        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-30 transform -translate-y-1/2"></div>
          
          {/* Flow Dots */}
          <div className="flex justify-between items-center relative z-10">
            {steps.map((_, index) => (
              <div key={index} className="w-4 h-4 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00B894]/20">
          <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
            Agile & Transparent
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We follow agile methodologies with regular check-ins, transparent communication, and continuous feedback to ensure your project stays on track and exceeds expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              Weekly Updates
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              Real-time Collaboration
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              Quality Assurance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork; 