"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Coffee, Code, FileSearch, Zap, Send } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Discovery",
    description:
      "We analyze your needs and objectives. Our team works closely with you to understand the core of your vision, ensuring we tailor the project to meet your exact requirements. This phase involves thorough research, stakeholder interviews, and competitive analysis to gather all necessary information.",
  },
  {
    icon: Coffee,
    title: "Planning",
    description:
      "We create a detailed project roadmap. This phase involves outlining the project's milestones, setting clear expectations, and ensuring the plan aligns with your vision. We also allocate resources, define timelines, and establish communication protocols to keep everything on track.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our team brings your vision to life. We code the project with attention to detail, ensuring the best technology stack and efficient processes to meet your goals. Throughout development, we maintain regular updates and feedback loops to ensure alignment with your expectations.",
  },
  {
    icon: Zap,
    title: "Testing",
    description:
      "Rigorous testing ensures top quality. We perform various tests to make sure everything functions as expected and meets the highest standards of performance and usability. This includes unit testing, integration testing, and user acceptance testing to identify and resolve any issues.",
  },
  {
    icon: Send,
    title: "Deployment",
    description:
      "Your solution goes live. After final approvals, we deploy the project, ensuring a seamless launch that meets your needs and expectations. We handle all aspects of the deployment process, including server setup, configuration, and monitoring to ensure a smooth transition.",
  },
  {
    icon: CheckCircle,
    title: "Support",
    description:
      "Ongoing maintenance and updates. Even after deployment, we offer continuous support to ensure your project runs smoothly and remains up-to-date with evolving technologies. Our support includes bug fixes, performance optimizations, and feature enhancements to keep your solution at its best.",
  },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 text-[#042638] relative overflow-hidden"
    >
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0fbab1] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            How We Work
          </h2>
          <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto text-balance leading-relaxed">
            Our process is designed to ensure a smooth and effective journey for
            every project. We focus on transparency, collaboration, and quality
            at every stage.
          </p>
          <div className="relative">
            <motion.div
              className="absolute top-0 bottom-0 left-6 w-0.5 bg-[#0fbab1] -ml-0.5"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 relative z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#0fbab1] rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
