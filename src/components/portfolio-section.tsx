"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import BreathingElement from "./BreathingElement";
import ShimmerEffect from "./ShimmerEffect";

export default function PortfolioSection() {
  const portfolioItems = [
    { title: "Abstract Art", image: "/proj1.jpg" },
    { title: "Brand Identity", image: "/proj4.jpg" },
    { title: "Mobile Apps", image: "/proj2.jpg" },
    { title: "Product Design", image: "/proj5.jpg" },
    { title: "Interior Design", image: "/proj3.jpg" },
    { title: "App Interface", image: "/proj6.jpg" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <SectionHeading title="EVERY PROJECT REFLECTS VISION AND CREATIVITY" subtitle="OUR SELECTED WORKS" className="text-black" />
            
            <p className="text-gray-600 text-lg">
              FROM BRANDING AND IDENTITY TO HIGH-PERFORMING WEBSITES.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Masonry Layout */}
        <div className="columns-1 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="break-inside-avoid mb-6 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <BreathingElement intensity={0.01} duration={4}>
                <div className="bg-white rounded-lg overflow-hidden hover-lift">
                  <div className="relative overflow-hidden">
                    <ShimmerEffect duration={3}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image} 
                          alt={item.title}
                          width={"353"}
                          height={"100"}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </ShimmerEffect>
                  <motion.div 
                    className="absolute inset-0 bg-black/0"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white/90 px-4 py-2 rounded-full"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-black font-medium">View Project</span>
                    </motion.div>
                  </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black mb-1 text-center">{item.title}</h3>
                  </div>
                </div>
              </BreathingElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
