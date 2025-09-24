"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveUpRight, Menu, X } from "lucide-react";
import Navigation from "./navigation";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on link click
  const handleLinkClick = () => setSidebarOpen(false);

  return (
    <header id="header" className="absolute top-0 left-0 right-0 z-50 py-6 bg-gray-900/80 backdrop-blur-sm">
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

          {/* Desktop navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Navigation onLinkClick={handleLinkClick} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button asChild className="text-white border-white">
              <Link href="#">Get in touch <MoveUpRight /></Link>
            </Button>
          </motion.div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.aside
              className="fixed h-screen bg-gray-900 top-0 left-0 bottom-0 w-64 bg-gray-900 z-50 p-6"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "tween" }}
            >
              {/* Close button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="self-end p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white mb-6"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation (vertical menu) */}
              <Navigation onLinkClick={handleLinkClick} mobile />

              {/* Get in touch button */}
              <Button asChild className="mt-auto text-white border-white w-full">
                <Link href="#" onClick={() => setSidebarOpen(false)}>
                  Get in touch <MoveUpRight />
                </Link>
              </Button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
