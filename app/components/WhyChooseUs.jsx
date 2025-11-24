"use client";
import { Users, Settings, Rocket, Handshake, CheckCircle, Clock, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewport } from '../../lib/motionConfig';

const benefits = [
  {
    title: "Expert Team",
    description: "50+ seasoned professionals with years of experience in cutting-edge technologies and industry best practices.",
    icon: Users,
    stat: "50+ Experts"
  },
  {
    title: "Proven Processes",
    description: "Established methodologies and frameworks that ensure consistent quality and predictable delivery timelines.",
    icon: Settings,
    stat: "99% Success Rate"
  },
  {
    title: "Agile Delivery",
    description: "Rapid development cycles with continuous feedback and iterative improvements for optimal results.",
    icon: Rocket,
    stat: "2-4 Week Sprints"
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs and flexible engagement models to fit your budget.",
    icon: Handshake,
    stat: "100% Transparent"
  }
];

const additionalBenefits = [
  {
    icon: CheckCircle,
    text: "NDA & IP protection guaranteed"
  },
  {
    icon: Clock,
    text: "48-hour response time commitment"
  },
  {
    icon: Shield,
    text: "Enterprise-grade security standards"
  },
  {
    icon: TrendingUp,
    text: "Continuous performance optimization"
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-[#0B0A1C] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5 pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-5 animate-pulse pointer-events-none will-change-transform"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000 pointer-events-none will-change-transform"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeUp(16)}>
          Why <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Choose
            </span> SyncOps?
        </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp(20)}>
          We combine technical excellence with business acumen to deliver solutions that drive real results.
        </motion.p>
      </motion.div>
      
        {/* Main Benefits Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.08)}>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00F8B4]/10 relative overflow-hidden"
                variants={fadeUp(18)}
          >
            {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white shadow-lg mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent size={28} className="md:w-8 md:h-8" />}
              </div>
              
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00F8B4] transition-colors duration-300 text-center">
                    {benefit.title}
              </h3>
              
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 md:mb-4 text-center">
                    {benefit.description}
              </p>
              
                  <div className="text-[#00F8B4] font-bold text-base md:text-lg text-center">
                    {benefit.stat}
              </div>
            </div>
          </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
          {additionalBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUp(12)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent size={20} className="text-[#00F8B4]" />}
                </div>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
