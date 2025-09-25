"use client"

import { useState } from "react";
import { Button } from "./ui/button";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const footerLinks = [
    "HOME", "ABOUT", "SERVICES", "PORTFOLIO", "BLOG", "CONTACT"
  ];
  

  // Email state & validation
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      setSubmitted(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    // Simulate submit success
    setError("");
    setSubmitted(true);
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input
  };

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <p className="text-white text-lg tracking-[2px] md:tracking-[5px] mb-2">
            SUBSCRIBE OUR NEWSLETTER
          </p>
          <p className="text-white/60 text-sm mb-6">
            Receive the latest news covered!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(""); // Clear error on input change
              }}
              className={`flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border ${
                error ? "border-red-500" : "border-gray-700"
              } rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:border-white`}
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-100 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none px-6 mt-2 sm:mt-0"
            >
              SUBSCRIBE NOW
            </Button>
          </form>
          {/* Validation/Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {submitted && !error && (
            <p className="text-green-500 text-sm mt-2">Thank you for subscribing!</p>
          )}
        </div>

        {/* Navigation */}
        <div className="text-center mb-8">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/50 text-xs">
            © {currentYear} Company Name. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

