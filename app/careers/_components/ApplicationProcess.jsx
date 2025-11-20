"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Phone, Users, CheckCircle } from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Review",
      description:
        "We carefully review your application, assessing your skills, experience, and fit for the role. Ensure your resume and cover letter are up-to-date and tailored to the position.",
    },
    {
      icon: Phone,
      title: "Phone Interview",
      description:
        "In the initial phone interview, we'll discuss your background, career goals, and why you're interested in joining us. This is also your chance to ask any preliminary questions.",
    },
    {
      icon: Users,
      title: "Team Interview",
      description:
        "You'll meet with your potential team and managers. Expect to dive deeper into your technical skills, discuss specific projects, and demonstrate your problem-solving abilities.",
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description:
        "After reviewing feedback from all interviews, we'll make a decision. If everything aligns, we'll extend an offer and welcome you to the team.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#0fbab1] rounded-full filter blur-3xl opacity-10"
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
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#042638] mb-12">
          Our Application Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-[#0fbab1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#042638]">
                {step.title}
              </h3>
              <p className="text-gray-600 text-balance leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
