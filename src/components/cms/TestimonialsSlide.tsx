"use client"

import { useTestimonials } from "@/hooks/useTestimonials";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../sectionHeading";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { getOptimizedImageUrl } from "@/lib/contentful";

export default function TestimonialsSlide() {
	const { testimonials, loading } = useTestimonials();
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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
						{testimonials.map((testimonial, index) => {
							const featuredImage = testimonial.fields.image;
							const imageUrl = featuredImage ? getOptimizedImageUrl(featuredImage, 400) : '';
							return (
								<motion.button
									key={testimonial.sys.id}
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
										<Image src={imageUrl} alt={testimonial.fields.name} width={50} height={50} />
									</div>
								</motion.button>
							)
						})}
					</motion.div>
					
					{/* Testimonial */}
					{!loading && (
						<div className="text-center relative min-h-[300px]">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentTestimonial}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -50 }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
								>
									<blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic min-h-[120px] flex items-center justify-center">
										&ldquo;{current.fields.content}&rdquo;
									</blockquote>
									<div className="mb-8">
										<p className="text-white font-semibold text-lg">{current.fields.name}</p>
										<p className="text-white/70 text-sm">{current.fields.designation}, {current.fields.company}</p>
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
									// whileTap={{ scale: 0.95 }}
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
					)}
				</div>
			</div>
		</section>
	);
}