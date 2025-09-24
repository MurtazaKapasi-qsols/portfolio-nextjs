"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolio } from "@/hooks/usePortfolio";
import { PortfolioProject } from "@/lib/contentful-types";
import { getOptimizedImageUrl } from "@/lib/contentful";
import AnimatedSection from "../AnimatedSection";
import BreathingElement from "../BreathingElement";
import ShimmerEffect from "../ShimmerEffect";
import SectionHeading from "../sectionHeading";

interface PortfolioGridProps {
  limit?: number;
  category?: string;
  featured?: boolean;
}

export default function PortfolioGrid({ 
  limit = 6, 
  category, 
  featured 
}: PortfolioGridProps) {
  const { projects, loading } = usePortfolio({
    limit,
    'fields.category': category,
    'fields.featured': featured,
		order: '-fields.sortingOrder'
  });

 
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
			</div>

			{loading ? (
				<div className="columns-1 lg:columns-3 gap-6 max-w-6xl mx-auto">
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index} className="break-inside-avoid mb-6">
							<div className="bg-gray-200 rounded-lg h-64 animate-pulse" />
						</div>
					))}
				</div>
			) : (
				<div className="columns-1 lg:columns-3 gap-6 max-w-6xl mx-auto">
					{projects.map((project, index) => (
						<PortfolioCard 
							key={project.sys.id} 
							project={project} 
							index={index} 
						/>
					))}
				</div>
			)}
		</section>
      
  );
}

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  const { fields } = project;
  const featuredImage = fields.projectThumbnail || fields.featuredImage;
  const imageUrl = featuredImage ? getOptimizedImageUrl(featuredImage, 400) : '/placeholder.jpg';

  return (
    <>
		
    <motion.div 
        key={project.sys.id} 
        className="break-inside-avoid mb-6 group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
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
									src={imageUrl} 
									alt={fields.title}
									width={353}
									height={100}
									className="w-full h-auto object-cover"
									loading="lazy"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
						<h3 className="text-lg font-semibold text-black mb-1 text-center">{fields.title}</h3>
					</div>
				</div>
			</BreathingElement>
		</motion.div>
    {/* <motion.div 
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
                  src={imageUrl}
                  alt={fields.title}
                  width={400}
                  height={300}
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
            <h3 className="text-lg font-semibold text-black mb-1 text-center">
              {fields.title}
            </h3>
            {fields.category && (
              <p className="text-sm text-gray-500 text-center mb-2">
                {fields.category}
              </p>
            )}
            {fields.technologies && fields.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-center">
                {fields.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                  <span 
                    key={techIndex}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {fields.technologies.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{fields.technologies.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </BreathingElement>
    </motion.div> */}
    </>
  );
}
