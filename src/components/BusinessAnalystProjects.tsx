
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Database, FileText, LineChart, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  challenge: string;
  tools: string[];
  result: string;
  chartData?: any[];
}

const BA_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Market Segmentation Analysis",
    description: "Comprehensive market segmentation for a B2B SaaS company to identify high-value customer segments.",
    challenge: "The client needed to identify which customer segments provided the highest ROI for targeted marketing campaigns.",
    tools: ["Tableau", "Python (Scikit-learn)", "SQL", "Excel"],
    result: "Identified 3 key customer segments with 40% higher lifetime value than average customers.",
    chartData: [
      { name: 'Segment A', value: 85 },
      { name: 'Segment B', value: 65 },
      { name: 'Segment C', value: 40 },
      { name: 'Segment D', value: 25 },
    ]
  },
  {
    id: 2,
    title: "Sales Forecasting Model",
    description: "Built a predictive forecasting model for quarterly sales projections with 92% accuracy.",
    challenge: "Inconsistent sales forecasting was hampering inventory management and business planning.",
    tools: ["R", "Power BI", "Excel", "Statistical Modeling"],
    result: "Improved forecast accuracy by 27% resulting in $1.2M cost savings through optimized inventory.",
    chartData: [
      { name: 'Q1', actual: 42, forecast: 45 },
      { name: 'Q2', actual: 58, forecast: 55 },
      { name: 'Q3', actual: 73, forecast: 70 },
      { name: 'Q4', actual: 91, forecast: 95 },
    ]
  },
  {
    id: 3,
    title: "Process Optimization Analysis",
    description: "End-to-end analysis of operational processes to identify bottlenecks and improvement opportunities.",
    challenge: "Operational inefficiencies were increasing costs and affecting customer satisfaction.",
    tools: ["Process Mining", "Visio", "SQL", "Lean Six Sigma"],
    result: "Reduced process cycle time by 35% and operational costs by 22%.",
    chartData: [
      { name: 'Step 1', before: 24, after: 12 },
      { name: 'Step 2', before: 18, after: 10 },
      { name: 'Step 3', before: 29, after: 22 },
      { name: 'Step 4', before: 32, after: 18 },
    ]
  }
];

const ToolIcon = ({ tool }: { tool: string }) => {
  switch (tool.toLowerCase()) {
    case 'tableau':
    case 'power bi':
    case 'charts':
      return <LineChart size={16} className="mr-1" />;
    case 'python (scikit-learn)':
    case 'python':
    case 'r':
      return <FileText size={16} className="mr-1" />;
    case 'sql':
    case 'database':
      return <Database size={16} className="mr-1" />;
    case 'excel':
    case 'spreadsheet':
    case 'statistical modeling':
      return <FileSpreadsheet size={16} className="mr-1" />;
    default:
      return <CheckCircle2 size={16} className="mr-1" />;
  }
};

const BusinessAnalystProjects = () => {
  const [activeProject, setActiveProject] = useState<Project>(BA_PROJECTS[0]);

  return (
    <section id="ba-projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Business Analyst Projects</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Data-driven business analysis that transforms raw information into actionable insights. My approach combines statistical rigor with strategic context.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-4">
            {BA_PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`p-4 rounded-lg cursor-pointer transition-all card-hover ${
                  activeProject.id === project.id 
                    ? 'bg-brand-purple text-white shadow-md' 
                    : 'bg-brand-light-gray hover:bg-brand-light-purple'
                }`}
              >
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className={`text-sm ${activeProject.id === project.id ? 'text-white/80' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">{activeProject.title}</h3>
            
            <div className="mb-6">
              <h4 className="text-brand-dark-gray font-medium mb-2">Challenge:</h4>
              <p className="text-gray-600">{activeProject.challenge}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-brand-dark-gray font-medium mb-2">Tools Used:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brand-light-purple text-brand-purple"
                  >
                    <ToolIcon tool={tool} />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-brand-dark-gray font-medium mb-2">Data Visualization:</h4>
              <div className="h-64 bg-brand-light-gray rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  {activeProject.id === 1 ? (
                    <BarChart data={activeProject.chartData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#9b87f5" />
                    </BarChart>
                  ) : activeProject.id === 2 ? (
                    <BarChart data={activeProject.chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="actual" fill="#9b87f5" />
                      <Bar dataKey="forecast" fill="#E5DEFF" />
                    </BarChart>
                  ) : (
                    <BarChart data={activeProject.chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="before" fill="#9b87f5" />
                      <Bar dataKey="after" fill="#E5DEFF" />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h4 className="text-brand-dark-gray font-medium mb-2">Result:</h4>
              <p className="text-brand-purple font-medium">{activeProject.result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalystProjects;
