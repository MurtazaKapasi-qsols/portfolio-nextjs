"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PulsingElementProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export default function PulsingElement({ 
  children, 
  scale = 1.05, 
  duration = 2,
  className = "" 
}: PulsingElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        scale: [1, scale, 1]
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
