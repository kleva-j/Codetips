import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout
      pageTitle={`${siteTitle} | ${frontmatter.title}`}
      description={frontmatter.description}
    >
      <section className="container flex justify-center mt-10">
        <article>
          <h1 className="text-gray-300 text-4xl font-semibold">{frontmatter.title}</h1>
          <p className="text-gray-500 mt-4 mb-6">By {frontmatter.author}</p>
          <img src={frontmatter.banner} alt="banner" className="m-auto" />

          <ReactMarkdown source={markdownBody} className="py-10 xl:w-4/5 m-auto markdown" />

        </article>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      header: {
        siteName: config.default.siteName,
        currentURL: config.default.currentURL,
        previewImage: config.default.previewImage,
        twitterHandle: config.default.twitterHandle,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
