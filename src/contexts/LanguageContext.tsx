'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
  },
  fr: {
    // Nav
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'nav.hire': 'Engagez-moi',
    
    // Hero
    'hero.badge': 'Disponible pour de nouvelles opportunités',
    'hero.title.line1': 'Concevoir des Expériences',
    'hero.title.line2': 'Numériques qui Comptent.',
    'hero.description': 'Daniel EDOUN — Un Développeur Logiciel dédié à la création de solutions web et mobiles haute performance avec une esthétique premium et des expériences utilisateur fluides.',
    'hero.viewProjects': 'Voir les Projets',
    'hero.contactMe': 'Contactez-moi',
    'hero.scroll': 'Défiler',
    
    // Marketplace
    'marketplace.title': 'Marketplace',
    'marketplace.description': 'Une sélection de mes travaux les plus impactants, des applications web haute performance aux solutions mobiles innovantes.',
    'marketplace.browseAll': 'Parcourir tous les projets',
    
    // Technical Prowess
    'skills.title': 'Prouesse Technique',
    'skills.description': 'Combiner des technologies de pointe avec un design réfléchi pour fournir des solutions numériques robustes.',
    'skills.exp': 'Ans exp.',
    'skills.projects': 'Projets',
    
    // Experience
    'experience.title': 'Historique de Travail',
    
    // Contact
    'contact.title.line1': 'Prêt à commencer votre',
    'contact.title.line2': 'prochain grand projet ?',
    'contact.label.name': 'Quel est votre nom ?',
    'contact.placeholder.name': 'Entrez votre nom',
    'contact.label.email': 'Adresse e-mail',
    'contact.placeholder.email': 'nom@entreprise.com',
    'contact.label.project': 'Parlez-moi de votre projet',
    'contact.placeholder.project': 'Construisons quelque chose d’incroyable...',
    'contact.send': 'Envoyer le Message',
    
    // Footer
    'footer.builtWith': 'Construit avec précision.',
    'footer.home': 'Accueil',
    'footer.email': 'E-mail',

    // All Projects Page
    'allProjects.title': 'Portfolio Complet',
    'allProjects.description': 'Explorez ma collection de produits numériques, d’expérimentations et de projets professionnels réalisés entre 2021 et 2026.',
    'allProjects.search': 'Rechercher des projets...',
    'allProjects.showing': 'Affichage de {count} résultats',
    'allProjects.sortBy': 'Trier par : Plus récent',
    'allProjects.noProjects': 'Aucun projet trouvé.',
    'allProjects.adjustFilters': 'Essayez d’ajuster vos filtres ou votre requête de recherche.',

    // Project Details
    'project.back': 'Retour au Portfolio',
    'project.visit': 'Visiter le Site Web',
    'project.viewCode': 'Voir le Code',
    'project.role': 'Rôle',
    'project.year': 'Année',
    'project.tech': 'Tech',
    'project.overview': 'Aperçu du Projet',
    'project.features': 'Caractéristiques Clés',

    // New Experience translations
    'exp.software.role': 'Développeur Logiciel',
    'exp.software.company': 'Projets de Portfolio',
    'exp.software.period': '2024 — Présent',
    'exp.software.desc': 'Travail sur plusieurs projets de développement web, dont Borec, GLD-Cart et NovumDesk, contribuant à la conception et à la mise en œuvre d’applications évolutives.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
