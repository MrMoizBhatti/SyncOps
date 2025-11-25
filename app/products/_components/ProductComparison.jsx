"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Check, Zap, RefreshCw, Shield, Clock, Server, ShieldCheck, TrendingUp, Code, Database, Lock, AlertCircle } from 'lucide-react';

const rows = [
  { 
    feature: 'Setup Time', 
    syncflow: '2-3 days', 
    datasync: '3-5 days', 
    cloudguard: '5-7 days',
    icon: Clock,
    description: 'Time to get up and running'
  },
  { 
    feature: 'Managed Hosting', 
    syncflow: 'Optional', 
    datasync: 'Recommended', 
    cloudguard: 'Included',
    icon: Server,
    description: 'Hosting and infrastructure management'
  },
  { 
    feature: 'SOC2 Controls', 
    syncflow: 'Included', 
    datasync: 'Included', 
    cloudguard: 'Enhanced',
    icon: ShieldCheck,
    description: 'Security and compliance certifications'
  },
  { 
    feature: 'SLA Guarantee', 
    syncflow: '99.8%', 
    datasync: '99.9%', 
    cloudguard: '99.95%',
    icon: TrendingUp,
    description: 'Uptime service level agreement'
  },
  { 
    feature: 'API-First', 
    syncflow: 'Yes', 
    datasync: 'Yes', 
    cloudguard: 'Yes',
    icon: Code,
    description: 'RESTful APIs and webhooks'
  },
  { 
    feature: 'Real-time Sync', 
    syncflow: 'Event-based', 
    datasync: '<1ms latency', 
    cloudguard: 'N/A',
    icon: RefreshCw,
    description: 'Data synchronization speed'
  },
  { 
    feature: 'AI Features', 
    syncflow: 'Built-in', 
    datasync: 'Optional', 
    cloudguard: 'Threat detection',
    icon: Zap,
    description: 'Artificial intelligence capabilities'
  },
  { 
    feature: 'Data Encryption', 
    syncflow: 'At rest & transit', 
    datasync: 'End-to-end', 
    cloudguard: 'Zero-trust',
    icon: Lock,
    description: 'Security encryption standards'
  }
];

const productHighlights = {
  syncflow: {
    icon: Zap,
    color: 'from-[#00B894] to-[#00C4FF]',
    strength: 'Best for workflow automation'
  },
  datasync: {
    icon: RefreshCw,
    color: 'from-[#00C4FF] to-[#00B894]',
    strength: 'Best for data consistency'
  },
  cloudguard: {
    icon: Shield,
    color: 'from-[#00B894] to-[#00C4FF]',
    strength: 'Best for security & compliance'
  }
};

export default function ProductComparison() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-12" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-white mb-4" variants={fadeUp(16)}>
          Compare <span className="gradient-text">At a Glance</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Key capabilities across our product lineup. Choose the right solution for your needs.
        </motion.p>
      </motion.div>

      {/* Product Highlights */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6 mb-10" 
        initial="initial" 
        whileInView="animate" 
        viewport={viewport} 
        variants={stagger.container(0.08)}
      >
        {Object.entries(productHighlights).map(([key, highlight]) => {
          const IconComponent = highlight.icon;
          const productName = key === 'syncflow' ? 'SyncFlow' : key === 'datasync' ? 'DataSync Pro' : 'CloudGuard';
          return (
            <motion.div
              key={key}
              variants={fadeUp(20)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-teal/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{productName}</h3>
              <p className="text-gray-400 text-sm">{highlight.strength}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm -mx-6 px-6 md:mx-0 md:px-0">
        <div className="min-w-[600px] md:min-w-full">
          <table className="w-full text-sm" role="table" aria-label="Product comparison table">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-6 text-left font-semibold text-white sticky left-0 bg-brand-navy/95 backdrop-blur-sm z-10">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  Feature
                </span>
              </th>
              <th className="py-4 px-6 text-center font-semibold text-white">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-5 h-5 text-brand-aqua" aria-hidden="true" />
                  <span>SyncFlow</span>
                </div>
              </th>
              <th className="py-4 px-6 text-center font-semibold text-white">
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-5 h-5 text-brand-teal" aria-hidden="true" />
                  <span>DataSync Pro</span>
                </div>
              </th>
              <th className="py-4 px-6 text-center font-semibold text-white">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-5 h-5 text-brand-aqua" aria-hidden="true" />
                  <span>CloudGuard</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => {
              const IconComponent = r.icon;
              return (
                <motion.tr 
                  key={r.feature} 
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  initial="initial"
                  whileInView="animate"
                  viewport={viewport}
                  variants={fadeUp(10 + index * 2)}
                >
                  <td className="py-4 px-6 text-gray-200 sticky left-0 bg-brand-navy/95 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-4 h-4 text-brand-teal flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">{r.feature}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{r.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                      {r.syncflow}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                      {r.datasync}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                      {r.cloudguard}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>

      {/* Mobile-friendly note */}
      <motion.p 
        className="text-center text-gray-400 text-sm mt-6 md:hidden"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        Scroll horizontally to view all features
      </motion.p>
    </div>
  );
}


