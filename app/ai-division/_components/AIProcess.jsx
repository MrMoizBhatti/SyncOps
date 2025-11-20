"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Search, Layout, Code, Zap, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description: "Understand your business challenges, data landscape, and AI opportunities",
    tasks: ["AI Readiness Analysis", "Use Case Identification", "Data Assessment"]
  },
  {
    number: "02",
    icon: Layout,
    title: "Strategy & Design",
    description: "Design AI solution architecture and create implementation roadmap",
    tasks: ["Architecture Design", "Model Selection", "ROI Planning"]
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Training",
    description: "Build, train, and optimize AI models for your specific use case",
    tasks: ["Model Development", "Data Engineering", "Model Training"]
  },
  {
    number: "04",
    icon: Zap,
    title: "Deployment & Integration",
    description: "Deploy AI solution into production with seamless integration",
    tasks: ["API Development", "System Integration", "Performance Testing"]
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Optimization & Monitoring",
    description: "Continuously monitor and improve AI performance",
    tasks: ["Performance Monitoring", "Model Retraining", "A/B Testing"]
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Success & Support",
    description: "Ongoing support and evolution of your AI solution",
    tasks: ["24/7 Support", "Continuous Learning", "Feature Enhancement"]
  }
];

export default function AIProcess() {
  return (
    <div className="max-w-7xl mx-auto px-6" aria-label="AI process section">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-white mb-6" variants={fadeUp(16)}>
          Our AI <span className="gradient-text">Process</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp(20)}>
          A proven methodology to deliver AI solutions that drive real business value.
        </motion.p>
      </motion.div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.number}
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(18 + index * 3)}
            >
              <div className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-brand-teal/30 transition-all duration-300 h-full group">
                {/* Step Number */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg" aria-label={`Step ${step.number}`}>{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-brand-aqua" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-aqua transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Tasks */}
                <ul className="space-y-2" role="list">
                  {step.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-brand-aqua mr-2 flex-shrink-0" aria-hidden="true" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
