import { type FC } from "react";

import { ProjectCard as Card } from "./project-card";
import { ProjectType } from "@/types";

type ProjectListProps = FC<{ projects: ProjectType[] }>;

export const ProjectList: ProjectListProps = ({ projects: p }) => {
  return (
    <ul className="grid justify-center md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5">
      {p.map((item) => (<Card key={item.title} {...item} />))}
    </ul>
  );
};
