'use client'

import React from 'react'
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-themes'

const Portfolio = () => {

    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);


    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
        if (resolvedTheme === undefined) {
            setTheme('dark');
        }
    }, [resolvedTheme, setTheme]);

    interface Project {
        title: string;
        description: string;
        tags: string[];
        demoUrl: string;
        githubUrl: string;
        image: string;
    }

    interface ProjectCardProps {
        project: Project;
    }


    const projects = [
        {
            title: "E-Commerce Mobile App",
            description: "A full-featured mobile shopping app built with React Native and Node.js. Includes user authentication, product catalog, shopping cart, and payment integration.",
            tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
            demoUrl: "https://demo.example.com/ecommerce",
            githubUrl: "https://github.com/example/ecommerce",
            image: "/api/placeholder/600/400"
        },
        {
            title: "Task Management Platform",
            description: "Web-based project management tool with real-time updates, team collaboration features, and automated workflow capabilities.",
            tags: ["React", "Firebase", "Material UI", "WebSocket"],
            demoUrl: "https://demo.example.com/taskmanager",
            githubUrl: "https://github.com/example/taskmanager",
            image: "/api/placeholder/600/400"
        },
        {
            title: "Health & Fitness Tracker",
            description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
            tags: ["Flutter", "Firebase", "REST API", "Charts"],
            demoUrl: "https://demo.example.com/fitness",
            githubUrl: "https://github.com/example/fitness",
            image: "/api/placeholder/600/400"
        }
    ];

    const skills = {
        frontend: ["React", "React Native", "Flutter", "JavaScript", "TypeScript", "HTML5/CSS3"],
        backend: ["Node.js", "Python", "Java", "RESTful APIs", "GraphQL"],
        database: ["MongoDB", "PostgreSQL", "Firebase"],
        tools: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
    };

    const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
        return <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        Code
                    </a>
                </div>
            </div>
        </div>;
    };

    // ... (keep the skills object and other existing code)

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Header/Hero Section - keep existing code */}
            {/* Header/Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold">Oreo Developer</span>
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex space-x-6">
                            <a href="#projects" className="hover:text-blue-200">Projects</a>
                            <a href="#skills" className="hover:text-blue-200">Skills</a>
                            <a href="#contact" className="hover:text-blue-200">Contact</a>
                        </div>
                        {mounted && (
                            <ThemeToggle />
                        )}
                    </div>
                </nav>

                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Full Stack Developer</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Crafting exceptional web and mobile experiences with modern technologies
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                            Get in Touch
                        </a>
                        <a href="#projects" className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            View Projects
                        </a>
                    </div>
                    <div className="mt-12 animate-bounce">
                        <ChevronDown className="mx-auto" size={32} />
                    </div>
                </div>
            </header>

            {/* Projects Section - updated */}
            <section id="projects" className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Keep existing Skills, Contact, and Footer sections */}

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl text-lightText font-bold text-center mb-12 dark:text-white">Technical Skills</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                                <h3 className="text-xl text-lightText font-semibold mb-4 capitalize dark:text-white">{category}</h3>
                                <ul className="space-y-2">
                                    {skillList.map((skill, index) => (
                                        <li key={index} className="flex items-center text-lightText dark:text-gray-200">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 container mx-auto px-6">
                <h2 className="text-3xl text-lightText font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="mailto:john@example.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <Mail className="w-5 h-5" />
                            <span>john@example.com</span>
                        </a>
                        <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <Phone className="w-5 h-5" />
                            <span>+1 (234) 567-890</span>
                        </a>
                        <a href="https://github.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-black text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>© 2025 John Developer. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;