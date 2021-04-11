import Link from "next/link";

import { formatDate, SortContentByParams } from "utils";

export default function RightSection({ heading, content }) {
  const sortedContent = SortContentByParams(content, "title");
  return (
    <section className="pt-20 px-4 bg-gray-900">
      <h1 className="uppercase text-2xl lg:text-3xl mb-3 text-gray-300 font-semibold">
        {heading}
      </h1>
      <ul className="pl-4 list-outside list-circle text-teal-300">
        {sortedContent.map(({ title, slug, updated }) => (
          <li key={slug} className="pb-2 my-2 first:mt-12">
            <Link href={`/post/${slug}`}>
              <a className="text-lg text-gray-300 font-semibold py-2 pointer">
                {title}
              </a>
            </Link>
            <p className="text-gray-600 text-3">
              updated on <em>{formatDate(+updated)}</em>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
