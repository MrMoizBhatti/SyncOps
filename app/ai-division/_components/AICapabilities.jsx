"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Target, CheckCircle } from 'lucide-react';

const capabilities = [
  {
    title: "AI Strategy & Consulting",
    description: "Comprehensive AI readiness assessment and strategic roadmap development",
    items: [
      "AI Readiness Assessment",
      "Technology Stack Selection",
      "ROI Analysis & Forecasting",
      "Data Strategy Planning",
      "Change Management Planning"
    ]
  },
  {
    title: "AI Development & Engineering",
    description: "Custom AI model development from concept to deployment",
    items: [
      "Custom ML Model Development",
      "Model Training & Optimization",
      "Feature Engineering",
      "Model Deployment & Scaling",
      "Continuous Learning Systems"
    ]
  },
  {
    title: "AI Integration & Automation",
    description: "Seamless integration of AI into existing business processes",
    items: [
      "API Integration",
      "Workflow Automation",
      "Legacy System Integration",
      "Real-time Processing",
      "Performance Optimization"
    ]
  },
  {
    title: "AI Operations & Support",
    description: "Ongoing monitoring, maintenance, and optimization of AI systems",
    items: [
      "Model Performance Monitoring",
      "Drift Detection & Retraining",
      "24/7 System Support",
      "A/B Testing & Experimentation",
      "Performance Optimization"
    ]
  }
];

export default function AICapabilities() {
  return (
    <div className="max-w-7xl mx-auto px-6" id="capabilities" aria-label="AI capabilities section">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-white mb-6" variants={fadeUp(16)}>
          AI <span className="gradient-text">Capabilities</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp(20)}>
          End-to-end AI solutions from strategy to operations, designed to deliver measurable business value.
        </motion.p>
      </motion.div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-brand-teal/30 transition-all duration-300 group"
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={fadeUp(18 + index * 2)}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-aqua transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>

            {/* Items List */}
            <ul className="space-y-3" role="list">
              {capability.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-brand-aqua mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
