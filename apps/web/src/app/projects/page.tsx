import { Layout } from "@/components/layout/project";
import { getProjects } from "@/lib/api";

export default async function Projects() {
  const data = await getProjects();

  return (
    <section>
      <Layout projects={data} />
    </section>
  );
}
