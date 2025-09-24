"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import PulsingElement from "./PulsingElement";

export default function StatsSection() {
  const stats = [
    { number: 15, suffix: "+", label: "YEARS OF EXPERIENCE" },
    { number: 75, suffix: "+", label: "SATISFIED CUSTOMERS" },
    { number: 250, suffix: "+", label: "SUCCESSFUL PROJECTS" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <p className="text-gray-600 text-sm font-medium tracking-wide mb-8">
              WE AREN&apos;T JUST ABOUT CREATING, IT&apos;S ABOUT MAKING A DIFFERENCE.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <PulsingElement key={index} scale={1.03} duration={2.5}>
              <motion.div 
                
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-black mb-4">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2}
                    className="text-5xl md:text-6xl font-bold text-black"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            </PulsingElement>
          ))}
        </div>
      </div>
    </section>
  );
}
