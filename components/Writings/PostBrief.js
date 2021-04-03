import Link from "next/link";

export default function PostBrief({ slug, title, date, tags = "" }) {
  const taglist = tags.split(", ");
  const formattedDate = new Date(+date).toDateString();
  return (
    <li
      key={slug}
      className="flex flex-col border-b-2 py-8 border-gray-700 relative"
    >
      <span
        className="text-xl lg:text-2xl text-gray-300 font-bold hover:text-teal-300"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        <Link href={`/post/${slug}`}>{title}</Link>
      </span>
      <span className="py-2 text-gray-500">{formattedDate}</span>
      <ul className="flex flex-wrap list-none">
        {taglist &&
          taglist.map((tag, index) => (
            <li
              key={index}
              className="capitalize border cursor-pointer rounded-md border-teal-300 mr-2 text-sm text-gray-100 my-2 px-2 py-1"
            >
              {tag}
            </li>
          ))}
      </ul>
    </li>
  );
}
