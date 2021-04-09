export default function ProjectBrief(props) {
  const { name, description, gif, project_url } = props;

  return (
    <li className="flex flex-col py-8">
      <h2
        className="text-2xl text-gray-300 font-semibold uppercase"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {name}
      </h2>
      
      <p className="text-gray-600 text-3 my-3">{description}</p>

      <img src={gif} alt="project url" />

      <button className="uppercase hover:bg-teal-300 hover:text-gray-900 font-semibold text-teal-300 outline-none block border border-teal-300 rounded-full py-2 my-5">
        <a href={project_url} target="_blank" rel="noreferrer noopener">Visit Project</a>
      </button>
    </li>
  );
}
