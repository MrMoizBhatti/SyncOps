"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Star, Quote, TrendingUp, DollarSign } from 'lucide-react';

const testimonials = [
  {
    quote: "I've referred 5 clients to SyncOps and earned over $15,000 in rewards. The process is transparent and payouts are fast—exactly as promised.",
    author: "Sarah Martinez",
    role: "Tech Consultant",
    earnings: "$15,000+",
    referrals: "5 clients",
    rating: 5
  },
  {
    quote: "As a recruiter, I've placed several developers through SyncOps' referral program. The talent bonus structure is fair and the team is professional throughout.",
    author: "Michael Chen",
    role: "Technical Recruiter",
    earnings: "$8,500+",
    referrals: "12 candidates",
    rating: 5
  },
  {
    quote: "The referral program is a win-win. I help my network find great opportunities while earning rewards. SyncOps makes it simple and rewarding.",
    author: "Emily Rodriguez",
    role: "Business Development",
    earnings: "$12,000+",
    referrals: "8 referrals",
    rating: 5
  }
];

const stats = [
  { label: "Active Referrers", value: "500+", icon: TrendingUp },
  { label: "Total Rewards Paid", value: "$2M+", icon: DollarSign },
  { label: "Success Rate", value: "85%", icon: Star },
];

export default function ReferralSocialProof() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden" aria-label="Social proof section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(16 + i * 2)}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="text-white w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.06)}
        >
          <motion.h2 className="text-display-sm font-bold text-gray-900 mb-4" variants={fadeUp(16)}>
            What Our <span className="gradient-text">Referrers</span> Say
          </motion.h2>
          <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Real stories from people earning rewards through our referral program
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.08)}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp(16 + i * 2)}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-soft hover:shadow-glow transition-all duration-300 group"
              whileHover={{ y: -5 }}
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
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-teal font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-brand-teal font-semibold">{testimonial.earnings} earned</span>
                  <span className="text-gray-500">{testimonial.referrals}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

