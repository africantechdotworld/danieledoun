'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Project } from '../../data/projects';
import { cn } from './utils';

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "group relative premium-card aspect-square sm:aspect-[4/3] flex flex-col justify-end p-6 sm:p-8 overflow-hidden",
                featured ? "md:aspect-[16/9] md:col-span-2" : ""
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`;
                    }}
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-bold tracking-wider bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:translate-x-1 transition-transform duration-300 line-clamp-1">
                            {project.title}
                        </h3>
                        <p className="text-white/70 line-clamp-2 max-w-md text-xs sm:text-sm md:text-base">
                            {project.description}
                        </p>
                    </div>
                    <Link
                        href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
                    >
                        <ArrowUpRightIcon className="w-5 h-5 text-white" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    featured={index === 0}
                />
            ))}
        </div>
    );
}
