"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
import PulsingElement from "./PulsingElement";

export default function FinalCtaSection() {
  return (
    <section id="contact" className="pb-20 bg-white relative overflow-hidden">
      {/* Continuous floating decorative elements */}
      
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection direction="up" delay={0.2}>
            <SectionHeading title="LET'S MAKE AN IMPACT TOGETHER" />
          </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PulsingElement scale={1.05} duration={2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-black text-white hover:bg-white hover:text-black hover:border-black px-8 py-3">
                    CONTACT US TODAY
                  </Button>
                </motion.div>
              </PulsingElement>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
