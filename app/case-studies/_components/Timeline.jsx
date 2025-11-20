"use client";
import React from "react";
import { CheckCircle2, Clock, Code, Rocket, Users, Target } from "lucide-react";
import { StaggerWrapper } from "../../components/InViewWrapper";
import InViewWrapper from "../../components/InViewWrapper";

const TimelineSection = ({ duration, team }) => {
  // Default timeline phases if not provided
  const phases = [
    {
      phase: "Discovery & Planning",
      duration: "2 weeks",
      description: "Understanding requirements, defining scope, and creating project roadmap",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Design & Architecture",
      duration: "3 weeks",
      description: "Creating system architecture, UI/UX design, and technical specifications",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Development",
      duration: duration || "5 months",
      description: "Building core features, implementing AI algorithms, and developing integrations",
      icon: Rocket,
      color: "from-emerald-500 to-teal-500"
    },
    {
      phase: "Testing & QA",
      duration: "1 month",
      description: "Comprehensive testing, bug fixes, performance optimization, and security audits",
      icon: CheckCircle2,
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Deployment & Launch",
      duration: "2 weeks",
      description: "Production deployment, user training, documentation, and go-live support",
      icon: Users,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden" aria-labelledby="timeline-heading">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-12">
          <h2 id="timeline-heading" className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Implementation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A structured approach to delivering exceptional results
          </p>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mt-6 rounded-full"></div>
        </InViewWrapper>

        <div className="max-w-5xl mx-auto">
          <StaggerWrapper className="space-y-6" stagger={0.15}>
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group"
                >
                  {/* Timeline line (hidden on mobile) */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-14 w-0.5 h-16 bg-gradient-to-b from-brand-teal/30 to-brand-aqua/30"></div>
                  )}
                  
                  {/* Icon/Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-brand-navy shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 w-full md:text-left bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group-hover:border-brand-teal`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                        {phase.phase}
                      </h3>
                      <span className="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerWrapper>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

