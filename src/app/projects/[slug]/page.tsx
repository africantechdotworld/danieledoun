import React from 'react';
import { projects } from '../../../data/projects';
import ProjectDetailsPage from '../../components/ProjectDetailsPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.title.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p =>
        p.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!project) {
        return notFound();
    }

    return <ProjectDetailsPage project={project} />;
}
