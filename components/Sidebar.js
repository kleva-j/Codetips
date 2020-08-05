export default function Sidebar({ children, page = "Writings" }) {
  return (
    <article className="fixed md:h-screen left-0 z-2">
      <aside className="">
        <h1 className="relative transform rotate-90 uppercase text-gray-200 text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold inset-0 mt-24 -ml-2 sm:mt-32 md:mt-40 md:-ml-8 lg:-ml-6 lg:mt-56 xl:mt-64 xl:-ml-8 text-teal-300">
          {page}
        </h1>
      </aside>
      {React.cloneElement(children, { page })}
    </article>
  );
}