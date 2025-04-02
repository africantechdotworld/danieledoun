'use client'

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, User, Briefcase, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import MainPageMobileMenu from './MainPageMobileMenu';
import isaacRufus from '../../assets/rufus.jpg';
import menuflixer from '../../assets/projects/menuflixer-web.png';
import dropdeli from '../../assets/projects/dropdeli.png';
import africaFundMe from '../../assets/projects/afm-landing.png';
import dumpVideoDownloader from '../../assets/projects/dump-web.png';
import convert from '../../assets/projects/convert.svg';
import ImagePreviewModal from './ImagePreviewModal';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;  // Optional
  githubUrl?: string;  // Optional
  image: string;
  buttonType?: 'demo' | 'download' | 'none';  // New field to determine button type
  buttonText?: string;  // Custom button text
}

// Define the ProjectCard component outside the main component
const ProjectCard: React.FC<{
  project: Project;
  onImageClick: (url: string, title: string) => void;
}> = ({ project, onImageClick }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
    {/* Image with Overlay */}
    <div 
      className="relative h-48 overflow-hidden cursor-pointer"
      onClick={() => onImageClick(project.image, project.title)}
    >
      <Image
        src={project.image} 
        alt={project.title} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
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
    <div className="flex flex-col flex-grow p-6">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
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
      <div className="flex flex-wrap gap-4 mt-auto">
        {/* Primary Button (Demo/Download) */}
        {project.buttonType !== 'none' && project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {project.buttonText || (project.buttonType === 'download' ? 'Download App' : 'Live Demo')}
          </a>
        )}
        
        {/* GitHub Button */}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isProjectsPage, setIsProjectsPage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  
  // We'll add more projects for the dedicated projects page
  const projects: Project[] = [
    {
      title: "Menuflixer",
      description: "A full-fledged digital food menu management platform with separate web apps for restaurant operations and customer menu browsing. Features include QR code scanning, menu management dashboard, and payment integration.",
      tags: ["ReactJs", "NodeJs", "RestAPI", "Firebase", "MongoDb", "TailwindCSS", "Shadcn UI", "Framer Motion", "Payfast", "JWT", "Charts"],
      demoUrl: "https://menuflixer.vercel.app",
      image: menuflixer.src,
      buttonType: 'demo'
    },
    {
      title: "Dropdeli",
      description: "A modern landing page design for a food delivery platform, showcasing the brand's services and features with a clean, user-friendly interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      image: dropdeli.src,
      buttonType: 'demo'  // No buttons for this project
    },
    {
      title: "Africa Fund Me",
      description: "A loan funding website featuring a professional landing page and ongoing development of web application to power their operations.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://fund-africa.vercel.app",
      image: africaFundMe.src,
      buttonType: 'demo'
    },
    {
      title: "Dump Video Downloader",
      description: "A comprehensive platform for downloading internet videos, available as both web and mobile applications with advanced features and user-friendly interface.",
      tags: ["Flutter", "ReactJS", "Python", "RestAPI", "FFMPEG", "Google Play IAP", "Admob"],
      demoUrl: "https://dumpvideodownloader.com",
      image: dumpVideoDownloader.src,
      buttonType: 'demo',
    },
    {
      title: "Convert",
      description: "An Android mobile application for live currency exchange, built with modern Android development practices and real-time data integration.",
      tags: ["Android", "Jetpack Compose", "RESTAPI"],
      demoUrl: "#",
      githubUrl: "#",
      image: convert.src,
      buttonType: 'none',
    }
  ];

  const testimonials = [
    {
      name: "Pham",
      position: "Web Platform Client",
      content: "Isaac delivered an exceptional web platform that transformed our business operations. His attention to detail and technical expertise in building scalable solutions was impressive. The platform's performance and user experience exceeded our expectations.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Mathew",
      position: "ThreeJS Web App Client",
      content: "Working with Isaac on our ThreeJS web application was a great experience. He demonstrated strong expertise in 3D web technologies and delivered a visually stunning, performant application. His ability to balance aesthetics with functionality was remarkable.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Imade",
      position: "Mobile App Client",
      content: "Isaac&apos;s expertise in mobile development is exceptional. He delivered a robust and user-friendly mobile application that exceeded our expectations. His attention to detail and commitment to user experience made all the difference.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Rams",
      position: "CEO, Menuflixer",
      content: "Isaac developed our full-stack digital menu management platform with exceptional skill. The QR code scanning feature and payment integration have revolutionized how we serve our customers. His expertise in both frontend and backend development delivered a seamless experience for both our staff and customers.",
      avatar: "/api/placeholder/80/80"
    }
  ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "Shadcn UI", "Framer Motion"],
    backend: ["NodeJS", "Python", "RestAPI", "Firebase", "MongoDB", "JWT"],
    mobile: ["Flutter", "Android", "Jetpack Compose"],
    tools: ["Git", "FFMPEG", "Google Play IAP", "Admob", "Charts", "Payfast"],
    database: ["MongoDB", "PostgreSQL", "Firebase"],
  };

  const experience = [
    {
      position: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Working on various projects including Menuflixer, Dropdeli, Africa Fund Me, and Dump Video Downloader. Handling both frontend and backend development, mobile app development, and project management."
    },
    {
      position: "Mobile App Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description: "Developed mobile applications including Convert (Android) and Dump Video Downloader (Flutter), focusing on user experience and performance optimization."
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') {
      return project.tags.some(tag => 
        ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python', 'RestAPI', 
         'Firebase', 'MongoDB', 'TailwindCSS', 'Shadcn UI', 'Framer Motion', 
         'JWT', 'Charts', 'Payfast'].includes(tag)
      );
    }
    if (activeTab === 'mobile') {
      return project.tags.some(tag => 
        ['Flutter', 'Android', 'Jetpack Compose', 'Google Play IAP', 'Admob'].includes(tag)
      );
    }
    return true;
  });

  // Display only limited projects on main page
  const displayedProjects = projects.slice(0, 3);

  // Effect to check if we're on the projects page
  React.useEffect(() => {
    // Simple check for current path - modify based on your routing structure
    setIsProjectsPage(window.location.pathname.includes('/projects'));
  }, []);

  const handleImageClick = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Isaac Rufus
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                Full Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://wa.me/+2348085355192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 19.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-2.825 2.3-5.121 5.125-5.121 1.367.001 2.651.533 3.619 1.5.968.967 1.501 2.252 1.5 3.619-.001 2.825-2.301 5.121-5.127 5.121z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/oreoluwa-rufus-6b47b3305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-1.613-.114-2.218-.114-.609-.416-1.022-.847-1.238-.431-.216-.932-.324-1.502-.324-.669 0-1.222.204-1.655.611-.433.407-.65.995-.65 1.765v5.804h-3v-11h3v1.765c.287-.327.596-.581.927-.762.331-.18.689-.27 1.074-.27.527 0 .975.104 1.344.312.369.208.646.495.832.861.186.366.279.799.279 1.299v6.956z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/africantechdotworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                Get in Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 shadow-lg"></div>
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <Image 
                  src={isaacRufus.src} 
                  alt="Isaac Rufus" 
                  width={400}
                  height={400}
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
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                onImageClick={handleImageClick}
              />
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

      {/* Image Preview Modal */}
      {selectedImage && (
        <ImagePreviewModal
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}

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
                        <div 
                          className="h-full bg-blue-600 rounded-full" 
                          style={{ 
                            width: `${(index % 5) * 20 + 60}%` // This will give us values: 60%, 80%, 100%, 80%, 60%
                          }}
                        ></div>
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
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 z-10 relative">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="flex items-center">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/48x48/2563eb/ffffff?text=${testimonial.name.charAt(0)}`;
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">Let's work together on your next project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:heisrufus@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    heisrufus@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+2348085355192" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    +234 808 535 5192
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Lagos, Nigeria</span>
                </div>
              </div>
                  </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/oreoluwa-rufus-6b47b3305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-1.613-.114-2.218-.114-.609-.416-1.022-.847-1.238-.431-.216-.932-.324-1.502-.324-.669 0-1.222.204-1.655.611-.433.407-.65.995-.65 1.765v5.804h-3v-11h3v1.765c.287-.327.596-.581.927-.762.331-.18.689-.27 1.074-.27.527 0 .975.104 1.344.312.369.208.646.495.832.861.186.366.279.799.279 1.299v6.956z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/oreo.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100094227428070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://youtube.com/@heisrufus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold">Isaac Rufus</h3>
              <p className="text-gray-400 mt-1">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/africantechdotworld" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/oreoluwa-rufus-6b47b3305" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094227428070" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/oreo.software" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@heisrufus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="mailto:heisrufus@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <hr className="border-gray-800 my-6" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Isaac Rufus. All rights reserved.</p>
            <p className="mt-2">Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;