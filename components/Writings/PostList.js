import Link from "next/link";
import PostBrief from "@components/Writings/PostBrief";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <article className="pt-12 px-4 md:px-8 lg:px-12 xl:px-12 bg-gray-900">
      {!posts && <div>No posts!</div>}
      <h1 className="text-4xl text-gray-300 font-semibold underline">Popular</h1>
      <ul className="flex flex-col">
        {posts &&
          posts.map(({ slug, ...rest }) => {
            return (
              <PostBrief
                key={slug}
                slug={slug}
                {...rest}
              />
            );
          })}
      </ul>
    </article>
  );
}
