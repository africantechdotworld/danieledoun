'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const MainPageMobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when the screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex flex-col">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <span className="text-xl font-bold text-white">Isaac Rufus</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="container mx-auto px-6 py-8 flex-1">
              <ul className="space-y-6">
                <li>
                  <a 
                    href="#about" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li className="pt-4 border-t border-white/20">
                  <Link 
                    href="/projects" 
                    className="text-white text-2xl font-medium block hover:text-blue-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    All Projects
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="absolute bottom-8 left-0 w-full text-center text-white/60 text-sm">
              <p>© 2025 Isaac Rufus</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPageMobileMenu; 