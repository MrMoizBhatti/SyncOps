"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { DollarSign, Zap, Rocket } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Transparent Rewards",
      desc: "No hidden terms—clear payout triggers and timelines.",
      icon: DollarSign,
      color: "from-brand-aqua to-brand-teal"
    },
    {
      title: "Fast Qualification",
      desc: "Quick validation and immediate updates on status.",
      icon: Zap,
      color: "from-brand-teal to-brand-aqua"
    },
    {
      title: "Multiple Paths",
      desc: "Refer clients for projects or top talent for roles.",
      icon: Rocket,
      color: "from-brand-aqua to-brand-teal"
    },
  ];

  return (
    <section className="relative bg-white py-16 overflow-hidden" aria-label="Benefits section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-aqua/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.06)}
        >
          <motion.h2 className="text-display-sm font-bold text-gray-900 mb-4" variants={fadeUp(16)}>
            Why <span className="gradient-text">Join</span> Our Program
          </motion.h2>
          <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Experience transparency, speed, and flexibility in our referral program
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          {benefits.map((b, i) => {
            const IconComponent = b.icon;
            return (
              <motion.div 
                key={i} 
                className="rounded-2xl p-8 border border-gray-200 bg-white shadow-soft hover:shadow-glow hover:border-brand-teal/50 transition-all duration-300 group relative overflow-hidden"
                variants={fadeUp(16 + i * 2)}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

