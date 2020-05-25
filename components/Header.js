import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-gray-900 z-20">
      <nav className="flex justify-between mx-4 md:mx-16 lg:mx-24 xl:mx-24 py-4">
        <h2 className="uppercase text-2xl text-gray-400 font-semibold">Michael Obasi</h2>
        <aside className="flex items-center">
          <Link href="/writing">
            <a className="uppercase text-gray-400 px-2 font-semibold">Writings</a>
          </Link>
          <Link href="/projects">
            <a className="uppercase text-gray-400 px-2 font-semibold">Projects</a>
          </Link>
          <Link href="/projects">
            <a className="uppercase text-gray-400 px-2 font-semibold">Resume</a>
          </Link>
        </aside>
      </nav>
    </header>
  );
};
