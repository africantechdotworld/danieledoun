'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isMainPage?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMainPage = true }) => {
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
        <div className="fixed inset-0 z-[9999] bg-blue-600 dark:bg-blue-800">
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
                {isMainPage ? (
                  <>
                    <li>
                      <Link 
                        href="#about" 
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#projects" 
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#skills" 
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#experience" 
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                      >
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-medium block w-full text-left hover:text-blue-200 transition-colors"
                      >
                        Contact
                      </Link>
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
                  </>
                ) : (
                  <>
                    <li>
                      <Link 
                        href="/" 
                        className="text-white text-2xl font-medium block hover:text-blue-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/#about" 
                        className="text-white text-2xl font-medium block hover:text-blue-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/#skills" 
                        className="text-white text-2xl font-medium block hover:text-blue-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/#contact" 
                        className="text-white text-2xl font-medium block hover:text-blue-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </>
                )}
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

export default MobileMenu;