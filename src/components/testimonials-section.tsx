"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./sectionHeading";
import AnimatedSection from "./AnimatedSection";
import WaveAnimation from "./WaveAnimation";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "JONATHAN SMITH",
      position: "CEO",
      company: "TECH INNOVATIONS",
      quote: "Working with this team has been an incredible experience. Their attention to detail and creative vision transformed our brand completely. The results exceeded our expectations and helped us achieve our business goals.",
      image: "/user1.jpg"
    },
    {
      id: 2,
      name: "SARAH JOHNSON",
      position: "FOUNDER",
      company: "CREATIVE STUDIO",
      quote: "The level of professionalism and creativity this team brings is unmatched. They understood our vision from day one and delivered beyond what we could have imagined. Highly recommended!",
      image: "/user2.jpg"
    },
    {
      id: 3,
      name: "MICHAEL CHEN",
      position: "DIRECTOR",
      company: "DIGITAL AGENCY",
      quote: "Outstanding work! They transformed our digital presence and helped us reach new heights. The team's expertise in both design and development is truly impressive.",
      image: "/user3.jpg"
    },
    {
      id: 4,
      name: "EMMA WILSON",
      position: "MARKETING HEAD",
      company: "BRAND SOLUTIONS",
      quote: "From concept to execution, every step was handled with precision and creativity. Our brand has never looked better, and the results speak for themselves.",
      image: "/user4.jpg"
    },
    {
      id: 5,
      name: "DAVID BROWN",
      position: "CTO",
      company: "STARTUP VENTURES",
      quote: "The technical expertise combined with creative vision is exactly what we needed. They delivered a solution that not only looks amazing but performs flawlessly.",
      image: "/user4.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <SectionHeading title="TRUSTED BY LEADING EXPERTS" subtitle="OUR CLIENTS TESTIMONIALS" className="text-white" />
          </div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          {/* Client photos */}
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => selectTestimonial(index)}
                className={`cursor-pointer w-12 h-12 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "ring-2 ring-white scale-110"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center">
                  <Image src={`${testimonial.image}`} alt={testimonial.name} width={50} height={50} />
                </div>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Testimonial */}
          <div className="text-center relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <WaveAnimation intensity={3} duration={4}>
                  <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic min-h-[120px] flex items-center justify-center">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </WaveAnimation>
                <div className="mb-8">
                  <p className="text-white font-semibold text-lg">{current.name}</p>
                  <p className="text-white/70 text-sm">{current.position}, {current.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
