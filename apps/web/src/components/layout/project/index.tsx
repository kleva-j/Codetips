"use client";

import { type FC } from "react";

import { ProjectList as List } from "./project-list";
import { ProjectsType } from "@/types";
import { Heading } from "ui";

type LayoutProps = FC<{ projects: ProjectsType }>;

export const Layout: LayoutProps = ({ projects }) => {
  const { docs } = projects;

  return (
    <>
      <Heading variant="h1" className="mt-20 mb-10 font-bold">
        Projects
      </Heading>
      <List projects={docs} />
    </>
  );
};
