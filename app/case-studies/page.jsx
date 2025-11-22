"use client";
import React, { useEffect } from "react";
import SafeLink from "../components/ui/SafeLink";
import Image from "next/image";
import { ArrowRight, Briefcase, TrendingUp, Users, Zap, Star, Award, Target, Clock, CheckCircle, Quote } from "lucide-react";
import Testimonial from "../components/Testimonial";
import { motion } from "framer-motion";

// SEO Metadata - Note: In Next.js 15, metadata must be in a separate file or use generateMetadata
// For client components, we'll add structured data via script tags

// This would typically come from a CMS or API
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
  {
    id: "wvd",
    title: "Warehouse Visualization Dashboard: AI-Powered Operational Intelligence",
    description:
      "Enterprise-grade warehouse visualization dashboard that maps bins and SKUs, monitors flows, and provides AI-powered slotting and risk detection",
    image: "/images/warehouse.png",
    industry: "Warehouse & Logistics",
    metrics: "Real-Time",
    metricLabel: "Visibility",
    icon: TrendingUp,
    gradient: "from-slate-500 to-gray-600",
  },
  {
    id: "studymoto",
    title: "StudyMate AI: AI-Powered Homework Help Platform",
    description:
      "Intelligent homework help platform that provides step-by-step solutions, explanations, and practice problems across 60+ subjects",
    image: "/images/studymate.png",
    industry: "Education Technology",
    metrics: "60+",
    metricLabel: "Subjects",
    icon: TrendingUp,
    gradient: "from-teal-500 to-green-600",
  },
];

// Generate structured data for SEO
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies - Success Stories | SyncOps",
    "description": "Explore SyncOps case studies showcasing successful AI-powered software solutions across healthcare, HR management, real estate, and more.",
    "url": "https://syncops.tech/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((study, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "@id": `https://syncops.tech/case-studies/${study.id}`,
          "name": study.title,
          "description": study.description,
          "image": `https://syncops.tech${study.image}`,
          "about": {
            "@type": "Thing",
            "name": study.industry
          }
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://syncops.tech/images/logo.png"
      }
    }
  };
}


