import Link from "next/link";

const paths = ["writings", "projects", "resume"];

export default function Header({ path }) {
  const setClass = (item) => {
    const defaultStyle =
      "uppercase text-gray-400 mx-2 py-2 font-semibold hover:text-teal-300 ";
    let setActiveStyle = item === path ? "border-b-2 border-teal-300" : "";
    return defaultStyle + setActiveStyle;
  };
  return (
    <header className="fixed w-full bg-gray-900 z-20">
      <nav className="sm:flex md:flex lg:flex xl:flex justify-between mx-4 md:mx-16 lg:mx-24 xl:mx-24 py-4">
        <h2 className="uppercase text-2xl text-gray-400 font-semibold mb-4 text-center">
          Michael Obasi
        </h2>
        <aside className="flex items-center justify-center">
          {paths.map((item) => {
            return (
              <Link as={`/${item}`} href="/" key={item}>
                <a className={setClass(item)}>
                  {item}
                </a>
              </Link>
            );
          })}
        </aside>
      </nav>
    </header>
  );
}
