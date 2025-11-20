"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { DollarSign, Users, Clock, ArrowRight } from 'lucide-react';

export default function RewardsSection() {
  const rewards = [
    {
      type: "Client referral",
      description: "up to 5% of first invoice (capped) after contract signature and initial payment.",
      icon: DollarSign,
      color: "brand-aqua"
    },
    {
      type: "Talent referral",
      description: "fixed bonus after successful hire and completion of a 60‑day period.",
      icon: Users,
      color: "brand-teal"
    },
    {
      type: "Payout timeline",
      description: "Payouts are processed within 30 days of qualifying events.",
      icon: Clock,
      color: "brand-aqua"
    },
  ];

  return (
    <section className="relative bg-white py-16 overflow-hidden" aria-label="Rewards section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
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
            How <span className="gradient-text">Rewards</span> Work
          </motion.h2>
          <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Simple, transparent reward structure for every successful referral
          </motion.p>
        </motion.div>
        <motion.div 
          className="rounded-3xl p-8 border border-gray-200 bg-white shadow-soft hover:shadow-glow transition-all duration-300"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={fadeUp(20)}
        >
          <ul className="space-y-6 text-lg" role="list">
            {rewards.map((reward, i) => {
              const IconComponent = reward.icon;
              return (
                <motion.li 
                  key={i}
                  className="flex items-start gap-4 group"
                  initial="initial"
                  whileInView="animate"
                  viewport={viewport}
                  variants={fadeUp(10 + i * 2)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${
                    reward.color === 'brand-teal' ? 'from-brand-teal to-brand-aqua' : 'from-brand-aqua to-brand-teal'
                  } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-white w-6 h-6`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 pt-1">
                    <span className="font-semibold text-gray-900">{reward.type}:</span>
                    <span className="text-gray-700 ml-2">{reward.description}</span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

