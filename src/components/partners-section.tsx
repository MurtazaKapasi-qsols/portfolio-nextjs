"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./sectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function PartnersSection() {
  const partnerImages = [
    { src: "/vision1.jpg", alt: "Vision 1", width: 141, height: 100 },
    { src: "/vision2.jpg", alt: "Vision 2", width: 209, height: 100 },
    { src: "/vision3.jpg", alt: "Vision 3", width: 209, height: 100 },
    { src: "/vision4.jpg", alt: "Vision 4", width: 152, height: 100 }
  ];

  return (
    <section id="partners" className="bg-white">
      <div className="container">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <SectionHeading title="YOUR PARTNERS IN DIGITAL SUCCESS" subtitle="WE BRING YOUR VISION TO LIFE" />
          </div>
        </AnimatedSection>
        
        <div className="flex justify-center items-center gap-10">
          {partnerImages.map((image, index) => (
            <motion.div 
              key={index}
              className="image-col relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="image-wrapper rounded-2xl overflow-hidden hover-lift">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={image.width} 
                    height={image.height} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
