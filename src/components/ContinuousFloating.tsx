"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ContinuousFloatingProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export default function ContinuousFloating({ 
  children, 
  intensity = 10, 
  duration = 3,
  className = "" 
}: ContinuousFloatingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        y: [0, -intensity, 0],
        zoom: [1, 1.01, 1],
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
