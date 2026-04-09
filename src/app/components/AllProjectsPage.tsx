'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectGrid';
import Navbar from './Navbar';
import Contact from './Contact';

const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'AI'];

export default function AllProjectsPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === 'All' ||
            project.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase());
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen pt-32 pb-16">
            <Navbar />

            <div className="container mx-auto px-6">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('allProjects.title')}</h1>
                    <p className="text-muted-foreground text-xl max-w-2xl text-balance">
                        {t('allProjects.description')}
                    </p>
                </header>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                    <div className="flex gap-2 p-1 bg-muted rounded-full overflow-x-auto no-scrollbar max-w-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-background text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder={t('allProjects.search')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-muted/50 border border-border/50 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-8 flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                        {t('allProjects.showing').replace('{count}', filteredProjects.length.toString())}
                    </span>
                    <button className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                        <AdjustmentsHorizontalIcon className="w-4 h-4" />
                        {t('allProjects.sortBy')}
                    </button>
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="py-32 text-center">
                        <h3 className="text-2xl font-bold mb-2">{t('allProjects.noProjects')}</h3>
                        <p className="text-muted-foreground">{t('allProjects.adjustFilters')}</p>
                    </div>
                )}
            </div>

            <div className="mt-32">
                <Contact />
            </div>
        </main>
    );
}
