"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote: "SyncFlow reduced our manual processes by 85%. The AI-powered workflows are incredibly intuitive and the ROI was immediate.",
    author: "Sarah Chen",
    role: "CTO, TechStart Inc.",
    rating: 5,
    product: "SyncFlow"
  },
  {
    quote: "DataSync Pro keeps our 20+ systems perfectly synchronized. The conflict resolution is brilliant—we've had zero data inconsistencies.",
    author: "Michael Rodriguez",
    role: "VP Engineering, DataCorp",
    rating: 5,
    product: "DataSync Pro"
  },
  {
    quote: "CloudGuard gives us complete visibility and automated remediation. We passed our SOC2 audit on the first try thanks to their platform.",
    author: "Emily Watson",
    role: "Security Lead, SecureCloud",
    rating: 5,
    product: "CloudGuard"
  }
];

const customerLogos = [
  { name: "TechStart Inc.", industry: "SaaS" },
  { name: "DataCorp", industry: "Enterprise" },
  { name: "SecureCloud", industry: "Security" },
  { name: "InnovateLabs", industry: "Startup" },
  { name: "ScaleUp", industry: "Growth" }
];

export default function ProductSocialProof() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          See how teams are using our products to accelerate their growth and streamline operations.
        </motion.p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-glow transition-all duration-300"
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={fadeUp(16 + i * 2)}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-brand-teal/30 mb-4" aria-hidden="true" />
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-full flex items-center justify-center">
                <span className="text-brand-teal font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-xs text-brand-teal font-medium mt-1">{testimonial.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Customer Logos & Stats */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by 500+ Companies</h3>
          <p className="text-gray-600 text-sm">From startups to Fortune 500 enterprises</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {customerLogos.map((customer, i) => (
            <motion.div
              key={i}
              className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-teal/30 transition-all duration-300"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(10 + i * 2)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-brand-teal" aria-hidden="true" />
              </div>
              <div className="font-semibold text-gray-900 text-sm">{customer.name}</div>
              <div className="text-xs text-gray-500">{customer.industry}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

