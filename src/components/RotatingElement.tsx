"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RotatingElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function RotatingElement({ 
  children, 
  speed = 1,
  className = "" 
}: RotatingElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? {
        rotate: 360
      } : {}}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
}
