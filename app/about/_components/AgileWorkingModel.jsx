"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const steps = [
  {
    title: "Discovery",
    description: "Understanding your needs and objectives",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
    color: "from-[#00F8B4] to-[#00C4FF]",
  },
  {
    title: "Design",
    description: "Creating intuitive and scalable solutions",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    color: "from-[#00C4FF] to-[#00F8B4]",
  },
  {
    title: "Develop",
    description: "Building robust and efficient systems",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    color: "from-[#00F8B4] to-[#00C4FF]",
  },
  {
    title: "Test",
    description: "Ensuring quality and reliability",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "from-[#00C4FF] to-[#00F8B4]",
  },
  {
    title: "Deliver",
    description: "Deploying and launching your solution",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "from-[#00F8B4] to-[#00C4FF]",
  },
  {
    title: "Iterate",
    description: "Continuous improvement and optimization",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
      </svg>
    ),
    color: "from-[#00C4FF] to-[#00F8B4]",
  },
];

const AgileWorkingModel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            How We <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our agile methodology ensures efficient delivery while maintaining the highest quality standards.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-[#00F8B4]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,248,180,0.2)]">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(0,248,180,0.4)]`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#222222] mb-2 group-hover:text-[#00F8B4] transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Connecting arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <SafeLink href="/services">
            <button className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,248,180,0.4)] hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Explore Our Process
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </SafeLink>
        </div>
      </div>
    </section>
  );
};

export default AgileWorkingModel; 