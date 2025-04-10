
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Digital Transformation Strategy",
    client: "Retail Enterprise",
    description: "Developed and implemented a comprehensive digital transformation strategy for a national retail chain.",
    challenge: "Declining foot traffic and competition from e-commerce giants threatened the client's business model.",
    solution: "Created an omnichannel strategy that integrated physical stores with digital platforms, enhancing customer experience across touchpoints.",
    result: "30% increase in online sales and 15% growth in customer retention within the first year of implementation.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "AI-Driven Supply Chain Optimization",
    client: "Manufacturing Company",
    description: "Redesigned supply chain processes using machine learning and predictive analytics.",
    challenge: "Inefficiencies in inventory management and distribution network were increasing operational costs.",
    solution: "Implemented an AI solution to predict demand patterns and optimize inventory levels and logistics routes.",
    result: "22% reduction in inventory costs and 35% decrease in stockout incidents.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Customer Insights & Personalization Engine",
    client: "Financial Services Provider",
    description: "Built a customer insights platform to enable personalized financial product offerings.",
    challenge: "Generic marketing approaches were leading to low conversion rates and customer engagement.",
    solution: "Developed a machine learning model that analyzed customer behavior and transaction history to provide tailored recommendations.",
    result: "45% improvement in campaign conversion rates and 28% increase in customer lifetime value.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-brand-light-gray">
      <div className="section-container">
        <h2 className="section-title">Consulting Case Studies</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Strategic business transformations powered by data analytics and AI technologies. These selected case studies demonstrate how I've helped organizations solve complex challenges.
        </p>
        
        <div className="space-y-16">
          {CASE_STUDIES.map((study, index) => (
            <div 
              key={study.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={`animate-fade-in ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{study.title}</h3>
                    <span className="bg-brand-purple/10 text-brand-purple text-sm font-medium py-1 px-3 rounded-full">
                      {study.client}
                    </span>
                  </div>
                  <p className="text-gray-600">{study.description}</p>
                  
                  <div className="bg-white rounded-lg p-5 shadow-sm space-y-4 mt-4">
                    <div>
                      <h4 className="font-medium text-brand-dark-gray">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-dark-gray">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-dark-gray">Result:</h4>
                      <p className="text-gray-600 text-sm">{study.result}</p>
                    </div>
                  </div>
                  
                  <button className="group inline-flex items-center text-brand-purple hover:underline mt-2">
                    View full case study 
                    <ArrowUpRight size={18} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
