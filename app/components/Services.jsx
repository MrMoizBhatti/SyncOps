"use client";
import { CheckCircle, ArrowRight, ArrowDownCircle, TrendingUp, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { stagger, fadeUp, springSoft, slideFromLeft, slideFromRight } from '../../lib/motionConfig';

const serviceGroups = [
  {
    step: "01",
    title: "Build",
    description: "Custom software development from concept to deployment with cutting-edge technologies",
    outcome: "Production-ready MVP in 4-6 weeks",
    badge: "2-4 Weeks",
    services: [
      {
        title: "Custom Development",
        description: "Tailored software solutions built with modern technologies",
        icon: CheckCircle
      },
      {
        title: "MVP Development",
        description: "Rapid prototyping and minimum viable product creation",
        icon: CheckCircle
      },
      {
        title: "API Development",
        description: "Robust backend APIs and microservices architecture",
        icon: CheckCircle
      }
    ]
  },
  {
    step: "02",
    title: "Automate",
    description: "Streamline operations with intelligent automation and advanced AI solutions",
    outcome: "80% reduction in manual processes",
    badge: "SOC2 Ready",
    services: [
      {
        title: "Process Automation",
        description: "Workflow automation and business process optimization",
        icon: CheckCircle
      },
      {
        title: "AI Integration",
        description: "Machine learning and AI-powered automation solutions",
        icon: CheckCircle
      },
      {
        title: "DevOps Automation",
        description: "CI/CD pipelines and infrastructure automation",
        icon: CheckCircle
      }
    ]
  },
  {
    step: "03",
    title: "Scale",
    description: "Grow your infrastructure and applications seamlessly with cloud-native solutions",
    outcome: "99.9% uptime with auto-scaling",
    badge: "99.9% Uptime",
    services: [
      {
        title: "Cloud Migration",
        description: "Seamless migration to cloud-native architectures",
        icon: CheckCircle
      },
      {
        title: "Performance Optimization",
        description: "Application and database performance tuning",
        icon: CheckCircle
      },
      {
        title: "Monitoring & Analytics",
        description: "Real-time monitoring and actionable insights",
        icon: CheckCircle
      }
    ]
  }
];

const mobileFirstViewport = { once: true, amount: 0.1 };

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={mobileFirstViewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          From <span className="gradient-text">Build</span> to <span className="gradient-text-reverse">Scale</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          We handle every stage of your digital transformation journey with proven expertise and cutting-edge technology.
        </motion.p>
      </motion.div>
      
      {/* Graph/Diagram Style Flow */}
      <div className="relative">
        {/* Main Flow Diagram */}
        <div className="relative">
          {/* Desktop SVG connectors */}
          <div className="hidden lg:block absolute inset-x-8 top-[240px] h-24 pointer-events-none z-0">
            <svg viewBox="0 0 1000 120" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="flowLineA" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B894" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00C4FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00B894" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="flowLineB" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C4FF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00B894" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00C4FF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <motion.line
                x1="166"
                y1="60"
                x2="500"
                y2="60"
                stroke="url(#flowLineA)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <motion.line
                x1="500"
                y1="60"
                x2="834"
                y2="60"
                stroke="url(#flowLineB)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            
            </svg>
          </div>

          {/* Flow Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-20">
            {serviceGroups.map((group, groupIndex) => {
              const icons = [Rocket, Zap, TrendingUp];
              const IconComponent = icons[groupIndex];
              
              return (
                <motion.div
                  key={group.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                >
                  {/* Node Circle */}
                  <div className="relative mb-8">
                    <motion.div
                      className="mx-auto w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-2xl relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                        <IconComponent className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 mx-auto w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: groupIndex * 0.3,
                      }}
                    />
                  </div>

                  {/* Node Content */}
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {group.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">
                      {group.description}
                    </p>
                    
                    {/* Outcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs lg:text-sm font-medium text-green-700">{group.outcome}</span>
                    </div>

                    {/* Time Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
                      <span className="text-xs lg:text-sm font-semibold text-[#00B894]">{group.badge}</span>
                    </div>

                    {/* Mobile vertical connector */}
                    {groupIndex < serviceGroups.length - 1 && (
                      <div className="lg:hidden flex flex-col items-center mb-6">
                        <div className="w-1 h-10 bg-gradient-to-b from-[#00B894] to-transparent opacity-70"></div>
                        <ArrowDownCircle className="w-8 h-8 text-[#00C4FF] bg-white rounded-full shadow-md" />
                        <div className="w-1 h-10 bg-gradient-to-b from-transparent to-[#00C4FF] opacity-70"></div>
                      </div>
                    )}

                    {/* Services List */}
                    <div
                      className={`space-y-3 ${
                        groupIndex === 1 ? "mt-12 lg:mt-12" : "mt-8 lg:mt-12"
                      }`}
                    >
                      {group.services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.title}
                          className="group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: groupIndex * 0.2 + serviceIndex * 0.1 }}
                        >
                          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-[#00B894] hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 text-left">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#00B894] transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#00B894] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
