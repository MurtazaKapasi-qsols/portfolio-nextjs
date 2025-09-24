"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function HeroSection() {
  const handleScrollDown = () => {
    smoothScrollTo('partners');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h5 
            className="text-white text-sm font-medium tracking-[4px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BRANDING / DESIGN / DEVELOPMENT
          </motion.h5>
          
          <motion.h2 
            className="text-white text-5xl tracking-[10px] my-14"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            WEB ARCHITECTS
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/90 font-light mb-12 tracking-[5px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            WE BUILD YOUR DIGITAL FUTURE
          </motion.p>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <motion.button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>
    </section>
  );
}
