"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, springSoft } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { Gift, Users, ArrowRight } from 'lucide-react';

export default function ReferralHero() {
  return (
    <section className="relative overflow-hidden" aria-label="Referral program hero section">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-brand rounded-full blur-3xl opacity-20" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <motion.div 
          className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center"
          {...stagger.container(0.08)}
        >
          <div className="text-white">
            <motion.h1 
              className="text-display font-bold leading-tight mb-6 text-balance" 
              variants={fadeUp(20)}
            >
              Earn by Referring <span className="gradient-text">Clients & Talent</span>
            </motion.h1>
            <motion.p 
              className="text-body-xl text-gray-300 mb-8 max-w-2xl leading-relaxed" 
              variants={fadeUp(24)}
            >
              Share great leads or exceptional candidates with SyncOps. When your
              referral results in a signed client or a successful hire, you earn
              rewards—simple and transparent.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8" 
              variants={fadeUp(28)}
            >
              <SafeLink
                href="mailto:referrals@syncops.co?subject=Referral%20Submission%20-%20SyncOps&body=Share%20a%20few%20details%3A%0A-%20Referral%20type%20(client%20or%20talent)%0A-%20Name%20and%20company%0A-%20Role%20or%20need%0A-%20Contact%20info%0A-%20Any%20helpful%20context"
                className="btn-primary inline-flex items-center justify-center focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
                aria-label="Submit a referral via email"
              >
                <Gift className="w-5 h-5 mr-2" aria-hidden="true" />
                Submit a Referral
              </SafeLink>
              <SafeLink 
                href="/contact" 
                className="btn-secondary inline-flex items-center justify-center focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
                aria-label="Talk to our team about referrals"
              >
                Talk to Our Team
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </SafeLink>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              {...stagger.container(0.06)}
            >
              <motion.div 
                variants={fadeUp(16)}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200 border border-white/20"
                role="listitem"
              >
                <Users className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                <span>500+ Active Referrers</span>
              </motion.div>
              <motion.div 
                variants={fadeUp(18)}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200 border border-white/20"
                role="listitem"
              >
                <Gift className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                <span>Fast Payouts</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            variants={fadeUp(20)}
            transition={springSoft}
          >
            <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl" aria-label="Referral rewards program showcase">
              <div className="w-full h-64 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-2xl flex items-center justify-center" aria-hidden="true">
                <Gift className="w-16 h-16 text-brand-aqua" aria-hidden="true" />
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-sm font-medium">Earn for Impact</p>
                <p className="text-gray-400 text-xs mt-1">Help us meet the right clients and talent</p>
              </div>
            </div>
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-brand rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-brand-reverse rounded-full opacity-40"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              aria-hidden="true"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

