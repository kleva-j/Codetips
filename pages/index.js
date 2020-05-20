import Layout from '../components/Layout';
import PostList from '../components/PostList';
import matter from 'gray-matter'

const Index = ({ title, description, posts, header, ...props }) => {
  return (
    <Layout pageTitle={title} description={description} {...header}>
      <h1 className="text-purple-500 leading-normal">Welcome to my blog!</h1>
      <p  className="text-gray-500">
        {description}
      </p>
      <main>
        <PostList posts={posts} />
      </main>
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
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];
      const { data, content } = matter(value.default);
      return {
        frontmatter: data,
        markdownBody: content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

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
    },
  }
};
