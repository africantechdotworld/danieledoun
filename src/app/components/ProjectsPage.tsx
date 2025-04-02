'use client'

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowLeft, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import ImagePreviewModal from './ImagePreviewModal';
import Image from 'next/image';
import { Project, projects, filterProjectsByTag } from '../../data/projects';

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

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  // Filter projects based on active tab
  const filteredProjects = filterProjectsByTag(projects, activeTab);

  // Count projects in each category for the filter buttons
  const webProjectsCount = filterProjectsByTag(projects, 'web').length;
  const mobileProjectsCount = filterProjectsByTag(projects, 'mobile').length;

  const handleImageClick = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

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
              All ({projects.length})
            </button>
            <button 
              onClick={() => setActiveTab('web')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'web' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              Web ({webProjectsCount})
            </button>
            <button 
              onClick={() => setActiveTab('mobile')} 
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              Mobile ({mobileProjectsCount})
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
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <ImagePreviewModal
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-20">
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

export default ProjectsPage;