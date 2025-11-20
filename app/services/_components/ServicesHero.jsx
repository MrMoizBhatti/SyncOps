"use client";
import { useState } from 'react';
import { FaRocket, FaCog, FaChartLine, FaUsers, FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';
import SafeLink from '../../components/ui/SafeLink';

const serviceFeatures = [
  {
    icon: <FaRocket className="text-brand-aqua" />,
    title: "Rapid Development",
    description: "MVP in 30 days"
  },
  {
    icon: <FaCog className="text-brand-teal" />,
    title: "Custom Solutions",
    description: "Tailored to your needs"
  },
  {
    icon: <FaChartLine className="text-brand-aqua" />,
    title: "Scalable Architecture",
    description: "Grows with your business"
  },
  {
    icon: <FaUsers className="text-brand-teal" />,
    title: "Expert Team",
    description: "Senior developers"
  }
];

const trustIndicators = [
  "500+ Projects Delivered",
  "99.8% Client Satisfaction",
  "24/7 Support Available",
  "Enterprise-Grade Security"
];

export default function ServicesHero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-brand-teal/20 to-brand-aqua/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-aqua rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-brand-teal rounded-full opacity-40 animate-bounce delay-500"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-brand-aqua rounded-full opacity-50 animate-bounce delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 border border-brand-aqua/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-brand-aqua rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-aqua">Professional Services</span>
            </div>
            
            <h1 className="text-display font-bold leading-tight mb-6 text-balance">
              Transform Your Vision Into{" "}
              <span className="gradient-text">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-body-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              From concept to deployment, we deliver comprehensive software solutions that drive growth, enhance efficiency, and exceed expectations.
            </p>
            
            {/* Service Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 hover:border-brand-teal/30 transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{feature.title}</div>
                    <div className="text-xs text-gray-400">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SafeLink
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
              >
                <FaRocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Project
                <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </SafeLink>
              
              <button
                onClick={() => setShowVideo(true)}
                className="btn-secondary inline-flex items-center justify-center group"
              >
                <FaPlay className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Process
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 glass rounded-full text-sm text-gray-200 border border-white/20 hover:bg-white/20 hover:border-brand-aqua/30 transition-all duration-300"
                >
                  <FaCheckCircle className="text-brand-aqua text-xs" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Interactive Service Showcase */}
          <div className="relative">
            <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300">
              {/* Service Process Visualization */}
              {!showVideo ? (
                <div className="space-y-6">
                  {/* Process Steps */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Our Service Process</h3>
                    <p className="text-gray-400 text-sm">From consultation to deployment</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { step: "01", title: "Discovery & Planning", color: "from-brand-aqua to-brand-teal" },
                      { step: "02", title: "Design & Architecture", color: "from-brand-teal to-brand-aqua" },
                      { step: "03", title: "Development & Testing", color: "from-brand-aqua to-brand-teal" },
                      { step: "04", title: "Deployment & Support", color: "from-brand-teal to-brand-aqua" }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-brand-teal/30 transition-all duration-300 group"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-gray-400 text-sm">Professional execution</div>
                        </div>
                        <FaArrowRight className="text-brand-aqua group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full h-64 bg-black rounded-2xl flex items-center justify-center">
                  <iframe
                    src="/videos/hero_video.mp4?autoplay=1&muted=1&loop=1&controls=0"
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    title="Service Process Demo"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              
              <div className="text-center mt-6">
                <p className="text-white text-sm font-medium">Service Excellence</p>
                <p className="text-gray-400 text-xs mt-1">Proven methodology, exceptional results</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-brand rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-brand-reverse rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-brand-aqua rounded-full opacity-50 animate-bounce delay-500"></div>
          </div>
        </div>
        
        {/* Service Categories Preview */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm mb-8">Comprehensive service offerings</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Custom Development",
              "Cloud Solutions", 
              "AI Integration",
              "DevOps & Automation"
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-4 glass rounded-xl border border-white/10 hover:border-brand-teal/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FaCog className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
