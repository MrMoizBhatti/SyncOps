"use client";
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import { stagger, viewport } from '../../../lib/motionConfig';
import AIHero from './AIHero';
import AIOfferings from './AIOfferings';
import AITechnologies from './AITechnologies';
import AICapabilities from './AICapabilities';
import AICaseStudies from './AICaseStudies';
import AIProcess from './AIProcess';
import AICTA from './AICTA';

export default function AIDivisionClient() {
  return (
    <ParallaxProvider>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-brand-navy text-white">
          <motion.div {...stagger.container(0.06)}>
            <AIHero />
          </motion.div>
        </section>

        {/* AI Offerings Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AIOfferings />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
        </section>

        {/* AI Capabilities Section */}
        <section className="bg-brand-navy text-white py-12 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AICapabilities />
          </motion.div>
        </section>

        {/* AI Technologies Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AITechnologies />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
        </section>

        {/* AI Process Section */}
        <section className="bg-brand-navy text-white py-12 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AIProcess />
          </motion.div>
        </section>

        {/* AI Case Studies Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AICaseStudies />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy py-12 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <AICTA />
          </motion.div>
        </section>
      </main>
    </ParallaxProvider>
  );
}


