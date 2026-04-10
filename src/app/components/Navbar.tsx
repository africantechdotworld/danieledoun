'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { cn } from './utils';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../../contexts/LanguageContext';

const getNavItems = (t: (key: string) => string) => [
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
];

export default function Navbar() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = getNavItems(t);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled ? 'glass border-border/40 py-3 shadow-sm' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
                >
                    Daniel EDOUN
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="h-4 w-[1px] bg-border mx-2" />
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            {t('nav.hire')}
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        {mobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border/40 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium hover:text-accent transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 bg-foreground text-background p-4 rounded-2xl text-center font-medium"
                            >
                                {t('nav.hire')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
