
import React, { useState } from 'react';
import { Mail, Linkedin, AlertCircle, CheckCircle, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Success toast notification
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        icon: <CheckCircle className="h-4 w-4" />,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Interested in working together? Whether you have a project in mind or just want to connect, I'd love to hear from you. Fill out the form below or reach out directly via email or LinkedIn.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-brand-light-gray rounded-lg p-8 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6 font-playfair">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md shadow-sm mr-4">
                      <Mail className="text-brand-purple" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email Address</h4>
                      <a href="mailto:contact@example.com" className="text-brand-purple hover:underline">contact@example.com</a>
                      <p className="text-sm text-gray-500 mt-1">Response time: 1-2 business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-md shadow-sm mr-4">
                      <Linkedin className="text-brand-purple" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">LinkedIn</h4>
                      <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">linkedin.com/in/username</a>
                      <p className="text-sm text-gray-500 mt-1">Connect professionally</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <AlertCircle className="text-brand-purple mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Looking for consulting services?</h4>
                    <p className="text-gray-600 text-sm">
                      If you're interested in strategic consulting or AI implementation services, please include details about your project scope, timeline, and objectives in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
