import matter from "gray-matter";
import { withRouter } from "next/router";

import Layout from "@components/Layout";
import Sidebar from "@components/Sidebar";
import Socials from "@components/Socials";
import Writings from "@components/Writings";
import Projects from "@components/Projects";

const Content = ({ asPath, posts, projects }) => {
  switch (asPath) {
    case "projects": {
      return <Projects projects={projects} />;
    }

    default: {
      return <Writings posts={posts} />;
    }
  }
};

const Index = withRouter(
  ({ title, description, posts, header, projects, ...props }) => {
    let {
      router: { asPath },
    } = props;
    asPath = asPath.replace("/", "");
    if (!asPath) asPath = "Writing";

    return (
      <Layout pageTitle={title} description={description} {...header}>
        <>
          <Sidebar page={asPath}>
            <Socials />
          </Sidebar>
          <Content asPath={asPath} posts={posts} projects={projects} />
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
