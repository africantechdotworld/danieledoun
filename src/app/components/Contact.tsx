'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../contexts/LanguageContext';

const socials = [
    { icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, href: "https://www.facebook.com/share/1GWWbNH1mQ/?mibextid=wwXIfr", label: "Facebook" },
    { icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>, href: "https://wa.me/+2290149037744", label: "WhatsApp" },
];

export default function Contact() {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-background dark:bg-zinc-900 text-foreground rounded-3xl md:rounded-[48px] p-6 sm:p-10 md:p-16 overflow-hidden relative border border-border/50 shadow-xl shadow-black/5">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-accent/10 blur-[120px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight">
                                {t('contact.title.line1')} <br className="hidden sm:block" />
                                <span className="text-muted-foreground/60">{t('contact.title.line2')}</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                                <a href="mailto:danieldevelopper9@gmail.com" className="group flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-medium hover:text-accent transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                        <EnvelopeIcon className="w-5 h-5" />
                                    </div>
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">danieldevelopper9@gmail.com</span>
                                </a>
                                <a href="tel:+2290149037744" className="group flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-medium hover:text-accent transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                        <PhoneIcon className="w-5 h-5" />
                                    </div>
                                    <span className="whitespace-nowrap">+229 014 903 7744</span>
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {socials.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted hover:bg-accent hover:text-white flex items-center justify-center transition-all shadow-sm"
                                        aria-label={social.label}
                                    >
                                        <div className="w-5 h-5">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-muted/50 border border-border/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-inner">
                            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">{t('contact.label.name')}</label>
                                        <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base shadow-sm" placeholder={t('contact.placeholder.name')} />
                                    </div>
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">{t('contact.label.email')}</label>
                                        <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base shadow-sm" placeholder={t('contact.placeholder.email')} />
                                    </div>
                                </div>
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">{t('contact.label.project')}</label>
                                    <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none text-sm sm:text-base shadow-sm" placeholder={t('contact.placeholder.project')} />
                                </div>
                                <button type="submit" className="w-full bg-accent text-white py-3.5 sm:py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20 active:scale-[0.98]">
                                    {t('contact.send')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
