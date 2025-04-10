
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Strategy & AI
              <span className="block text-brand-purple mt-2">Consultancy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Helping businesses leverage data analytics and artificial intelligence to solve complex strategic challenges and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#case-studies" 
                className="bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="bg-brand-light-purple hover:bg-brand-light-purple/80 text-brand-purple px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-brand-light-purple w-16 h-16 flex items-center justify-center rounded-full">
                  <span className="font-playfair font-bold text-brand-purple">10+</span>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-brand-purple p-4 rounded-lg shadow-lg">
                <p className="text-white text-sm font-medium">Strategic Solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 md:mt-16 animate-fade-in">
          <a 
            href="#case-studies" 
            className="text-gray-600 hover:text-brand-purple transition-colors flex flex-col items-center"
          >
            <span className="mb-2">Scroll to explore</span>
            <ArrowDownCircle className="animate-bounce" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
