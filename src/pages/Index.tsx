
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import BusinessAnalystProjects from '../components/BusinessAnalystProjects';
import AIProjects from '../components/AIProjects';
import Blog from '../components/Blog';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <BusinessAnalystProjects />
        <AIProjects />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
