'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Youtube, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const socials = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/oreoluwa-rufus-6b47b3305", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/roreoluwa95178", label: "X" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/oreo.software", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@heisrufus", label: "YouTube" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/+2348085355192", label: "WhatsApp" },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="bg-foreground text-background rounded-[48px] p-8 md:p-16 overflow-hidden relative">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-accent/20 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
                                Ready to start your <br />
                                <span className="text-muted-foreground/50">next big thing?</span>
                            </h2>
                            <div className="space-y-6 mb-12">
                                <a href="mailto:heisrufus@gmail.com" className="group flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-accent transition-colors">
                                    <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-accent transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    heisrufus@gmail.com
                                </a>
                                <a href="tel:+2348085355192" className="group flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-accent transition-colors">
                                    <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-accent transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    +234 808 535 5192
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {socials.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-background/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">What&apos;s your name?</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">Email address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="name@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Tell me about your project</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" placeholder="Let's build something amazing..." />
                                </div>
                                <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
