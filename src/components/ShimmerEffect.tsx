"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ShimmerEffectProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function ShimmerEffect({ 
  children, 
  duration = 2,
  className = "" 
}: ShimmerEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {isInView && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
}
