import { SiReact } from "react-icons/si";
import { Badge } from "./Badge";

export function Skills() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row">
      <div className="h-fit max-w-xs p-8 border-white border-solid border-2">
        <div className="flex items-center mb-4">
          <SiReact className="text-5xl mr-4 " />
          <h3>
            <span className="markup mk-purple text-2xl font-bold">
              Frontend Dev
            </span>
            <span className="text-xl font-semibold">React, NextJS</span>
          </h3>
        </div>

        <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
          Passionate about UI/UX. working with a few projects and development
          experience in HTML, CSS, JS, React and NextJS frameworks.
        </p>
      </div>
      <Badge />
    </div>
  );
}
