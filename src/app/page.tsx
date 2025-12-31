'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { projects } from '../data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Marketplace</h2>
              <p className="text-muted-foreground text-lg">
                A curated selection of my most impactful work, from high-performance
                web apps to innovative mobile solutions.
              </p>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Browse all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <Skills />

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-center">Work History</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                role: "Full Stack Developer",
                company: "Freelance",
                period: "2023 — Present",
                desc: "Led development of multiple high-profile projects including Menuflixer and HumanlyGPT. Focused on delivering premium user experiences and robust backend architectures."
              },
              {
                role: "Mobile Developer",
                company: "Independent Projects",
                period: "2021 — 2023",
                desc: "Developed and published several cross-platform mobile applications using Flutter and Jetpack Compose. Specialized in real-time data handling and smooth UI interactions."
              }
            ].map((exp, idx) => (
              <div key={idx} className="group relative pl-8 md:pl-12 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border group-hover:bg-accent transition-colors" />
                <div className="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_black]" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <span className="text-muted-foreground font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © 2026 Isaac Rufus. Built with precision.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">Projects</Link>
            <a href="mailto:heisrufus@gmail.com" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}