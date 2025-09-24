import { Button } from "./ui/button";

export default function Footer() {
  const footerLinks = [
    "HOME", "ABOUT", "SERVICES", "PORTFOLIO", "BLOG", "CONTACT"
  ];
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <p className="text-white text-lg tracking-[6px] mb-2">
            SUBSCRIBE OUR NEWSLETTER
          </p>
          <p className="text-white/60 text-sm mb-6">
            Receive the latest news covered!
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-l-lg focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-black hover:bg-gray-100 rounded-l-none rounded-r-lg px-6">
              SUBSCRIBE NOW
            </Button>
          </div>
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
