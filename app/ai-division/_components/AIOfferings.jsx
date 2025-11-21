"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, springSoft, viewport } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { Brain, Zap, TrendingUp, Users, Shield, BarChart3, Rocket, Database } from 'lucide-react';

const offerings = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms tailored to your business needs",
    color: "from-brand-aqua to-brand-teal",
    features: ["Predictive Analytics", "Recommendation Systems", "Deep Learning"]
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Intelligent workflow automation powered by AI and RPA",
    color: "from-brand-teal to-brand-aqua",
    features: ["Process Automation", "Smart Workflows", "RPA Integration"]
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for informed decisions",
    color: "from-brand-aqua to-brand-teal",
    features: ["Forecasting", "Risk Analysis", "Trend Detection"]
  },
  {
    icon: Users,
    title: "Natural Language Processing",
    description: "Chatbots, sentiment analysis, and language understanding",
    color: "from-brand-teal to-brand-aqua",
    features: ["Chatbots", "Sentiment Analysis", "Text Mining"]
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "AI-powered threat detection and regulatory compliance",
    color: "from-brand-aqua to-brand-teal",
    features: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring"]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence AI",
    description: "AI-enhanced BI tools for comprehensive business insights",
    color: "from-brand-teal to-brand-aqua",
    features: ["Data Visualization", "Insight Generation", "Reporting"]
  }
];

export default function AIOfferings() {
  return (
    <div className="max-w-7xl mx-auto px-6" aria-label="AI offerings section">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Our AI <span className="gradient-text">Offerings</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Comprehensive AI solutions designed to transform your business operations, enhance decision-making, and drive sustainable growth.
        </motion.p>
      </motion.div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {offerings.map((offering, index) => {
          const IconComponent = offering.icon;
          return (
            <motion.div
              key={offering.title}
              className="group card hover:shadow-glow transition-all duration-300"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(16 + index * 2)}
              transition={springSoft}
            >
              <div className="p-8 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${offering.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-teal transition-colors duration-300">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offering.description}
                </p>

                {/* Features */}
                <ul className="space-y-2" role="list">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gradient-brand rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div className="mt-16 text-center" initial="initial" whileInView="animate" viewport={viewport} variants={fadeUp(20)}>
        <div className="bg-gradient-to-r from-brand-aqua/5 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-body-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get a free consultation and discover how our AI solutions can drive measurable results for your organization.
          </p>
          <SafeLink
            href="/contact"
            className="btn-primary inline-flex items-center justify-center focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
            aria-label="Schedule a free AI consultation"
          >
            Schedule Free AI Consultation
          </SafeLink>
        </div>
      </motion.div>
    </div>
  );
}
