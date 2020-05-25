import Link from "next/link";

export default function PostBrief({
  slug,
  frontmatter: { title, date, tags },
}) {
  const taglist = tags.split(", ");
  const formattedDate = new Date(+date).toDateString();
  return (
    <li
      key={slug}
      className="flex flex-col border-b-2 py-8 border-gray-700 relative"
    >
      <span
        className="text-2xl text-gray-300 font-bold"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {title}
      </span>
      <span className="pt-2 pb-5 text-gray-500">{formattedDate}</span>
      <ul className="flex">
        {taglist &&
          taglist.map((tag, index) => (
            <li
              key={index}
              className="border rounded border-teal-300 mr-2 text-gray-100 py-1 px-2"
            >
              {tag}
            </li>
          ))}
      </ul>
      <button
        className="absolute bottom-0 right-0 w-24 rounded-full uppercase font-bold bg-teal-300 py-1 outline-none text-xs"
        style={{ bottom: "-12px", right: "40px" }}
      >
        see post
      </button>
    </li>
  );
}
