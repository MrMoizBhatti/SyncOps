"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Coffee, Code, FileSearch, Zap, Send } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Discovery",
    description:
      "We analyze your needs and objectives, align on success metrics, and conduct stakeholder workshops to surface critical insights.",
  },
  {
    icon: Coffee,
    title: "Planning",
    description:
      "We craft a milestone-driven roadmap, define team structure, and establish communication cadences to keep everyone synchronized.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Cross-functional squads build iteratively with tight QA loops, transparent demos, and continuous feedback from your team.",
  },
  {
    icon: Zap,
    title: "Testing",
    description:
      "Automated and manual testing run in parallel to guarantee stability, performance, and delightful end-user experiences.",
  },
  {
    icon: Send,
    title: "Deployment",
    description:
      "We orchestrate zero-downtime releases, infrastructure automation, and knowledge transfer to ensure a confident launch.",
  },
  {
    icon: CheckCircle,
    title: "Support",
    description:
      "Post-launch optimization, analytics reviews, and proactive support keep your product resilient and evolving.",
  },
];

const StepCard = ({ step, index, align = "left" }) => {
  const isLeft = align === "left";
  return (
    <motion.div
      className={`relative max-w-xl w-full bg-white/85 backdrop-blur-xl border border-white rounded-3xl p-6 lg:p-8 shadow-[0_25px_70px_rgba(3,23,40,0.08)] ${
        isLeft ? "lg:ml-auto" : "lg:mr-auto"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-[0.3em] text-gray-400">
          STEP {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#00B894] to-[#00C4FF]" />
      </div>
      <h3 className="text-2xl font-semibold text-[#031728] mb-3">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
    </motion.div>
  );
};

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#F6FBFF] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,196,255,0.08),_transparent_60%)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C4FF]/10 border border-[#00C4FF]/30 text-sm font-semibold text-[#0086B0] mb-6">
            <span className="w-2 h-2 bg-[#00C4FF] rounded-full animate-pulse" />
            Proven Delivery Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#031728] mb-4">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Transparent collaboration keeps you close to the work while our teams drive velocity, quality, and measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12 relative">
          <span className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#00B894] via-[#00C4FF] to-[#00B894]" />
          <motion.div
            className="hidden lg:block absolute top-16 right-0 w-72 h-72 rounded-[60px] border border-[#00C4FF]/20 bg-gradient-to-br from-[#00B894]/12 to-transparent blur-2xl"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {steps.map((step, index) => {
            const align = index % 2 === 0 ? "left" : "right";
            return (
              <div
                key={index}
                className="relative grid lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] gap-6 lg:gap-10 items-center"
              >
                <div className={`hidden lg:flex ${align === "left" ? "justify-end" : "justify-start"}`}>
                  {align === "left" ? <StepCard step={step} index={index} align="left" /> : <div className="w-full" />}
                </div>

                <div className="flex flex-col items-center gap-4 order-1 lg:order-none">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B894] to-[#00C4FF] shadow-lg flex items-center justify-center ring-8 ring-white/70"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block w-[2px] h-24 bg-gradient-to-b from-[#00B894] via-[#00C4FF] to-[#00B894]" />
                  )}
                </div>

                <div className={`hidden lg:flex ${align === "right" ? "justify-start" : "justify-end"}`}>
                  {align === "right" ? <StepCard step={step} index={index} align="right" /> : <div className="w-full" />}
                </div>

                <div className="lg:hidden w-full">
                  <StepCard step={step} index={index} align="mobile" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
