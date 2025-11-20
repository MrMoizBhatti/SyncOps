"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useAnimatedCounter(targetValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });
  const hasAnimated = useRef(false);
  
  // Extract format info from target value
  const hasPlus = targetValue.includes("+");
  const hasPercent = targetValue.includes("%");
  const numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (numericValue - startValue) * easeOut;
      
      if (progress < 1) {
        setCount(currentValue);
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);

  const formatValue = (value) => {
    if (hasPlus && value >= 1000) {
      return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K+`;
    }
    if (hasPercent) {
      return `${value.toFixed(value % 1 === 0 ? 0 : 1)}%`;
    }
    if (hasPlus) {
      return `${Math.round(value)}+`;
    }
    return value.toFixed(value % 1 === 0 ? 0 : 1);
  };

  return { count: formatValue(count), ref };
}

