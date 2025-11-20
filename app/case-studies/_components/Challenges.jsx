"use client";
import React from "react";
import { AlertTriangle, Clock, TrendingDown, Users, Shield } from "lucide-react";
import { StaggerWrapper } from "../../components/InViewWrapper";

const ChallengeSection = ({ challenges }) => {
  const iconMap = {
    AlertTriangle: AlertTriangle,
    Clock: Clock,
    TrendingDown: TrendingDown,
    Users: Users,
    Shield: Shield,
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" aria-labelledby="challenges-heading">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 id="challenges-heading" className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Challenges
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </div>
        
        <StaggerWrapper className="max-w-5xl mx-auto space-y-6" stagger={0.15}>
          {challenges.map((challenge, index) => {
            const IconComponent = iconMap[challenge.icon] || AlertTriangle;
            return (
              <article
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-brand rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors" itemProp="name">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg" itemProp="description">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ChallengeSection;
