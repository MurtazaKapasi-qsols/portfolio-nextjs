"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header id="header" className="absolute top-0 left-0 right-0 z-50 py-6">
		<div className="container">
			<div className="flex justify-between items-center">
				<motion.div 
					className="flex items-center logo"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center space-x-2">
						<motion.img 
							src="/logoipsum.png" 
							alt="Logo" 
							className="w-8 h-8"
							whileHover={{ rotate: 360, scale: 1.1 }}
							transition={{ duration: 0.5 }}
						/>
						<span className="text-white text-xl uppercase tracking-[4px]">Logo</span>
					</div>
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Navigation />
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button asChild className="text-white border-white">
						<Link href="#">Get in touch <MoveUpRight /></Link>
					</Button>
				</motion.div>
			</div>
		</div>
    </header>
  )
}