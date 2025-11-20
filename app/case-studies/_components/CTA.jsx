"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight, Calendar, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
import InViewWrapper from "../../components/InViewWrapper";

const CaseStudyCTA = ({ title, industry }) => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-brand-navy via-brand-card to-brand-navy overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-teal/10 via-brand-aqua/10 to-brand-teal/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-brand-aqua/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <InViewWrapper animation="fadeUp" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-aqua" />
              <span className="text-sm text-white/90 font-medium">Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <span className="bg-gradient-brand bg-clip-text text-transparent">{industry}</span> Operations?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how we can create a similar solution for your business. 
              Get a personalized consultation and see how our AI-powered solutions can drive your success.
            </p>
          </InViewWrapper>

          <InViewWrapper animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <SafeLink
                href="/contact?type=demo&source=case-study"
                className="inline-flex items-center justify-center bg-gradient-brand text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-110 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Schedule a Demo
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </SafeLink>
              <SafeLink
                href="/contact?type=quote&source=case-study"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-110 group"
              >
                <MessageSquare className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Get a Quote
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </SafeLink>
            </div>
          </InViewWrapper>

          <InViewWrapper animation="fadeUp" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle2, text: "Free Consultation", delay: "0s" },
                { icon: Sparkles, text: "Custom Solutions", delay: "0.2s" },
                { icon: CheckCircle2, text: "Expert Support", delay: "0.4s" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 font-semibold text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </InViewWrapper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;

