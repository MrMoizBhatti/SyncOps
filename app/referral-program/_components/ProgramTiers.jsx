"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { CheckCircle2, TrendingUp, Star, Crown } from 'lucide-react';

export default function ProgramTiers() {
  const tiers = [
    {
      name: "Starter",
      frequency: "1–2 successful referrals / year",
      color: "brand-aqua",
      icon: TrendingUp,
      items: [
        "Up to 3% of first invoice",
        "Talent bonus after onboarding",
      ]
    },
    {
      name: "Partner",
      frequency: "3–6 successful referrals / year",
      color: "brand-teal",
      icon: Star,
      items: [
        "Up to 5% of first invoice",
        "Priority qualification",
        "Co‑marketing options",
      ],
      popular: true
    },
    {
      name: "Elite",
      frequency: "7+ successful referrals / year",
      color: "brand-aqua",
      icon: Crown,
      items: [
        "Custom reward structure",
        "Dedicated partner manager",
        "Revenue‑share options",
      ]
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-brand-card via-gray-900 to-brand-navy py-16 overflow-hidden" aria-label="Program tiers section">
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
            Program <span className="gradient-text">Tiers</span>
          </motion.h2>
          <motion.p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Choose the tier that matches your referral frequency and earn accordingly
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          {tiers.map((tier, i) => {
            const IconComponent = tier.icon;
            const isPopular = tier.popular;
            const borderColor = tier.color === 'brand-teal' ? 'brand-teal' : 'brand-aqua';
            
            return (
              <motion.div
                key={i}
                variants={fadeUp(16 + i * 2)}
                className={`glass rounded-2xl p-8 border-2 bg-white/5 backdrop-blur-sm transition-all duration-300 relative group ${
                  isPopular 
                    ? 'border-brand-teal/60 ring-2 ring-brand-teal/30 hover:ring-brand-teal/50 hover:scale-105' 
                    : 'border-white/10 hover:border-brand-aqua/60 hover:scale-105'
                }`}
                whileHover={{ y: -5 }}
              >
                {isPopular && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-brand text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    POPULAR
                  </motion.div>
                )}
                <div className={`w-14 h-14 bg-gradient-to-br ${
                  tier.color === 'brand-teal' ? 'from-brand-teal to-brand-aqua' : 'from-brand-aqua to-brand-teal'
                } rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {tier.name}
                </h3>
                <p className={`font-semibold mb-6 ${
                  tier.color === 'brand-teal' ? 'text-brand-teal' : 'text-brand-aqua'
                }`}>
                  {tier.frequency}
                </p>
                <ul className="text-gray-300 space-y-3 list-none" role="list">
                  {tier.items.map((item, j) => (
                    <motion.li 
                      key={j} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ delay: 0.1 * j }}
                    >
                      <CheckCircle2 
                        className={`w-5 h-5 flex-shrink-0 ${
                          tier.color === 'brand-teal' ? 'text-brand-teal' : 'text-brand-aqua'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

