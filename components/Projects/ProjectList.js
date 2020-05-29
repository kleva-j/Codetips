import React from "react";
import ProjectBrief from "./ProjectBrief";

export default function ProjectList({ projects }) {
  return (
    <article className="pt-12 px-4 md:px-8 lg:px-12 xl:px-12 bg-gray-900" >
      <ul className="flex flex-col">{projects && projects.map((item, index) => {
        return (<ProjectBrief key={index} {...item} />);
      })}</ul>
    </article>
  );
};
