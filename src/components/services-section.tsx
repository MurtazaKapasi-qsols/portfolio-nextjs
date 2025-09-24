"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

export default function ServicesSection() {
  const services = [
    { title: "BRAND STRATEGY", description: "We help you create a brand strategy that helps your business grow." },
    { title: "WEB DESIGN", description: "We create beautiful and functional websites that help your business grow." },
    { title: "ART DIRECTION", description: "We help you create a unique and engaging brand identity that stands out from the competition." },
    { title: "WEB DEVELOPMENT", description: "We develop custom websites that are tailored to your business needs." },
    { title: "MARKETING", description: "We help you create a marketing strategy that helps your business grow." },
  ];

  return (
    <section className="py-20 bg-white md:mx-14 relative overflow-hidden">
      {/* Floating decorative elements */}
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div>
              <SectionHeading title="WHAT WE CAN DO FOR YOU" subtitle="OUR SERVICES" isSideHeading={true} />
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We offer comprehensive digital solutions to help your business thrive 
                in the modern marketplace. From strategic branding to technical 
                implementation, we cover every aspect of your digital presence.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.4}>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-medium text-black hover:text-gray-600 transition-colors py-4 hover:no-underline">
                        {service.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                        {service.description}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