export default function CaseStudiesPage() {
  useEffect(() => {
    // Add structured data to page
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.text = JSON.stringify(generateStructuredData());
    structuredDataScript.id = 'case-studies-structured-data';
    
    if (!document.getElementById('case-studies-structured-data')) {
      document.head.appendChild(structuredDataScript);
    }
    
    return () => {
      const existingStructured = document.getElementById('case-studies-structured-data');
      if (existingStructured) existingStructured.remove();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-labelledby="case-studies-heading">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-brand-aqua/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-aqua/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-brand/5 rounded-full blur-2xl"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-brand-aqua/30 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-brand-teal/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-brand/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-gradient-brand px-8 py-3 rounded-full text-white text-sm font-semibold mb-8 animate-fade-up shadow-glow">
              <Briefcase className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            
            <h1 
              id="case-studies-heading"
              className="text-display font-bold text-white mb-6 animate-fade-up stagger-1 gradient-text"
            >
              Stories of Our Transformations
            </h1>
            
            <p className="text-body-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up stagger-2">
              Discover how we've helped businesses across industries transform their digital presence
              and achieve remarkable results through innovative AI-powered technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-fade-up stagger-3">
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-brand-aqua rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">6 Industries</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-brand-teal rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-medium">50+ Projects</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm font-medium">100% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Metrics Section */}
      <section className="relative py-20 bg-white" aria-labelledby="metrics-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="metrics-heading" className="text-display-sm font-bold text-brand-navy mb-4">
              Proven Track Record
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Our success metrics speak for themselves across all industries and project types
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {[
              { icon: Target, value: "50+", label: "Projects Completed", color: "from-emerald-500 to-teal-600", ariaLabel: "500 plus projects completed" },
              { icon: Star, value: "99.5%", label: "Customer Satisfaction", color: "from-blue-500 to-cyan-600", ariaLabel: "99 percent customer satisfaction" },
              { icon: Users, value: "50+", label: "Global Presence", color: "from-purple-500 to-pink-600", ariaLabel: "50 plus global presence" },
              { icon: Award, value: "9.8", label: "Industry Rating", color: "from-orange-500 to-red-600", ariaLabel: "9.8 industry rating" }
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    aria-label={metric.ariaLabel}
                  >
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-brand-navy mb-2" aria-label={metric.value}>{metric.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-24 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-labelledby="case-studies-grid-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 border border-brand-teal/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-aqua/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gradient-brand/20 rotate-12"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="case-studies-grid-heading" className="text-display-sm font-bold text-white mb-4">
              Our Case Studies
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              Explore detailed success stories from our portfolio of transformative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10" role="list">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <motion.article
                  key={study.id}
                  role="listitem"
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SafeLink
                    href={`/case-studies/${study.id || "default"}`}
                    className="block group h-full"
                    aria-label={`Read case study: ${study.title}`}
                  >
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-700 transform group-hover:scale-[1.03] group-hover:shadow-glow-xl border border-white/10 h-full flex flex-col hover:border-brand-aqua/30">
                      
                      {/* Image Section */}
                      <div className="relative h-72 overflow-hidden flex-shrink-0">
                        <Image
                          src={study.image}
                          alt={`${study.title} - ${study.industry} case study by SyncOps. ${study.description}`}
                          width={400}
                          height={288}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: 'center 20%' }}
                          loading={index < 6 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden="true"></div>
                        
                        {/* Industry Badge */}
                        <div className="absolute top-6 left-6">
                          <span className={`inline-flex items-center bg-gradient-to-r ${study.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl backdrop-blur-sm`}>
                            <IconComponent className="w-4 h-4 mr-2" aria-hidden="true" />
                            {study.industry}
                          </span>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-25 transition-opacity duration-500" aria-hidden="true"></div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 flex flex-col flex-grow min-h-0">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-aqua transition-colors duration-300 leading-tight line-clamp-2">
                          {study.title}
                        </h3>
                        
                        <p className="text-gray-300 flex-grow leading-relaxed mb-6 text-sm line-clamp-3">
                          {study.description}
                        </p>
                        
                        {/* Enhanced CTA */}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="inline-flex items-center text-brand-aqua group-hover:text-white transition-colors duration-300 font-semibold text-sm">
                            Read Case Study
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                          </span>
                          
                          <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg" aria-hidden="true">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Decorative Elements */}
                      <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-brand rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-sm" aria-hidden="true"></div>
                      <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-brand-aqua rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-sm" aria-hidden="true"></div>
                      <div className="absolute top-1/2 -right-2 w-8 h-8 bg-brand-teal rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500" aria-hidden="true"></div>
                    </div>
                  </SafeLink>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Testimonials Section */}
      {/* <section className="relative">
       <div>
        <Testimonial />
       </div>
      </section> */}

      {/* Final Luxury CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden" aria-labelledby="cta-heading">
        {/* Background Effects - Matching FinalCTA Component */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 via-transparent to-[#00C4FF]/5" aria-hidden="true"></div>
        
        {/* Enhanced Animated Gradient Background */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full filter blur-3xl opacity-10 animate-pulse" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-brand-teal to-brand-aqua rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
        
        {/* Rotating Gradient Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-brand-aqua/3 to-brand-teal/3 rounded-full filter blur-3xl" aria-hidden="true"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-brand-aqua rounded-full opacity-60 animate-bounce" aria-hidden="true"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-brand-teal rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
        <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-brand-aqua rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
        <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-brand-teal rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
        
        <div className="relative container mx-auto px-6 lg:px-8 text-center z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-heading" className="text-display-sm font-bold text-gray-900 mb-6">
              Ready to <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-body-xl text-gray-500 mb-12 leading-relaxed">
              Join the ranks of successful companies that have revolutionized their operations 
              with our AI-powered solutions. Let's create your success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <SafeLink 
                href="/contact" 
                className="btn-primary text-lg px-12 py-4"
                aria-label="Get started today - Contact us"
              >
                Get Started Today
              </SafeLink>
              <SafeLink 
                href="/services" 
                className="btn-secondary text-lg px-12 py-4"
                aria-label="Explore our services"
              >
                Explore Services
              </SafeLink>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600" role="list">
              <div className="flex items-center" role="listitem">
                <Clock className="w-5 h-5 mr-2 text-brand-aqua" aria-hidden="true" />
                <span className="text-sm">Quick Setup</span>
              </div>
              <div className="flex items-center" role="listitem">
                <CheckCircle className="w-5 h-5 mr-2 text-brand-aqua" aria-hidden="true" />
                <span className="text-sm">Proven Results</span>
              </div>
              <div className="flex items-center" role="listitem">
                <Star className="w-5 h-5 mr-2 text-brand-aqua" aria-hidden="true" />
                <span className="text-sm">Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
