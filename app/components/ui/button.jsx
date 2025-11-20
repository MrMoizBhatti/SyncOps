"use client";
import React from "react";
import { motion } from "framer-motion";
import SafeLink from "./SafeLink";

const Button = ({ href, text, icon: Icon, onClick, className, target }) => {
  return (
    <SafeLink href={href} onClick={onClick} target={target}>
      <motion.div
        className={`inline-flex items-center bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
        {Icon && <Icon className="ml-2 w-5 h-5" />}
      </motion.div>
    </SafeLink>
  );
};

export default Button;
