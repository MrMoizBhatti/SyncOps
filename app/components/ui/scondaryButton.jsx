"use client";
import React from "react";
import { motion } from "framer-motion";
import SafeLink from "./SafeLink";

const SecondaryButton = ({ href, text, onClick, className }) => {
  return (
    <SafeLink href={href} onClick={onClick}>
      <motion.div
        className={`inline-flex items-center border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.div>
    </SafeLink>
  );
};

export default SecondaryButton;
