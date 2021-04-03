import Socials from "@components/Socials";

export default function Sidebar({ path }) {
  return (
    <article className="fixed md:h-screen left-0 z-2">
      <h1 className="vertical-lr mt-16 md:mt-10 md:h-40 ml-6 uppercase text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold inset-0 text-teal-300">
        {path}
      </h1>
      <Socials path={path} />
    </article>
  );
}
