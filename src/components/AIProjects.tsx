
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface AIProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

const AI_PROJECTS: AIProject[] = [
  {
    id: 1,
    title: "AI-Powered Customer Sentiment Analyzer",
    description: "A natural language processing tool that analyzes customer feedback from multiple channels to identify sentiment trends and key topics.",
    technologies: ["Python", "TensorFlow", "BERT", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://demo-site.com"
  },
  {
    id: 2,
    title: "Predictive Maintenance Dashboard",
    description: "A machine learning system that predicts equipment failures before they occur by analyzing sensor data patterns.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Vue.js", "Docker"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Smart Inventory Optimization",
    description: "An AI application that optimizes inventory levels based on seasonal demand patterns, supplier lead times, and market trends.",
    technologies: ["Python", "PyTorch", "Django", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://demo-site.com"
  }
];

const AIProjects = () => {
  return (
    <section id="ai-projects" className="bg-brand-light-gray">
      <div className="section-container">
        <h2 className="section-title">AI App Projects</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Innovative applications leveraging artificial intelligence and machine learning to solve real-world business problems. These projects demonstrate practical AI implementations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-in card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-brand-dark-gray mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-brand-light-purple text-brand-purple px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-brand-dark-gray hover:text-brand-purple transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    View Code
                  </a>
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-brand-dark-gray hover:text-brand-purple transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
