'use client';

import { fetchProjects } from '@/lib/api';
import { ProjectsType } from '@/types';
import { Heading } from 'ui';
import { use } from 'react';

import { ProjectCard } from './project-card';

export const Layout = () => {
  const { docs } = use<ProjectsType>(fetchProjects());

  return (
    <section>
      <Heading variant="h1" className="mt-20 mb-10 font-bold">
        Projects
      </Heading>
      <ul className="grid justify-center md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5">
        {docs.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};
