import Link from "next/link";

const contents = ["writings", "projects", "resume"];
const socialInfo = [{ title: "linkedin" }, { title: "twitter" }, { title: "github" }];

export default function Socials() {
  return (
    <article className="hidden lg:block xl:block mt-48 flex-col">
      <aside className="flex">
        <div className="border border-teal-300 w-1/4 h-0 self-center mr-4 rounded"></div>
        <ul className="flex flex-col justify-between">
          {contents.map((item) => (
            <li className="text-gray-200 hover:text-teal-300 py-2 uppercase">
              <Link href={{ pathname: `/${item}` }}>
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <aside className="flex justify-center w-full mt-12">
        <a
          href="https://www.linkedin.com/in/michael-obasi-808806140/"
          className="w-6 h-6 rounded mx-3"
          title="linkedin"
        >
          <img
            src="/static/linkedin.svg"
            alt="go to linkedin profile"
            className="w-full h-full"
          />
        </a>
        <a
          href="https://twitter.com/kasmickleva"
          className="w-6 h-6 rounded mx-3"
          title="twitter"
        >
          <img
            src="/static/twitter.svg"
            alt="go to twitter profile"
            className="w-full-h-full"
          />
        </a>
        <a
          href="https://github.com/kleva-j"
          className="w-6 h-6 rounded mx-3"
          title="github"
        >
          <img
            src="/static/github.svg"
            alt="go to github profile"
            className="w-full h-full"
          />
        </a>
      </aside>
    </article>
  );
}
