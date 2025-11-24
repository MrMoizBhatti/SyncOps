"use client";
import { CheckCircle, ArrowRight } from 'lucide-react';
import SafeLink from './ui/SafeLink';
import { motion } from 'framer-motion';
import { stagger, fadeUp, springSoft, slideFromLeft, slideFromRight } from '../../lib/motionConfig';

const serviceGroups = [
  {
    step: "01",
    title: "Build",
    description: "Custom software development from concept to deployment",
    outcome: "Production-ready MVP in 4-6 weeks",
    badge: "2-4 Weeks",
    services: [
      {
        title: "Custom Development",
        description: "Tailored software solutions built with modern technologies",
        icon: CheckCircle,
        href: "/services/custom-development"
      },
      {
        title: "MVP Development",
        description: "Rapid prototyping and minimum viable product creation",
        icon: CheckCircle,
        href: "/services/mvp-development"
      },
      {
        title: "API Development",
        description: "Robust backend APIs and microservices architecture",
        icon: CheckCircle,
        href: "/services/api-development"
      }
    ]
  },
  {
    step: "02",
    title: "Automate",
    description: "Streamline operations with intelligent automation",
    outcome: "80% reduction in manual processes",
    badge: "SOC2 Ready",
    services: [
      {
        title: "Process Automation",
        description: "Workflow automation and business process optimization",
        icon: CheckCircle,
        href: "/services/automation"
      },
      {
        title: "AI Integration",
        description: "Machine learning and AI-powered automation solutions",
        icon: CheckCircle,
        href: "/services/ai-integration"
      },
      {
        title: "DevOps Automation",
        description: "CI/CD pipelines and infrastructure automation",
        icon: CheckCircle,
        href: "/services/devops"
      }
    ]
  },
  {
    step: "03",
    title: "Scale",
    description: "Grow your infrastructure and applications seamlessly",
    outcome: "99.9% uptime with auto-scaling",
    badge: "99.9% Uptime",
    services: [
      {
        title: "Cloud Migration",
        description: "Seamless migration to cloud-native architectures",
        icon: CheckCircle,
        href: "/services/cloud-migration"
      },
      {
        title: "Performance Optimization",
        description: "Application and database performance tuning",
        icon: CheckCircle,
        href: "/services/optimization"
      },
      {
        title: "Monitoring & Analytics",
        description: "Real-time monitoring and actionable insights",
        icon: CheckCircle,
        href: "/services/monitoring"
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
      
      {/* Horizontal Timeline */}
      <div className="space-y-16">
        {serviceGroups.map((group, groupIndex) => (
          <motion.div key={group.title} className="relative" initial="initial" whileInView="animate" viewport={mobileFirstViewport} variants={stagger.container(0.06)}>
            {/* Timeline Connector */}
            {groupIndex < serviceGroups.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-aqua to-brand-teal opacity-30"></div>
            )}
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Step Number and Badge */}
              <motion.div className="text-center lg:text-left" variants={fadeUp(18)}>
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-soft">
                    {group.step}
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-brand-aqua/10 to-brand-teal/10 rounded-full border border-brand-teal/20">
                    <span className="text-sm font-semibold text-brand-teal">{group.badge}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{group.title}</h3>
                <p className="text-body-lg text-gray-600 mb-4">{group.description}</p>
                
                {/* Outcome */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">{group.outcome}</span>
                </div>
              </motion.div>
              
              {/* Services Grid */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-3 gap-6">
                  {group.services.map((service, serviceIndex) => {
                    const IconComponent = service.icon;
                    // Alternate between left and right animations
                    const isLeft = serviceIndex % 2 === 0;
                    const baseVariant = isLeft ? slideFromLeft(40) : slideFromRight(40);
                    
                    // Create custom variant with delay
                    const customVariant = {
                      initial: baseVariant.initial,
                      animate: {
                        ...baseVariant.animate,
                        transition: {
                          ...baseVariant.animate.transition,
                          delay: serviceIndex * 0.1
                        }
                      }
                    };
                    
                    return (
                      <motion.div
                        key={service.title}
                        className="group card hover:shadow-glow transition-all duration-300"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={customVariant}
                      >
                        <SafeLink href={service.href} className="block h-full">
                          <div className="p-6 h-full">
                            <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-teal transition-colors duration-300">
                              {service.title}
                            </h4>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                              {service.description}
                            </p>
                            
                            <div className="flex items-center text-brand-teal font-semibold group-hover:text-brand-aqua transition-colors duration-300">
                              Learn more
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </SafeLink>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
