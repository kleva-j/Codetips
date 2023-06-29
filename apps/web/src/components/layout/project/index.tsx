'use client';

import { projectsList } from '@/data';
import { Heading } from 'ui';

import { ProjectCard } from './project-card';

export const Layout = () => {
  return (
    <section>
      <Heading variant="h1" className="mt-20 mb-10 font-bold">
        Projects
      </Heading>
      <ul className="grid justify-center md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5">
        {projectsList.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </ul>
    </section>
  );
};
