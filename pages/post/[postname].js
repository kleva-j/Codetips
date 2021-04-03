import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "@components/Layout";
import Renderer from "@components/Renderer";

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout
      pageTitle={`${frontmatter.title} - ${siteTitle}`}
      description={frontmatter.description}
    >
      <section className="container mt-16 md:mt-10">
        <article className="">
          <h1 className="text-gray-300 text-2xl md:text:3xl xl:text-4xl font-semibold">
            {frontmatter.title}
          </h1>
          <p className="text-gray-500 mt-4 mb-6">By {frontmatter.author}</p>
          <img src={frontmatter.banner} alt="banner" className="m-auto" />

          <div className="mx-auto mt-16 prose prose-sm md:prose-lg lg:prose-lg xl:prose-xl prose-teal">
            <ReactMarkdown
              source={markdownBody}
              renderers={{ code: Renderer }}
              className="xl:w-4/5 mx-auto"
            />
          </div>
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
  const blogSlugs = ((context) =>
    context.keys().map((key) => key.replace(/^.*[\\\/]/, "").slice(0, -3)))(
    require.context("../../posts", true, /\.md$/)
  );
  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
