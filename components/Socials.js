import Link from "next/link";

const contents = ["writings", "projects", "resume"];
const socialInfo = [
  {
    title: "linkedin",
    path: "/static/linkedin.svg",
    href: "https://www.linkedin.com/in/michael-obasi-808806140/",
  },
  {
    title: "twitter",
    path: "/static/twitter.svg",
    href: "https://twitter.com/kasmickleva",
  },
  {
    title: "github",
    path: "/static/github.svg",
    href: "https://github.com/kleva-j",
  },
];

export default function Socials({ path }) {
  const position =
    path === "writings"
      ? "self-start"
      : path === "projects"
      ? "self-center"
      : "self-end";

  return (
    <article className="hidden lg:block xl:block mt-48 flex-col">
      <aside className="flex m-0">
        <div
          className={`border border-teal-300 w-1/4 h-0 mr-4 rounded my-5 ${position}`}
        ></div>
        <ul className="flex flex-col justify-between">
          {contents.map((item) => (
            <li
              className="text-gray-200 hover:text-teal-300 py-2 uppercase"
              key={item}
            >
              <Link as={`/${item}`} href="/">
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <aside className="flex justify-center w-full mt-12">
        {socialInfo.map(({ title, path, href }) => (
          <a
            key={title}
            href={href}
            className="w-6 h-6 rounded mx-3"
            title={title}
          >
            <img
              src={path}
              alt="go to linkedin profile"
              className="w-full h-full"
            />
          </a>
        ))}
      </aside>
    </article>
  );
}
