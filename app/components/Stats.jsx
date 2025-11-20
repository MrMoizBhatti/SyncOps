"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Ensure client-side only rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView && isClient) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, inView, isClient]);

  // Return 0 on server, actual count on client
  return <span ref={ref}>{isClient ? count : 0}{suffix}</span>;
};

const StatItem = ({ icon, value, label, delay = 0 }) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: delay / 1000 }}
  >
    <div className="relative bg-white border border-syncops-primary-100 rounded-xl p-8 text-center shadow-lg hover:shadow-syncops hover:scale-105 transform transition-all duration-300 overflow-hidden">
      {/* Icon */}
      <div className="relative z-10 text-3xl text-syncops-primary-500 mb-4 flex justify-center">
        {icon}
      </div>
      {/* Metric Number */}
      <div className="relative z-10 text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        <CountUp end={parseInt(value)} suffix={value.includes("+") ? "+" : value.includes("%") ? "%" : ""} />
      </div>
      {/* Label */}
      <div className="relative z-10 text-sm text-gray-500 font-medium">
        {label}
      </div>
    </div>
  </motion.div>
);

export default function Stats() {
  const stats = [
    { 
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      ), 
      value: "150", 
      label: "Projects Delivered" 
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ), 
      value: "20", 
      label: "Countries Served" 
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ), 
      value: "95", 
      label: "Client Retention", 
      suffix: "%" 
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ), 
      value: "5", 
      label: "Years of Consistent Growth" 
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Track Our Record
          </h2>
          <p className="text-lg text-syncops-primary-600 text-center mb-12 max-w-2xl mx-auto">
            SyncOps has consistently delivered measurable results for clients worldwide.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
