import React from "react";
import matter from "gray-matter";
import Layout from "@components/Layout";
import Sidebar from "@components/Sidebar";
import Socials from "@components/Socials";
import Profile from "@components/Profile";
import PostList from "@components/PostList";

const Index = ({ title, description, posts, header, projects, ...props }) => {

  return (
    <Layout pageTitle={title} description={description} {...header}>
      <>
        <Sidebar>
          <Socials />
        </Sidebar>
        <section className="xl:flex md:w-10/12 lg:w-10/12 xl:w-10/12 lg:pl-24 z-10">
          <section className="xl:w-3/5">
            <Profile />
            <PostList posts={posts} />
          </section>
          <section className="pt-24">
            <h2>technical Writings</h2>
          </section>
        </section>
      </>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const { data } = matter(value.default);
      return {
        frontmatter: data,
        slug,
      };
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
      projects: configData.default.projects,
    },
  };
}
