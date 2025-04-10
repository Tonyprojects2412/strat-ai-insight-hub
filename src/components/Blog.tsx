
import React, { useState } from 'react';
import { CalendarDays, Clock, Tag } from 'lucide-react';

type BlogTopic = 'all' | 'strategy' | 'analytics' | 'ai' | 'career';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: BlogTopic;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How AI is Transforming Strategic Decision-Making",
    excerpt: "Artificial intelligence is revolutionizing how executives make strategic decisions. Learn about the key technologies and implementation strategies.",
    date: "April 2, 2025",
    readTime: "8 min read",
    topic: "strategy",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Building Effective Data Dashboards for Business Users",
    excerpt: "The key principles of designing data visualizations that drive action. This guide covers best practices for dashboard design and user adoption.",
    date: "March 15, 2025",
    readTime: "6 min read",
    topic: "analytics",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "From Data Scientist to Strategic Advisor: Career Evolution",
    excerpt: "How to leverage your technical background to become a strategic advisor. Tips for communicating with executives and driving business value.",
    date: "February 28, 2025",
    readTime: "10 min read",
    topic: "career",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Practical Machine Learning: From Concept to Deployment",
    excerpt: "A step-by-step guide to implementing machine learning solutions that deliver real business value, from problem framing to production deployment.",
    date: "February 10, 2025",
    readTime: "12 min read",
    topic: "ai",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Digital Transformation: Beyond the Buzzwords",
    excerpt: "What real digital transformation looks like and how to lead effective change in your organization through a strategic, people-first approach.",
    date: "January 22, 2025",
    readTime: "7 min read",
    topic: "strategy",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "The Business Analyst's Guide to Process Mining",
    excerpt: "How process mining techniques can uncover hidden inefficiencies in your organization's workflows and drive continuous improvement initiatives.",
    date: "January 8, 2025",
    readTime: "9 min read",
    topic: "analytics",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const TOPICS = [
  { value: 'all', label: 'All Topics' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'ai', label: 'AI' },
  { value: 'career', label: 'Career' }
];

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic>('all');
  
  const filteredPosts = selectedTopic === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.topic === selectedTopic);

  return (
    <section id="blog" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        <p className="text-gray-600 max-w-3xl mb-8">
          Insights and analysis on business strategy, data analytics, and artificial intelligence. Practical advice for professionals and organizations.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {TOPICS.map((topic) => (
            <button
              key={topic.value}
              onClick={() => setSelectedTopic(topic.value as BlogTopic)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTopic === topic.value
                  ? 'bg-brand-purple text-white'
                  : 'bg-brand-light-gray hover:bg-brand-light-purple text-gray-600 hover:text-brand-purple'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center text-xs text-brand-purple bg-brand-light-purple px-3 py-1 rounded-full">
                    <Tag size={12} className="mr-1" />
                    {post.topic.charAt(0).toUpperCase() + post.topic.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center">
                    <CalendarDays size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border-2 border-brand-purple text-brand-purple rounded-md hover:bg-brand-purple hover:text-white transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
