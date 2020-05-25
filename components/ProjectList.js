import React from "react";
import ProjectBrief from "./ProjectBrief";

export default function ProjectList({ projects }) {
  return (
    <article>
      <ul className="flex flex-col">{projects && projects.map((item, index) => {
        return (<ProjectBrief key={index} {...item} />);
      })}</ul>
    </article>
  );
};
