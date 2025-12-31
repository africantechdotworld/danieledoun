'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-muted rounded-full">
                        Available for new opportunities
                    </span>
                    <h1 className="hero-text mb-8">
                        Designing Digital <br />
                        <span className="text-muted-foreground">Experiences that Matter.</span>
                    </h1>
                    <p className="sub-text mx-auto mb-10">
                        Isaac Rufus — A Full Stack Developer dedicated to building
                        high-performance web and mobile solutions with premium aesthetics
                        and seamless user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-muted hover:bg-muted/80 rounded-full font-semibold transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
