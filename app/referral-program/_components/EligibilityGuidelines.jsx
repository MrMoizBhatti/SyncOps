"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { CheckCircle2, FileText } from 'lucide-react';

export default function EligibilityGuidelines() {
  const eligibility = [
    "Referral must be net‑new to SyncOps.",
    "Rewards apply after signed deal or completed hire.",
    "Self‑referrals are allowed and eligible.",
  ];

  const guidelines = [
    "Submit details and consent to connect both parties.",
    "Rewards are paid within 30 days of qualifying events.",
    "We reserve the right to update terms with notice.",
  ];

  return (
    <section className="relative bg-gradient-to-bl from-brand-navy via-gray-900 to-brand-card py-16 overflow-hidden" aria-label="Eligibility and guidelines section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-aqua/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.06)}
        >
          <motion.h2 className="text-display-sm font-bold text-white mb-4" variants={fadeUp(16)}>
            Eligibility & <span className="gradient-text">Guidelines</span>
          </motion.h2>
          <motion.p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Understand the requirements and rules for our referral program
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          <motion.div 
            className="glass rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-aqua/50 transition-all duration-300 group"
            variants={fadeUp(16)}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua to-brand-teal rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="text-white w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-brand-aqua">Eligibility</h3>
            </div>
            <ul className="text-gray-300 space-y-4 list-none" role="list">
              {eligibility.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.1 * i }}
                >
                  <CheckCircle2 className="text-brand-aqua w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="glass rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-300 group"
            variants={fadeUp(20)}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-aqua rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-white w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal">Guidelines</h3>
            </div>
            <ul className="text-gray-300 space-y-4 list-none" role="list">
              {guidelines.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.1 * i }}
                >
                  <FileText className="text-brand-teal w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

