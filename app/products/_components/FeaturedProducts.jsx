"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, springSoft, viewport } from '../../../lib/motionConfig';
import { use3DHover } from '../../../hooks/use3DHover';
import SafeLink from '../../components/ui/SafeLink';
import { ArrowRight, Zap, RefreshCw, Shield, CheckCircle2, TrendingUp, Clock, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    title: 'SyncFlow',
    tagline: 'AI-powered workflow automation',
    description: 'Automate repetitive processes with intelligent triggers, approvals, and analytics.',
    href: '/products/syncflow',
    color: 'from-[#00F8B4] to-[#00C4FF]',
    icon: Zap,
    features: [
      'AI-powered decision making',
      'Multi-step workflow builder',
      'Real-time analytics dashboard',
      'Human-in-the-loop approvals',
      '100+ pre-built connectors'
    ],
    stats: [
      { label: 'Efficiency Gain', value: '80%', icon: TrendingUp },
      { label: 'Setup Time', value: '2-3 days', icon: Clock },
      { label: 'Client Rating', value: '9.5/10', icon: Star }
    ],
    badge: 'Most Popular'
  },
  {
    title: 'DataSync Pro',
    tagline: 'Real-time data synchronization',
    description: 'Keep your data consistent across services with resilient, observable pipelines.',
    href: '/products/datasync-pro',
    color: 'from-[#00C4FF] to-[#00F8B4]',
    icon: RefreshCw,
    features: [
      '<1ms sync latency',
      'Automatic conflict resolution',
      'Full audit trail & replay',
      'Multi-directional sync',
      '50+ database connectors'
    ],
    stats: [
      { label: 'Sync Speed', value: '<1ms', icon: Zap },
      { label: 'Uptime', value: '99.9%', icon: Shield },
      { label: 'Data Sources', value: '50+', icon: Sparkles }
    ],
    badge: 'Enterprise Ready'
  },
  {
    title: 'CloudGuard',
    tagline: 'Cloud security & compliance',
    description: 'Zero-trust security with policy-as-code, monitoring, and automated remediation.',
    href: '/products/cloudguard',
    color: 'from-[#00F8B4] to-[#00C4FF]',
    icon: Shield,
    features: [
      'Zero-trust architecture',
      'Policy-as-code enforcement',
      'Real-time threat detection',
      'Automated remediation',
      'SOC2 & GDPR compliant'
    ],
    stats: [
      { label: 'Threats Blocked', value: '10M+', icon: Shield },
      { label: 'Compliance', value: '100%', icon: CheckCircle2 },
      { label: 'Response Time', value: '<5min', icon: Clock }
    ],
    badge: 'Security First'
  }
];

export default function FeaturedProducts() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6" id="products">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Featured <span className="gradient-text">Products</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Production-ready modules you can adopt today—built and refined with real client workloads.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => {
          const tilt = use3DHover(8);
          const IconComponent = p.icon;
          const isExpanded = expandedCard === p.title;

          return (
            <motion.div
              key={p.title}
              className="group card will-change-transform relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(16 + i * 2)}
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
              transition={springSoft}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${p.color} text-white text-xs font-semibold rounded-full shadow-lg z-10`}>
                {p.badge}
              </div>

              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${p.color} rounded-2xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">{p.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{p.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                  {p.stats.map((stat, idx) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <StatIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal mx-auto mb-1" aria-hidden="true" />
                        <div className="text-[10px] sm:text-xs font-bold text-gray-900 break-words">{stat.value}</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Expandable Features */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-6"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {p.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : p.title)}
                    className="text-sm text-brand-teal font-medium hover:text-brand-aqua transition-colors duration-300 text-left flex items-center gap-1"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? `Collapse ${p.title} details` : `Expand ${p.title} details`}
                  >
                    {isExpanded ? 'Show Less' : 'View Features'}
                    <ArrowRight 
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <SafeLink 
                    href={p.href} 
                    className="inline-flex items-center justify-center text-brand-teal font-semibold group-hover:text-brand-aqua transition-colors duration-300 bg-brand-teal/5 hover:bg-brand-teal/10 rounded-lg py-2 px-4"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </SafeLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


