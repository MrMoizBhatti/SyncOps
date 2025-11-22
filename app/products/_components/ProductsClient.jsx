"use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { stagger, viewport } from '../../../lib/motionConfig';
import ProductsHero from './ProductsHero';
import FeaturedProducts from './FeaturedProducts';
import ProductUseCases from './ProductUseCases';
import ProductIntegrations from './ProductIntegrations';
import ProductComparison from './ProductComparison';
import ProductSocialProof from './ProductSocialProof';
import MetricsBar from '../../components/MetricsBar';
import TechnologiesWeUse from '../../components/TechnologiesWeUse';
import FinalCTA from '../../components/FinalCTA';

export default function ProductsClient() {
  return (
    <ParallaxProvider>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-brand-navy text-white">
          <motion.div {...stagger.container(0.06)}>
            <ProductsHero />
          </motion.div>
        </section>

        {/* Metrics (light) */}
        <section className="bg-white py-16">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <MetricsBar />
          </motion.div>
        </section>

        {/* Featured Products (light gradient) */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <FeaturedProducts />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
        </section>

        {/* Use Cases (light) */}
        <section className="bg-white py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <ProductUseCases />
          </motion.div>
        </section>

        {/* Integrations (light gray) */}
        <section className="bg-gray-50 py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <ProductIntegrations />
          </motion.div>
        </section>

        {/* Comparison (dark) */}
        <section className="bg-brand-navy text-white py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <ProductComparison />
          </motion.div>
        </section>

        {/* Social Proof (light) */}
        <section className="bg-white py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <ProductSocialProof />
          </motion.div>
        </section>

        {/* Technologies (light) */}
        <section className="bg-gray-50 py-20">
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <TechnologiesWeUse />
          </motion.div>
        </section>

        {/* Final CTA (brand gradient) */}
        <section>
          <motion.div initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
            <FinalCTA />
          </motion.div>
        </section>
      </main>
    </ParallaxProvider>
  );
}


