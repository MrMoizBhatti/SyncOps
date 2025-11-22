"use client";
import React from "react";
import SafeLink from "./ui/SafeLink";
import Image from "next/image";
import { ArrowRight, TrendingUp, Clock, Briefcase } from "lucide-react";

const caseStudies = [
  {
    id: "geopulse",
    title: "Building GeoPulse: Community Data Intelligence Platform",
    description:
      "Creating a privacy-first, scalable platform for community data collection and analysis, transforming how organizations understand and serve their communities",
    image: "/images/GeoPluse.png",
    industry: "Community Intelligence",
    metrics: "78.5%",
    metricLabel: "Response Rate",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "syncpeople",
    title: "AI-Powered SyncPeople HR Management Platform",
    description:
      "Comprehensive AI-driven HR management system that streamlines workforce operations, automates manual processes, and empowers every role with intelligent insights",
    image: "/images/syncpeople.png",
    industry: "HR Management",
    metrics: "70%",
    metricLabel: "Time Saved",
    icon: Clock,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "medimind",
    title: "MediMind AI: AI-Powered Medical Assistant Platform",
    description:
      "Intelligent medical assistant that transforms clinical workflows by reducing charting time by 50%, automating ICD-10 suggestions, and generating AI-drafted prescriptions",
    image: "/images/medmindai.png",
    industry: "Healthcare",
    metrics: "50%",
    metricLabel: "Time Reduction",
    icon: Clock,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "synciq",
    title: "SyncIQ: AI-Powered Operational Intelligence Platform",
    description:
      "Enterprise-grade AI SaaS platform that automates audits, provides real-time risk analytics, and delivers machine learning insights for operational intelligence",
    image: "/images/syncIq.png",
    industry: "Operational Intelligence",
    metrics: "85%",
    metricLabel: "Time Reduction",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "smartproperty",
    title: "SmartProperty AI: AI-Powered Real Estate Intelligence Platform",
    description:
      "Intelligent real estate platform that uses AI to help users find, analyze, and secure properties with real-time predictions and blockchain verification",
    image: "/images/smartproperty.png",
    industry: "Real Estate",
    metrics: "10s",
    metricLabel: "Valuation Time",
    icon: Clock,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "resume-ai",
    title: "FitResume AI: Intelligent Resume Builder Platform",
    description:
      "Intelligent resume builder that helps users create professional, ATS-friendly resumes in minutes with AI content suggestions and customizable templates",
    image: "/images/fitresume.png",
    industry: "Career & Recruitment",
    metrics: "98%",
    metricLabel: "ATS Friendly",
    icon: TrendingUp,
    gradient: "from-teal-500 to-purple-600",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-brand-teal/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-aqua/20 rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-brand px-8 py-3 rounded-full text-white text-sm font-semibold mb-6 shadow-glow">
            <Briefcase className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-display-sm font-bold text-white mb-4">
            Our Case Studies
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Explore detailed success stories from our portfolio of transformative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <SafeLink
                href={`/case-studies/${study.id || "default"}`}
                key={study.id}
                className="block group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-700 transform group-hover:scale-[1.03] group-hover:shadow-glow-xl border border-white/10 h-full flex flex-col hover:border-brand-aqua/30">
                  
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.title} - ${study.industry} case study by SyncOps. ${study.description}`}
                      width={400}
                      height={288}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`inline-flex items-center bg-gradient-to-r ${study.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl backdrop-blur-sm`}>
                        <IconComponent className="w-4 h-4 mr-2" />
                        {study.industry}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-aqua transition-colors duration-300 leading-tight">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 flex-grow leading-relaxed mb-6 text-sm">
                      {study.description}
                    </p>
                    
                    {/* Enhanced CTA */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center text-brand-aqua group-hover:text-white transition-colors duration-300 font-semibold text-sm">
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Decorative Elements */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-brand rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-sm"></div>
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-brand-aqua rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-sm"></div>
                </div>
              </SafeLink>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <SafeLink 
            href="/case-studies" 
            className="inline-flex items-center btn-secondary text-lg px-8 py-4"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </SafeLink>
        </div>
      </div>
    </section>
  );
}

