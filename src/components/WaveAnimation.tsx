"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WaveAnimationProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export default function WaveAnimation({ 
  children, 
  intensity = 5, 
  duration = 2,
  className = "" 
}: WaveAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        y: [0, -intensity, 0, intensity, 0],
        rotate: [0, 2, 0, -2, 0]
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
