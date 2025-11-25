"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

const fallbackColor = "#00B894";

const ProcessStep = ({ step, index, accentColor }) => {
  const Icon = (step?.icon && LucideIcons[step.icon]) || LucideIcons.CheckCircle;

  return (
    <motion.div
      className="flex mb-8 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <motion.div
        className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 relative z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.1 }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
      </motion.div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{step?.title}</h3>
        <p className="text-gray-600 text-balance leading-relaxed">
          {step?.description}
        </p>
      </div>
    </motion.div>
  );
};

const Process = ({ process = [], accentColor = fallbackColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!Array.isArray(process) || process.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute top-0 bottom-0 left-6 w-0.5 -ml-0.5"
        style={{ backgroundColor: accentColor }}
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {process.map((step, index) => (
        <ProcessStep
          key={`${step?.title ?? "step"}-${index}`}
          step={step}
          index={index}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
};

export default Process;

