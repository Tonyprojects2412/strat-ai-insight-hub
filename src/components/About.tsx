
import React from 'react';
import { FileText, Target, BarChart3, Lightbulb, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-brand-light-gray">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 font-playfair">Professional Bio</h3>
              <p className="text-gray-600 mb-6">
                I'm a business strategy and artificial intelligence consultant with over 10 years of experience helping organizations leverage data and advanced technologies to solve complex business challenges. My background combines strategic management consulting with deep technical expertise in data analytics and AI.
              </p>
              
              <p className="text-gray-600 mb-6">
                I've worked with Fortune 500 companies, startups, and non-profit organizations across industries including retail, finance, healthcare, and manufacturing. My approach bridges the gap between technical capabilities and business objectives, ensuring that AI and analytics initiatives deliver tangible value.
              </p>
              
              <p className="text-gray-600">
                Previously, I served as the Director of Data Science at [Company Name] and was a Senior Consultant at [Consulting Firm]. I hold an MBA from [University] and a Bachelor's degree in Computer Science from [University]. I'm also certified in [Relevant Certifications].
              </p>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-2.5 bg-brand-purple text-white rounded-md hover:bg-brand-purple/90 transition-colors"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <div className="flex items-start">
                  <div className="bg-brand-light-purple p-3 rounded-md mr-4">
                    <Target className="text-brand-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
                    <p className="text-gray-600 text-sm">
                      Currently focused on implementing ethical AI solutions for sustainable business growth and exploring the intersection of strategy and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <div className="flex items-start">
                  <div className="bg-brand-light-purple p-3 rounded-md mr-4">
                    <Lightbulb className="text-brand-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Data-driven decision making</li>
                      <li>• Human-centered technology</li>
                      <li>• Continuous learning & adaptation</li>
                      <li>• Ethical AI implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Strategic Planning</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className="w-full bg-brand-light-gray rounded-full h-2">
                    <div className="bg-brand-purple h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Analytics</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-brand-light-gray rounded-full h-2">
                    <div className="bg-brand-purple h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">AI Implementation</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-brand-light-gray rounded-full h-2">
                    <div className="bg-brand-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Project Management</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-brand-light-gray rounded-full h-2">
                    <div className="bg-brand-purple h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-brand-purple pl-4 py-1">
                  <h4 className="text-lg font-medium">MBA, Business Administration</h4>
                  <p className="text-gray-600 text-sm">University Name</p>
                  <p className="text-gray-500 text-xs">2015 - 2017</p>
                </div>
                
                <div className="border-l-2 border-brand-purple pl-4 py-1">
                  <h4 className="text-lg font-medium">BSc, Computer Science</h4>
                  <p className="text-gray-600 text-sm">University Name</p>
                  <p className="text-gray-500 text-xs">2011 - 2015</p>
                </div>
                
                <div className="border-l-2 border-brand-purple pl-4 py-1">
                  <h4 className="text-lg font-medium">Certifications</h4>
                  <ul className="text-gray-600 text-sm">
                    <li>• Certified Data Scientist (CDS)</li>
                    <li>• Project Management Professional (PMP)</li>
                    <li>• Machine Learning Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
