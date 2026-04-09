'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, CircleStackIcon, SwatchIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
    {
        category: "Frontend",
        icon: <GlobeAltIcon className="w-5 h-5" />,
        items: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Shadcn UI"]
    },
    {
        category: "Backend",
        icon: <CircleStackIcon className="w-5 h-5" />,
        items: ["Node.js", "Python", "RESTful APIs", "Firebase", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Mobile",
        icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
        items: ["Flutter", "Jetpack Compose", "Android SDK"]
    },
    {
        category: "Tools & UX",
        icon: <SwatchIcon className="w-5 h-5" />,
        items: ["Figma", "Git", "FFMPEG", "Stripe/Payfast", "Admob"]
    },
];

export default function Skills() {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t('skills.title')}</h2>
                        <p className="text-muted-foreground text-lg">
                            {t('skills.description')}
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">2+</span>
                            <span className="text-xs tracking-widest text-muted-foreground font-bold">{t('skills.exp')}</span>
                        </div>
                        <div className="w-[1px] h-12 bg-border mx-4" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">10+</span>
                            <span className="text-xs tracking-widest text-muted-foreground font-bold">{t('skills.projects')}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background border border-border/50 p-8 rounded-[32px] hover:border-accent/30 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map(item => (
                                    <span key={item} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full group-hover:bg-accent/5 group-hover:text-accent transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
