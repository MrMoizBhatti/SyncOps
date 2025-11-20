"use client";
import { useState } from 'react';
import { FaRocket, FaBrain, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import SafeLink from '../../components/ui/SafeLink';
import { motion } from 'framer-motion';
import { fadeUp, stagger, springSoft } from '../../../lib/motionConfig';
import { useMagneticHover } from '../../../hooks/useMagneticHover';

const trustChips = [
  {
    icon: <FaCheckCircle className="text-brand-aqua" />,
    text: "AI-First Solutions"
  },
  {
    icon: <FaBrain className="text-brand-teal" />,
    text: "ML-Powered Insights"
  },
  {
    icon: <FaChartLine className="text-brand-aqua" />,
    text: "Data-Driven Results"
  }
];

export default function AIHero() {
  const [showDemo, setShowDemo] = useState(false);
  const primaryMag = useMagneticHover(10);
  const secondaryMag = useMagneticHover(8);

  return (
    <section className="relative overflow-hidden" aria-label="AI Division hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" aria-hidden="true"></div>

      {/* Soft Particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-10 left-1/4 w-64 h-64 bg-brand-aqua/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float-slower" />
      </div>

      {/* Gradient Aura */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-aqua/20 via-brand-teal/10 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24">
        <motion.div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center" {...stagger.container(0.08)}>
          {/* Left Side - Content */}
          <div className="text-white">
            <div>
              <motion.h1 className="text-display font-bold leading-tight mb-6 text-balance" variants={fadeUp(20)}>
                Transforming Business with{" "}
                <span className="gradient-text">
                  AI-Powered Innovation
                </span>
              </motion.h1>
            </div>

            <motion.p className="text-body-xl text-gray-300 mb-8 max-w-2xl leading-relaxed" variants={fadeUp(24)}>
              Our AI Division delivers cutting-edge machine learning solutions, predictive analytics, and intelligent automation to transform your business operations and drive measurable growth.
            </motion.p>

            {/* Enhanced CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={fadeUp(28)}>
              <motion.div
                ref={primaryMag.ref}
                onMouseMove={primaryMag.onMouseMove}
                onMouseLeave={primaryMag.onMouseLeave}
                style={{ x: primaryMag.mx, y: primaryMag.my }}
                transition={springSoft}
              >
                <SafeLink
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
                  aria-label="Start your AI transformation journey"
                >
                  <FaRocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                  Start AI Transformation
                </SafeLink>
              </motion.div>

              <motion.div
                ref={secondaryMag.ref}
                onMouseMove={secondaryMag.onMouseMove}
                onMouseLeave={secondaryMag.onMouseLeave}
                style={{ x: secondaryMag.mx, y: secondaryMag.my }}
                transition={springSoft}
              >
                <SafeLink
                  href="#capabilities"
                  className="btn-secondary inline-flex items-center justify-center focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
                  aria-label="Explore our AI capabilities"
                >
                  <FaBrain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Explore Capabilities
                </SafeLink>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Chips */}
            <motion.div className="flex flex-wrap gap-3" {...stagger.container(0.06)} role="list">
              {trustChips.map((chip, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(16)}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200 border border-white/20 hover:bg-white/20 hover:border-brand-teal/30 transition-all duration-300"
                  role="listitem"
                  aria-label={chip.text}
                >
                  <span className="text-base" aria-hidden="true">{chip.icon}</span>
                  {chip.text}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Enhanced Visual Element */}
          <motion.div className="relative" variants={fadeUp(20)}>
            <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300 will-change-transform" aria-label="AI capabilities showcase">
              {/* AI Demo Visual */}
              <div className="w-full h-64 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-2xl flex items-center justify-center relative group cursor-pointer overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-aqua/10 to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* AI Brain Icon */}
                <div className="text-6xl animate-pulse">
                  <FaBrain className="text-brand-aqua" aria-hidden="true" />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-aqua rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-brand-aqua rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Subtle Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></div>
              </div>

              <div className="text-center mt-4">
                <p className="text-white text-sm font-medium">AI-Powered Analytics & Automation</p>
                <p className="text-gray-400 text-xs mt-1">See our AI capabilities in action</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-brand rounded-full opacity-60 animate-pulse" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-brand-reverse rounded-full opacity-40 animate-pulse delay-1000" aria-hidden="true"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
