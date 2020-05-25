export default function ProjectBrief({ name, description, url, gif }) {

  return (
    <li className="flex flex-col py-8">
      <img src={gif} alt="project url"/>
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="block border-orange-300 rounded-full">Visit Project</button>
    </li>
  );
};
