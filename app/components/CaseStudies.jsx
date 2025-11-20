"use client";
import { FaArrowRight, FaChartLine, FaMobile, FaCloud, FaShieldAlt, FaCogs, FaDatabase } from 'react-icons/fa';
import SafeLink from './ui/SafeLink';
import { motion } from 'framer-motion';
import { viewport, stagger } from '../../lib/motionConfig';

const caseStudies = [
  {
    title: "FinFlow Pro",
    tagline: "Revolutionary Financial Management Platform",
    description: "Built a comprehensive SaaS solution for financial institutions, processing $2B+ in transactions monthly.",
    icon: <FaChartLine size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "FinTech",
    metrics: [
      "+38% conversion rate",
      "–42% infrastructure cost",
      "<300ms latency"
    ]
  },
  {
    title: "HealthSync",
    tagline: "AI-Powered Healthcare Analytics",
    description: "Developed an intelligent platform for healthcare providers to optimize patient care and reduce costs.",
    icon: <FaMobile size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "Healthcare",
    metrics: [
      "+45% patient satisfaction",
      "–35% operational costs",
      "99.7% accuracy rate"
    ]
  },
  {
    title: "EduTech Hub",
    tagline: "Next-Generation Learning Platform",
    description: "Created an immersive educational platform serving 100K+ students with personalized learning paths.",
    icon: <FaCloud size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "EdTech",
    metrics: [
      "+95% engagement rate",
      "–60% learning time",
      "100K+ active users"
    ]
  },
  {
    title: "SecureVault",
    tagline: "Enterprise-Grade Security Solution",
    description: "Built a comprehensive cybersecurity platform protecting 500+ enterprise clients worldwide.",
    icon: <FaShieldAlt size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "Cybersecurity",
    metrics: [
      "99.9% uptime guarantee",
      "–80% security incidents",
      "500+ enterprise clients"
    ]
  },
  {
    title: "AutoFlow",
    tagline: "Intelligent Workflow Automation",
    description: "Developed a smart automation platform that reduced manual tasks by 80% for manufacturing companies.",
    icon: <FaCogs size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "Automation",
    metrics: [
      "+80% efficiency gain",
      "–65% manual tasks",
      "200+ companies served"
    ]
  },
  {
    title: "DataSync Pro",
    tagline: "Real-Time Data Synchronization",
    description: "Created a powerful data platform handling 1M+ records daily with real-time synchronization.",
    icon: <FaDatabase size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    category: "Data Analytics",
    metrics: [
      "1M+ records/day",
      "99.99% accuracy",
      "<100ms sync time"
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Stories of our transformations across <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
            Services and Industries
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Real-world transformations that demonstrate our expertise and commitment to client success.
        </p>
      </div>
        
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        {caseStudies.map((study) => (
          <motion.div
            key={study.title}
            className="group bg-[#0B0A1C] border border-[#1F1F2E] rounded-2xl p-6 hover:border-[#00F8B4] hover:brightness-110 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
            variants={{ initial: { opacity: 0, x: 40, filter: 'blur(6px)' }, animate: { opacity: 1, x: 0, filter: 'blur(0px)' } }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-xl mb-4">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A1C]/80 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {study.category}
                </span>
              </div>
            </div>
            
            {/* Project Content */}
            <div>
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                {study.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F8B4] transition-colors duration-300">
                {study.title}
              </h3>
              
              <p className="text-[#00F8B4] font-semibold mb-3">
                {study.tagline}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {study.description}
              </p>
              
              {/* Enhanced Metrics */}
              <div className="mb-4">
                <div className="space-y-2">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#00F8B4] rounded-full"></div>
                      <span className="text-gray-300 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-[#1F1F2E]">
                <SafeLink
                  href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group/btn bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Read full story
                  <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </SafeLink>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Enhanced CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5 rounded-2xl p-8 border border-[#00F8B4]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to See More Success Stories?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore our complete portfolio of case studies and discover how we've transformed businesses across industries.
          </p>
          <SafeLink
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-[#00C4FF]/30 focus-visible:outline-none"
          >
            View All Case Studies
          </SafeLink>
        </div>
      </div>
    </div>
  );
} 