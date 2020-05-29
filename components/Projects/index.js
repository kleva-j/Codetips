import ProjectList from "./ProjectList";
import RightSection from "./RightSection";

export default function Projects({ projects }) {
  return (
    <section className="xl:flex md:w-10/12 lg:w-10/12 xl:w-10/12 lg:pl-16 z-10">
      <section className="pt-5">
        <ProjectList projects={projects} />
      </section>
      <RightSection heading={'Github'} content={projects} />
    </section>
  );
};
