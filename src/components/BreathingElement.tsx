"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BreathingElementProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export default function BreathingElement({ 
  children, 
  intensity = 0.02, 
  duration = 4,
  className = "" 
}: BreathingElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        scale: [1, 1 + intensity, 1],
        opacity: [0.8, 1, 0.8]
      } : {}}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
