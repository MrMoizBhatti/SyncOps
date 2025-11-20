"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { FaRocket, FaCheckCircle } from 'react-icons/fa';

const benefits = [
  "Free AI Readiness Assessment",
  "Custom Solution Proposal",
  "No Commitment Required",
  "Expert AI Consultation"
];

export default function AICTA() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center" aria-label="Call to action section">
      <motion.div {...stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-white mb-6" variants={fadeUp(16)}>
          Ready to Transform Your Business with <span className="gradient-text">AI</span>?
        </motion.h2>
        
        <motion.p className="text-body-xl text-gray-300 mb-8 max-w-2xl mx-auto" variants={fadeUp(20)}>
          Schedule a free consultation and discover how AI can drive measurable results for your organization.
        </motion.p>

        {/* Benefits List */}
        <motion.div className="grid sm:grid-cols-2 gap-4 mb-10" variants={fadeUp(22)} role="list">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200"
              variants={fadeUp(16)}
              role="listitem"
            >
              <FaCheckCircle className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
              {benefit}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeUp(24)}>
          <SafeLink
            href="/contact"
            className="btn-primary inline-flex items-center justify-center text-lg px-10 py-5 focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
            aria-label="Schedule a free AI consultation"
          >
            <FaRocket className="w-5 h-5 mr-2" aria-hidden="true" />
            Schedule Free AI Consultation
          </SafeLink>
        </motion.div>

        <motion.p className="text-sm text-gray-400 mt-6" variants={fadeUp(26)}>
          No credit card required • Response within 24 hours
        </motion.p>
      </motion.div>
    </div>
  );
}
