'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero
    'hero.badge': 'Available for new opportunities',
    'hero.title.line1': 'Designing Digital',
    'hero.title.line2': 'Experiences that Matter.',
    'hero.description': 'Daniel EDOUN — A Software Developer dedicated to building high-performance web and mobile solutions with premium aesthetics and seamless user experiences.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.scroll': 'Scroll',
    
    // Marketplace
    'marketplace.title': 'Marketplace',
    'marketplace.description': 'A curated selection of my most impactful work, from high-performance web apps to innovative mobile solutions.',
    'marketplace.browseAll': 'Browse all projects',
    
    // Technical Prowess
    'skills.title': 'Technical Prowess',
    'skills.description': 'Combining cutting-edge technologies with thoughtful design to deliver robust digital solutions.',
    'skills.exp': 'Years exp.',
    'skills.projects': 'Projects',
    
    // Experience
    'experience.title': 'Work History',
    
    // Contact
    'contact.title.line1': 'Ready to start your',
    'contact.title.line2': 'next big thing?',
    'contact.label.name': "What's your name?",
    'contact.placeholder.name': 'Enter your name',
    'contact.label.email': 'Email address',
    'contact.placeholder.email': 'name@company.com',
    'contact.label.project': 'Tell me about your project',
    'contact.placeholder.project': "Let's build something amazing...",
    'contact.send': 'Send Message',
    
    // Footer
    'footer.builtWith': 'Built with precision.',
    'footer.home': 'Home',
    'footer.email': 'Email',

    // All Projects Page
    'allProjects.title': 'Full Portfolio',
    'allProjects.description': 'Explore my collection of digital products, experiments, and professional projects built between 2021 and 2026.',
    'allProjects.search': 'Search projects...',
    'allProjects.showing': 'Showing {count} results',
    'allProjects.sortBy': 'Sort by: Newest',
    'allProjects.noProjects': 'No projects found.',
    'allProjects.adjustFilters': 'Try adjusting your filters or search query.',

    // Project Details
    'project.back': 'Back to Portfolio',
    'project.visit': 'Visit Website',
    'project.viewCode': 'View Code',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.tech': 'Tech',
    'project.overview': 'Project Overview',
    'project.features': 'Key Features',

    // New Experience translations
    'exp.software.role': 'Software Developer',
    'exp.software.company': 'Portfolio Projects',
    'exp.software.period': '2024 — Present',
    'exp.software.desc': 'Worked on multiple web development projects, including Borec, GLD-Cart, and NovumDesk, contributing to the design and implementation of scalable applications.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = (key: string) => {
    return translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'en', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
