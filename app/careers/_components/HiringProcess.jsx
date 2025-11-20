"use client";
import React from "react";

const HiringProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Application Review",
      description: "We carefully review your application, portfolio, and experience to understand your skills and potential fit.",
      icon: "📋",
      duration: "2-3 days"
    },
    {
      number: "02",
      title: "Initial Screening",
      description: "A brief call with our team to discuss your background, interests, and answer any questions you may have.",
      icon: "📞",
      duration: "30 min"
    },
    {
      number: "03",
      title: "Technical Assessment",
      description: "Complete a practical assessment that demonstrates your skills and problem-solving approach.",
      icon: "💻",
      duration: "2-4 hours"
    },
    {
      number: "04",
      title: "Final Interview",
      description: "Meet with key team members to discuss your role, team dynamics, and ensure mutual fit.",
      icon: "🤝",
      duration: "1-2 hours"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          How We Hire
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our streamlined hiring process is designed to be transparent, efficient, and focused on finding the perfect fit for both you and our team.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00F8B4] to-[#00C4FF] h-full opacity-30 hidden lg:block"></div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${
                index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:col-start-2'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-full border-4 border-[#0B0A1C] shadow-lg z-10 hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
              </div>

              {/* Step Card */}
              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,248,180,0.15)] relative overflow-hidden ${
                index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
              }`}>
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold text-[#0B0A1C]">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F8B4] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-2xl">{step.icon}</span>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-2xl p-8 border border-[#00F8B4]/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 mb-6">
            Our hiring process typically takes 2-3 weeks from application to offer. We'll keep you informed at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
              <span>Transparent process</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full animate-pulse"></div>
              <span>Quick feedback</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
              <span>Fair assessment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess; 