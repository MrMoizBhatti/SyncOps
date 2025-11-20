"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { ArrowRight, TrendingUp, MessageSquare, Shield, CheckCircle2, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: "Predictive Analytics for E-commerce",
    description: "Implemented ML-powered demand forecasting that reduced inventory costs by 35%",
    icon: TrendingUp,
    color: "from-brand-aqua to-brand-teal",
    results: [
      "35% reduction in inventory costs",
      "15% increase in sales through better stock management",
      "98% forecast accuracy"
    ],
    tech: ["TensorFlow", "Time Series Forecasting", "Google Cloud ML"],
    link: "/case-studies/predictive-analytics-ecommerce"
  },
  {
    title: "Intelligent Customer Support Automation",
    description: "AI chatbot solution that handles 70% of customer inquiries with 94% satisfaction rate",
    icon: MessageSquare,
    color: "from-brand-teal to-brand-aqua",
    results: [
      "70% inquiry resolution without human intervention",
      "94% customer satisfaction rate",
      "45% reduction in support costs"
    ],
    tech: ["OpenAI GPT", "NLP", "Intent Classification"],
    link: "/case-studies/ai-customer-support"
  },
  {
    title: "Fraud Detection System",
    description: "Real-time AI fraud detection system that caught $2M+ in fraudulent transactions",
    icon: Shield,
    color: "from-brand-aqua to-brand-teal",
    results: [
      "99.8% fraud detection accuracy",
      "$2M+ fraudulent transactions prevented",
      "60% reduction in false positives"
    ],
    tech: ["Deep Learning", "Anomaly Detection", "Real-time Processing"],
    link: "/case-studies/fraud-detection-ai"
  }
];

export default function AICaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-6" aria-label="AI success stories section">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          AI <span className="gradient-text">Success Stories</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Real results from our AI implementations that transformed businesses.
        </motion.p>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        {caseStudies.map((study, index) => {
          const IconComponent = study.icon;
          return (
            <motion.div
              key={study.title}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-glow hover:border-brand-teal/30 transition-all duration-300 group relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(18 + index * 3)}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Icon, Title and Description */}
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-teal transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <SafeLink
                      href={study.link}
                      className="inline-flex items-center text-brand-teal font-semibold text-sm hover:text-brand-aqua transition-colors duration-300 group/link"
                      aria-label={`Read full case study: ${study.title}`}
                    >
                      Read Full Story
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </SafeLink>
                  </div>

                  {/* Middle Column - Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-brand-teal" aria-hidden="true" />
                      Results
                    </h4>
                    <ul className="space-y-3" role="list">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-aqua" aria-hidden="true" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-brand-aqua/10 to-brand-teal/10 rounded-full border border-brand-teal/20 text-xs font-medium text-gray-700 hover:border-brand-teal/40 hover:bg-brand-teal/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View More CTA */}
      <motion.div className="mt-12 text-center" initial="initial" whileInView="animate" viewport={viewport} variants={fadeUp(20)}>
        <SafeLink
          href="/case-studies"
          className="inline-flex items-center text-brand-teal font-semibold text-lg hover:text-brand-aqua transition-colors duration-300 focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none"
          aria-label="View all case studies"
        >
          View All Case Studies
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
        </SafeLink>
      </motion.div>
    </div>
  );
}
