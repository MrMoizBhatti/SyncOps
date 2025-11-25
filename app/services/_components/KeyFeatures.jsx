"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fallbackColor = "#00B894";

const KeyFeatures = ({ features = [], accentColor = fallbackColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
    >
      {features.map((feature, index) => (
        <motion.div
          key={`${feature?.title ?? "feature"}-${index}`}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-4">
            <CheckCircle
              className="w-6 h-6 mr-2 flex-shrink-0"
              style={{ color: accentColor }}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {feature?.title}
            </h3>
          </div>
          <p className="text-gray-600 flex-grow text-balance leading-relaxed">
            {feature?.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default KeyFeatures;

