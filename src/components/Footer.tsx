
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-white font-playfair text-xl font-bold">
              Strategy<span className="text-brand-purple">AI</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Business Strategy & AI Consulting
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Navigation</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <a href="#home" className="text-gray-300 hover:text-white text-sm">Home</a>
                <a href="#case-studies" className="text-gray-300 hover:text-white text-sm">Case Studies</a>
                <a href="#ba-projects" className="text-gray-300 hover:text-white text-sm">BA Projects</a>
                <a href="#ai-projects" className="text-gray-300 hover:text-white text-sm">AI Projects</a>
                <a href="#blog" className="text-gray-300 hover:text-white text-sm">Blog</a>
                <a href="#about" className="text-gray-300 hover:text-white text-sm">About</a>
                <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} StrategyAI Consulting. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
