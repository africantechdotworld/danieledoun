'use client'

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowLeft, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects: Project[] = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured mobile shopping app built with React Native and Node.js. Includes user authentication, product catalog, shopping cart, and payment integration.",
      tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Task Management Platform",
      description: "Web-based project management tool with real-time updates, team collaboration features, and automated workflow capabilities.",
      tags: ["React", "Firebase", "Material UI", "WebSocket"],
      demoUrl: "https://demo.example.com/taskmanager",
      githubUrl: "https://github.com/example/taskmanager",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Health & Fitness Tracker",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      tags: ["Flutter", "Firebase", "REST API", "Charts"],
      demoUrl: "https://demo.example.com/fitness",
      githubUrl: "https://github.com/example/fitness",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for tracking social media performance across multiple platforms.",
      tags: ["Vue.js", "D3.js", "Node.js", "OAuth"],
      demoUrl: "https://demo.example.com/social-dashboard",
      githubUrl: "https://github.com/example/social-dashboard",
      image: "/api/placeholder/600/400"
    },
    {
      title: "AI-Powered Content Generator",
      description: "Web application using OpenAI APIs to generate marketing content, blog posts, and social media updates.",
      tags: ["React", "OpenAI API", "Express", "MongoDB"],
      demoUrl: "https://demo.example.com/ai-content",
      githubUrl: "https://github.com/example/ai-content",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Smart Home IoT Hub",
      description: "Mobile app and web dashboard to control and monitor IoT devices in a smart home environment.",
      tags: ["React Native", "IoT", "WebSockets", "GraphQL"],
      demoUrl: "https://demo.example.com/smart-home",
      githubUrl: "https://github.com/example/smart-home",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Personal Finance Tracker",
      description: "Web and mobile application for tracking expenses, investments, and financial goals with visualization tools.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      demoUrl: "https://demo.example.com/finance",
      githubUrl: "https://github.com/example/finance",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Restaurant Ordering System",
      description: "Mobile and web platform for restaurant menu browsing, ordering, and payment processing.",
      tags: ["React Native", "Firebase", "Stripe", "Node.js"],
      demoUrl: "https://demo.example.com/restaurant",
      githubUrl: "https://github.com/example/restaurant",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Travel Itinerary Planner",
      description: "AI-enhanced travel planning application with itinerary building, recommendations, and booking integration.",
      tags: ["Next.js", "Google Maps API", "TensorFlow", "MongoDB"],
      demoUrl: "https://demo.example.com/travel",
      githubUrl: "https://github.com/example/travel",
      image: "/api/placeholder/600/400"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeTab === 'web') return project.tags.some(tag => ['React', 'Vue.js', 'Next.js'].includes(tag));
        if (activeTab === 'mobile') return project.tags.some(tag => ['React Native', 'Flutter'].includes(tag));
        return true;
      });

  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x400/2563eb/ffffff?text=${project.title.replace(/\s+/g, '+')}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-grow p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, tagIndex: number) => (
                <span 
                  key={tagIndex} 
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" passHref>
            <span className="text-xl font-bold">Isaac Rufus</span>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link href="/#about" className="hover:text-blue-200 transition-colors">About</Link>
              <Link href="/#projects" className="hover:text-blue-200 transition-colors">Projects</Link>
              <Link href="/#skills" className="hover:text-blue-200 transition-colors">Skills</Link>
              <Link href="/#contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            </div>
            <ThemeToggle />
            <MobileMenu isMainPage={false} />
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A collection of my work spanning web and mobile development
          </p>
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/" passHref>
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Projects Section */}
      <section className="py-8 container mx-auto px-6">
        {/* Project Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('web')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'web' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveTab('mobile')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              Mobile
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Isaac Rufus</h3>
              <p className="text-gray-400 mt-1">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:john@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <hr className="border-gray-800 my-6" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Isaac Rufus. All rights reserved.</p>
            <p className="mt-2">Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;