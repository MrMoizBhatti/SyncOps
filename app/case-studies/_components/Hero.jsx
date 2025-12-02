"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Calendar, ArrowRight, Clock, Users } from "lucide-react";
import SafeLink from "../../components/ui/SafeLink";
import ImageModal from "./ImageModal";
import InViewWrapper from "../../components/InViewWrapper";

const CaseStudyHero = ({ title, subtitle, image, industry, duration, team }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden" style={{ marginTop: '0', zIndex: 1, scrollMarginTop: '120px' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-aqua/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <InViewWrapper animation="fadeUp" delay={0.1}>
              {/* Industry Badge */}
              <div className="inline-flex items-center bg-gradient-brand px-4 py-2 rounded-full text-white text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Briefcase className="w-4 h-4 mr-2" />
                {industry}
              </div>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.2}>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-navy mb-6">
                {title}
              </h1>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.3}>
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                {subtitle}
              </p>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.4}>
              {/* Project Details - Enhanced Stats */}
              <div className="flex gap-8 mb-10">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-brand rounded-lg p-2">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-navy">{duration}</div>
                    <div className="text-xs text-gray-500 font-medium">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-brand rounded-lg p-2">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-navy">{team}</div>
                    <div className="text-xs text-gray-500 font-medium">Team Size</div>
                  </div>
                </div>
              </div>
            </InViewWrapper>

            <InViewWrapper animation="fadeUp" delay={0.5}>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SafeLink
                  href="/contact?type=demo&source=case-study"
                  className="inline-flex items-center justify-center bg-gradient-brand text-white px-8 py-4 rounded-lg font-semibold text-base hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
                <SafeLink
                  href="/contact?type=quote&source=case-study"
                  className="inline-flex items-center justify-center bg-white text-brand-navy border-2 border-brand-navy px-8 py-4 rounded-lg font-semibold text-base hover:bg-brand-navy hover:text-white hover:shadow-lg transition-all duration-300 group"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </InViewWrapper>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2">
            <InViewWrapper animation="scaleIn" delay={0.3}>
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer group relative"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src={image}
                  alt={`${title} - ${industry} case study by SyncOps. ${subtitle}`}
                  width={600}
                  height={400}
                  className="w-full h-[450px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {/* Enhanced overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white font-semibold text-sm bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/30">
                    Click to enlarge
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </InViewWrapper>
          </div>

          {/* Image Modal */}
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageSrc={image}
            imageAlt={`${title} - ${industry} case study by SyncOps. ${subtitle}`}
            title={title}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;

