import { SortContentByParams } from "utils";

export default function RightSection({ heading, content=[] }) {
  const sortedContent = SortContentByParams(content, "name");
  return (
    <section className="px-4 pt-8 bg-gray-900 xl:mr-16">
      <h1 className="uppercase text-4xl text-gray-300 font-semibold">{heading}</h1>
      <ul>
        {sortedContent.map(({ name, description, github_url, stars }) => (
          <li key={name} className="border-b-2 border-gray-700 pb-4 hover:bg-gray-800 first:mt-3">
            <h1 className="text-xl text-gray-300 font-semibold uppercase pt-2">
              <a href={github_url} target="_blank" rel="noreferrer noopener">{name}</a>
            </h1>
            <div className="flex justify-start items-center">
              <img src="/static/star.svg" loading="lazy" alt="star icon" className="h-3 w-3"/>
              <i className="ml-1 text-gray-600">{stars}</i>
            </div>
            <p className="text-gray-600 text-3">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
