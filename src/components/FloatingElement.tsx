"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export default function FloatingElement({ 
  children, 
  intensity = 10, 
  duration = 3,
  className = "" 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
        rotate: [0, 1, -1, 0]
      }}
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
