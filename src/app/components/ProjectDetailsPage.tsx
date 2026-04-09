'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, GlobeAltIcon, CommandLineIcon, CalendarDateRangeIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../../data/projects';
import Navbar from './Navbar';
import Contact from './Contact';

interface ProjectDetailsPageProps {
    project: Project;
}

export default function ProjectDetailsPage({ project }: ProjectDetailsPageProps) {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen pt-32">
            <Navbar />

            <div className="container mx-auto px-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-12 transition-colors group"
                >
                    <ChevronLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {t('project.back')}
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6 text-[10px] font-bold tracking-widest text-accent">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-accent/5 px-2 py-1 rounded-md border border-accent/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-accent/20"
                                >
                                    {t('project.visit')}
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-muted hover:bg-muted/80 text-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all"
                                >
                                    {t('project.viewCode')}
                                </a>
                            )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-muted/30 rounded-[32px] border border-border/50">
                            <div>
                                <span className="text-xs tracking-widest text-muted-foreground font-bold block mb-2">{t('project.role')}</span>
                                <span className="font-bold flex items-center gap-2 text-sm md:text-base">
                                    <UserIcon className="w-4 h-4 text-accent" />
                                    Lead Dev
                                </span>
                            </div>
                            <div>
                                <span className="text-xs tracking-widest text-muted-foreground font-bold block mb-2">{t('project.year')}</span>
                                <span className="font-bold flex items-center gap-2 text-sm md:text-base">
                                    <CalendarDateRangeIcon className="w-4 h-4 text-accent" />
                                    2025
                                </span>
                            </div>
                            <div>
                                <span className="text-xs tracking-widest text-muted-foreground font-bold block mb-2">{t('project.tech')}</span>
                                <span className="font-bold flex items-center gap-2 text-sm md:text-base">
                                    <CommandLineIcon className="w-4 h-4 text-accent" />
                                    Full Stack
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video lg:aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl shadow-black/10"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`;
                            }}
                        />
                    </motion.div>
                </div>

                {/* Case Study Content */}
                <div className="max-w-4xl mx-auto mb-32">
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">{t('project.overview')}</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p className="mb-6">
                                {project.title} sets a new standard for {project.tags.join(', ')} applications.
                                The primary objective was to create a solution that not only meets functional requirements
                                but also provides a delightful and intuitive user experience.
                            </p>
                            <p>
                                From architecture to deployment, every decision was driven by performance and scalability.
                                We utilized modern design patterns and a robust tech stack to ensure the platform
                                could handle increasing loads while maintaining sub-second response times.
                            </p>
                        </div>
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">{t('project.features')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "High-performance architecture with optimized assets.",
                                "Responsive design compatible with all devices.",
                                "Intuitive user interface with smooth transitions.",
                                "Robust security and data privacy measures."
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-muted/40 rounded-2xl border border-border/30">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <ArrowRightIcon className="w-4 h-4 text-accent" />
                                    </div>
                                    <p className="font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Contact />
        </main>
    );
}
