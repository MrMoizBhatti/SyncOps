"use client";
import React from "react";

const WhyChooseCloud = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Icon */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1F3A56] mb-6">
                Why Choose Our Cloud Expertise?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our deep expertise across multiple cloud platforms enables us to design and implement solutions that maximize performance, minimize costs, and ensure your applications are always available and secure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3A56] mb-2">Multi-Cloud Strategy</h4>
                    <p className="text-gray-600 text-sm">Avoid vendor lock-in and optimize costs with our multi-cloud approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00C4FF] to-[#00F8B4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3A56] mb-2">Enterprise Security</h4>
                    <p className="text-gray-600 text-sm">Bank-level security with compliance for SOC2, GDPR, and HIPAA.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3A56] mb-2">Auto-Scaling</h4>
                    <p className="text-gray-600 text-sm">Dynamic resource allocation that scales with your application demands.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00C4FF] to-[#00F8B4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3A56] mb-2">24/7 Monitoring</h4>
                    <p className="text-gray-600 text-sm">Proactive monitoring and alerting to ensure optimal performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
};

export default WhyChooseCloud; 