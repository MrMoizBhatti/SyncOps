"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Zap, RefreshCw, Shield, TrendingUp, CheckCircle2, Users, BarChart3, Lock, FileCheck, AlertTriangle } from 'lucide-react';

const useCases = [
  {
    title: 'Operations Automation',
    icon: Zap,
    color: 'from-[#00B894] to-[#00C4FF]',
    description: 'Streamline business processes and eliminate manual work',
    points: [
      { text: 'Reduce manual handoffs by 80%', icon: TrendingUp },
      { text: 'Consistency and full auditability', icon: FileCheck },
      { text: 'Human-in-the-loop approvals', icon: Users },
      { text: 'Real-time process analytics', icon: BarChart3 }
    ],
    benefits: ['Faster processing', 'Lower error rates', 'Better compliance']
  },
  {
    title: 'Data Synchronization',
    icon: RefreshCw,
    color: 'from-[#00C4FF] to-[#00B894]',
    description: 'Keep data consistent across all your systems',
    points: [
      { text: 'Multi-system consistency guaranteed', icon: CheckCircle2 },
      { text: 'Intelligent conflict resolution', icon: AlertTriangle },
      { text: 'Full replay & observability', icon: BarChart3 },
      { text: '<1ms sync latency', icon: Zap }
    ],
    benefits: ['Single source of truth', 'Real-time updates', 'Zero data loss']
  },
  {
    title: 'Cloud Security',
    icon: Shield,
    color: 'from-[#00B894] to-[#00C4FF]',
    description: 'Protect your infrastructure with enterprise-grade security',
    points: [
      { text: 'Policy-as-code enforcement', icon: FileCheck },
      { text: 'Continuous compliance monitoring', icon: CheckCircle2 },
      { text: 'Automated threat remediation', icon: Shield },
      { text: 'Zero-trust architecture', icon: Lock }
    ],
    benefits: ['Proactive protection', 'Regulatory compliance', 'Peace of mind']
  }
];

export default function ProductUseCases() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Where These <span className="gradient-text">Shine</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Proven use cases we see across startups and enterprises. Real solutions for real challenges.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((c, i) => {
          const IconComponent = c.icon;
          return (
            <motion.div 
              key={c.title} 
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-glow hover:border-brand-teal/30 transition-all duration-300 group relative overflow-hidden"
              initial="initial" 
              whileInView="animate" 
              viewport={viewport} 
              variants={fadeUp(16 + i * 2)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white w-7 h-7" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{c.description}</p>

                {/* Points */}
                <ul className="space-y-3 mb-6">
                  {c.points.map((point, idx) => {
                    const PointIcon = point.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                        <div className={`w-6 h-6 bg-gradient-to-br ${c.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <PointIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                        </div>
                        <span className="leading-relaxed">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Benefits */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {c.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-brand-aqua/10 to-brand-teal/10 rounded-full text-xs font-medium text-gray-700 border border-brand-teal/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


