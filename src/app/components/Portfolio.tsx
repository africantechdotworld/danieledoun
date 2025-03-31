'use client'

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink, Code, Star, User, Briefcase, Download, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import MainPageMobileMenu from './MainPageMobileMenu';
import Image from 'next/image';
import isaacRufus from '../../assets/rufus.jpg';

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

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Determine if we're on the projects page
  const [isProjectsPage, setIsProjectsPage] = useState(false);
  
  // We'll add more projects for the dedicated projects page
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
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechVentures",
      content: "John delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are exceptional.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      position: "Founder, StartupHub",
      content: "Working with John was a pleasure. He understood our vision and transformed it into a beautiful, functional application that our users love.",
      avatar: "/api/placeholder/80/80"
    }
  ];

  const skills = {
    frontend: ["React", "React Native", "Flutter", "JavaScript", "TypeScript", "HTML5/CSS3"],
    backend: ["Node.js", "Python", "Java", "RESTful APIs", "GraphQL"],
    database: ["MongoDB", "PostgreSQL", "Firebase"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
  };

  const experience = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of multiple web and mobile applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      position: "Mobile App Developer",
      company: "AppWorks Studio",
      period: "2020 - 2022",
      description: "Developed cross-platform mobile applications using React Native and Flutter for various clients in e-commerce and healthcare sectors."
    }
  ];

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

  // Display only limited projects on main page
  const displayedProjects = isProjectsPage 
    ? projects 
    : projects.slice(0, 3);

  // Effect to check if we're on the projects page
  React.useEffect(() => {
    // Simple check for current path - modify based on your routing structure
    setIsProjectsPage(window.location.pathname.includes('/projects'));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-20">
          <span className="text-xl font-bold">Isaac Rufus</span>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-blue-200 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="hover:text-blue-200 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
              </a>
              <a href="#skills" className="hover:text-blue-200 transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
              </a>
              <a href="#experience" className="hover:text-blue-200 transition-colors relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-blue-200 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
              </a>
            </div>
            <ThemeToggle />
            <MainPageMobileMenu />
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-left md:pr-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Developer</h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Crafting exceptional web and mobile experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a href="/resume.pdf" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 shadow-lg"></div>
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <img 
                  src={isaacRufus.src} 
                  alt="Isaac Rufus" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x400/2563eb/ffffff?text=Rufus';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="fill-current text-slate-50 dark:text-gray-900" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 120"
          >
            <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full -mr-32 -mt-32 opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Passionate developer with 5+ years of experience creating web and mobile applications. I specialize in building responsive, accessible, and user-friendly digital experiences.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                What I Do
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-700">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Building responsive, accessible websites and web applications using modern frameworks.</p>
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-700">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Mobile App Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creating cross-platform mobile applications with React Native and Flutter.</p>
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-700">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Backend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Designing and implementing scalable APIs and server architectures.</p>
                </div>
                <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-700">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">UI/UX Design</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creating intuitive user interfaces and seamless user experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12 rounded-full"></div>
          
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
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          {/* Show "See All Projects" button on main page */}
          {!isProjectsPage && (
            <div className="mt-12 text-center">
              <Link href="/projects" passHref>
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md">
                  See All Projects
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 container mx-auto px-6 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-6 capitalize text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">{category}</h3>
                <ul className="space-y-3">
                  {skillList.map((skill: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="font-medium">{skill}</span>
                      <div className="ml-auto w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline */}
                <div className="absolute top-0 left-0 h-full w-px bg-blue-600 dark:bg-blue-500"></div>
                <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 ml-4">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.position}</h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full">{job.period}</span>
                  </div>
                  <h4 className="text-gray-900 dark:text-gray-300 font-medium mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {job.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Client Testimonials</h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative">
              {/* Quote Mark */}
              <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M11 9.275C11 13.076 8.599 16.962 5 18v-2c2.052-0.8 3.104-2.753 3.137-4.93h-3.137v-6.07h6v5.275zM22 9.275C22 13.076 19.599 16.962 16 18v-2c2.052-0.8 3.104-2.753 3.137-4.93h-3.137v-6.07h6v5.275z"/>
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 z-10 relative">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/48x48/2563eb/ffffff?text=${testimonial.name.charAt(0)}`;
                  }}
                />
                <div>
                  <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:john@example.com" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>john@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="https://github.com" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Github className="w-6 h-6" />
                  </div>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    placeholder="your@email.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
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

export default Portfolio;