"use client";
import React from "react";
import { TrendingUp, CheckCircle, Award } from "lucide-react";
import { StaggerWrapper } from "../../components/InViewWrapper";
import { useAnimatedCounter } from "./useAnimatedCounter";

const ResultsSection = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }

  const icons = [TrendingUp, CheckCircle, Award];

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy overflow-hidden" aria-labelledby="results-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-aqua/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 id="results-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Outcomes & Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Measurable impact and success metrics achieved through our solution
          </p>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* KPI Banner */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto" stagger={0.2}>
          {results.map((result, index) => {
            const IconComponent = icons[index % icons.length];
            const { count, ref } = useAnimatedCounter(result.value, 2000);
            
            return (
              <div
                key={index}
                ref={ref}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 hover:shadow-glow transition-all duration-500 hover:scale-110 text-center group"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-2xl mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-brand transition-all duration-500" itemProp="value">
                  {count}
                </div>
                <div className="text-lg text-gray-200 font-semibold uppercase tracking-wide" itemProp="name">
                  {result.label}
                </div>
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-teal/0 via-brand-aqua/50 to-brand-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ResultsSection;
