"use client";
import React, { useState, useEffect } from "react";

const TrustedMetrics = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    retention: 0,
    support: 0
  });

  const targetCounts = {
    projects: 50,
    retention: 98,
    support: 24
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate counts when component comes into view
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepValue = {
            projects: targetCounts.projects / steps,
            retention: targetCounts.retention / steps,
            support: targetCounts.support / steps
          };

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCounts({
              projects: Math.min(Math.floor(stepValue.projects * currentStep), targetCounts.projects),
              retention: Math.min(Math.floor(stepValue.retention * currentStep), targetCounts.retention),
              support: Math.min(Math.floor(stepValue.support * currentStep), targetCounts.support)
            });

            if (currentStep >= steps) {
              clearInterval(interval);
            }
          }, duration / steps);

          observer.unobserve(entry.target);
        }
      });
    });

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      number: counts.projects,
      suffix: "+",
      title: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      number: counts.retention,
      suffix: "%",
      title: "Client Retention",
      description: "Consistently high satisfaction rates from our clients"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      number: counts.support,
      suffix: "/7",
      title: "Support Available",
      description: "Round-the-clock support for all our solutions"
    }
  ];

  return (
    <div id="metrics-section" className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our track record speaks for itself. Here are the numbers that define our success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden hover:scale-105"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto">
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] group-hover:text-[#00B894] transition-colors duration-300">
                  {metric.number}
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-[#00B894]">
                  {metric.suffix}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                {metric.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>

            {/* Floating accent elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedMetrics; 