import Layout from "../components/Layout";

const About = ({ title, description, header, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description} {...header}>
        <h1 className="title text-gray-600">Welcome to my blog!</h1>

        <p className="description">{description}</p>

        <p>
          I am a very exciting person. I know this because I'm following a very
          exciting tutorial, and a not-exciting person wouldn't do that.
        </p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      header: {
        twitterHandle: configData.default.twitterHandle,
        currentURL: configData.default.currentURL,
        siteName: configData.default.siteName,
        previewImage: configData.default.previewImage,
      },
    },
  };
}
