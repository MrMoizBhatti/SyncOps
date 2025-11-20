"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Share2, CheckCircle2, Gift } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Share a Referral",
      description: "Submit a lead for a prospective client or introduce qualified talent who aligns with our open roles.",
      icon: Share2,
      color: "from-brand-aqua to-brand-teal"
    },
    {
      number: "2",
      title: "We Qualify and Engage",
      description: "Our team reviews the referral, schedules discovery or interviews, and manages the process end‑to‑end.",
      icon: CheckCircle2,
      color: "from-brand-teal to-brand-aqua"
    },
    {
      number: "3",
      title: "You Get Rewarded",
      description: "Receive cash rewards once a referred client signs or a referred hire completes onboarding.",
      icon: Gift,
      color: "from-brand-aqua to-brand-teal"
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-brand-card to-gray-900 py-16 overflow-hidden" aria-label="How it works section">
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
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <motion.p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Simple three-step process to start earning rewards
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(16 + i * 2)}
                className="glass rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white w-8 h-8" aria-hidden="true" />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

