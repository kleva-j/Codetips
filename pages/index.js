import matter from "gray-matter";
import { withRouter } from "next/router";

import Layout from "@components/Layout";
import Sidebar from "@components/Sidebar";
import Writings from "@components/Writings";
import Projects from "@components/Projects";

const Index = withRouter(
  ({ title, description, posts, header, projects, router: { asPath } }) => {
    let path = asPath.replace("/", "").replace("/", "");
    if (!path) path = "writings";

    return (
      <Layout pageTitle={title} description={description} {...header} path={path}>
        <>
          <Sidebar path={path} />
          {path === 'writings' && <Writings posts={posts} />}
          {path === 'projects' && <Projects projects={projects} />}
        </>
      </Layout>
    );
  }
);

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const projectData = await import("../projectlist.json");

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const { data } = matter(value.default);
      return { slug, ...data };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
      header: {
        twitterHandle: configData.default.twitterHandle,
        currentURL: configData.default.currentURL,
        siteName: configData.default.siteName,
        previewImage: configData.default.previewImage,
      },
      projects: Object.values(projectData.default.projects),
    },
  };
}
