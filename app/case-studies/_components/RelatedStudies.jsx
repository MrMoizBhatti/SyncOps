"use client";

import React, { useState } from "react";
import SafeLink from "../../components/ui/SafeLink";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import ImageModal from "./ImageModal";
import { StaggerWrapper } from "../../components/InViewWrapper";
import InViewWrapper from "../../components/InViewWrapper";

const RelatedCaseStudies = ({ caseStudies }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/50 to-white py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Explore More Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped other businesses achieve their goals and
            transform their digital presence.
          </p>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mt-6 rounded-full"></div>
        </InViewWrapper>
        
        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" stagger={0.15}>
          {caseStudies.map((study, index) => (
            <div key={index} className="flex h-full">
              <SafeLink href={study.link || "#"} className="block group w-full flex flex-col">
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-brand-teal hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:scale-[1.03] relative">
                  {/* Industry badge */}
                  {study.industry && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-brand text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {study.industry}
                    </div>
                  )}
                  
                  <div 
                    className="relative cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage({
                        src: study.image,
                        alt: `${study.title} - ${study.industry} case study by SyncOps. ${study.description}`,
                        title: study.title
                      });
                    }}
                  >
                    <Image
                      src={study.image}
                      alt={`${study.title} - ${study.industry} case study by SyncOps. ${study.description}`}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-125"
                      style={{ objectPosition: 'center 20%' }}
                      loading="lazy"
                    />
                    {/* Enhanced overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white font-semibold text-xs bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 flex items-center gap-2">
                        Click to enlarge
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{study.description}</p>
                    <div className="flex items-center text-brand-teal font-semibold mt-auto group-hover:text-brand-aqua transition-colors">
                      Read Case Study
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </SafeLink>
            </div>
          ))}
        </StaggerWrapper>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
        />
      )}
    </section>
  );
};

export default RelatedCaseStudies;
