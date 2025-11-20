import React from "react";
import SafeLink from "../components/ui/SafeLink";
import Image from "next/image";
import { ArrowRight, Briefcase, TrendingUp, Users, Zap, Star, Award, Target, Clock, CheckCircle, Quote } from "lucide-react";

// SEO Metadata
export const metadata = {
  title: "Case Studies - Success Stories | SyncOps Software Development",
  description:
    "Explore SyncOps case studies showcasing successful AI-powered software solutions across healthcare, HR management, real estate, and more. See how we've helped businesses transform their operations with cutting-edge technology.",
  keywords: [
    "case studies",
    "software development case studies",
    "AI solutions case studies",
    "healthcare software",
    "HR management software",
    "real estate technology",
    "SyncOps success stories",
    "software development portfolio",
    "enterprise software solutions",
    "digital transformation",
  ].join(", "),
  openGraph: {
    title: "Case Studies - Success Stories | SyncOps",
    description:
      "Explore SyncOps case studies showcasing successful AI-powered software solutions. See how we've helped businesses transform their operations.",
    type: "website",
    url: "https://syncops.tech/case-studies",
    siteName: "SyncOps",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Success Stories | SyncOps",
    description:
      "Explore SyncOps case studies showcasing successful AI-powered software solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://syncops.tech/case-studies",
  },
};

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

export default function CaseStudiesPage() {
  return (
    <div className="bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
            
            <h1 className="text-display font-bold text-white mb-6 animate-fade-up stagger-1 gradient-text">
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
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-sm font-bold text-brand-navy mb-4">
              Proven Track Record
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Our success metrics speak for themselves across all industries and project types
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, value: "500+", label: "Projects Completed", color: "from-emerald-500 to-teal-600" },
              { icon: Star, value: "99.0%", label: "Customer Satisfaction", color: "from-blue-500 to-cyan-600" },
              { icon: Users, value: "50+", label: "Global Presence", color: "from-purple-500 to-pink-600" },
              { icon: Award, value: "9.2", label: "Industry Rating", color: "from-orange-500 to-red-600" }
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-navy mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-24 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 border border-brand-teal/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-aqua/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gradient-brand/20 rotate-12"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-700 transform group-hover:scale-[1.03] group-hover:shadow-glow-xl border border-white/10 h-full flex flex-col animate-fade-up hover:border-brand-aqua/30"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    
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
                    <div className="absolute top-1/2 -right-2 w-8 h-8 bg-brand-teal rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
                  </div>
                </SafeLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Testimonials Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-sm font-bold text-brand-navy mb-4">
              What Our Clients Say
                  </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the leaders who trusted us with their digital transformation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-navy to-brand-card rounded-3xl p-12 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-aqua/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-brand-aqua mb-6" />
                <blockquote className="text-xl text-white leading-relaxed mb-8 font-medium">
                  "SyncOps transformed our entire digital infrastructure. Their AI-powered solutions 
                  increased our operational efficiency by 300% and reduced costs by 40%. The team's 
                  expertise and dedication exceeded all our expectations."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">John Smith</div>
                    <div className="text-gray-300">CEO, TechCorp Solutions</div>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
      </section>

      {/* Final Luxury CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-brand-navy via-brand-card to-brand-navy overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-sm font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-xl text-gray-300 mb-12 leading-relaxed">
              Join the ranks of successful companies that have revolutionized their operations 
              with our AI-powered solutions. Let's create your success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <SafeLink href="/contact" className="btn-primary text-lg px-12 py-4">
                Get Started Today
              </SafeLink>
              <SafeLink href="/services" className="btn-secondary text-lg px-12 py-4">
                Explore Services
            </SafeLink>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brand-aqua" />
                <span className="text-sm">Quick Setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-brand-aqua" />
                <span className="text-sm">Proven Results</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-brand-aqua" />
                <span className="text-sm">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
