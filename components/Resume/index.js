import ReactMarkdown from "react-markdown";

import Renderer from "@components/Renderer";

export default function Resume({ resume }) {
  if (!resume) return <></>;

  return (
    <section className="z-10 xl:w-4/5 px-5 md:px-10 lg:px-0 xl:px-0 bg-gray-900">
      <div className="z-10 text-left max-w-5xl mt-16 prose prose-sm md:prose-lg lg:prose-lg xl:prose-xl prose-teal">
        <ReactMarkdown
          source={resume}
          renderers={{ code: Renderer }}
          className="xl:w-4/5 mx-auto"
        />
      </div>
    </section>
  );
}
