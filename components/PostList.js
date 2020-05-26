import Link from "next/link";
import PostBrief from "@components/PostBrief";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <article className="pt-12 px-4 md:px-8 lg:px-12 xl:px-12 bg-gray-900">
      {!posts && <div>No posts!</div>}
      <ul className="flex flex-col">
        {posts &&
          posts.map((props, index) => {
            const {
              slug,
              frontmatter
            } = props;
            return (
              <PostBrief
                key={index}
                slug={slug}
                frontmatter={frontmatter}
              />
            );
          })}
      </ul>
    </article>
  );
}
