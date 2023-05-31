import * as Si from "react-icons/si";

type Props = {
  skills: Skill[];
};

export function Skills({ skills }: Props) {
  function dynamicIcon(icon: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent className="text-3xl lg:text-4xl" />;
  }

  return (
    <section id="skills" className="max-w-6xl min-h-[90vh] mx-auto pt-24 px-4 lg:px-0">
      <h2 className="title-h2 title-numbered">My Expertise</h2>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <div className="h-fit max-w-xs p-8 border-white border-solid border-2">
          <div className="flex items-center mb-4">
            <Si.SiReact className="text-5xl mr-4 " />
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
        <div className="flex flex-wrap justify-center items-center gap-4 mx-auto lg:mx-2">
          {skills.map((skill) => {
            if (skill.display) {
              return (
                <div
                  key={skill._id}
                  className="flex flex-col items-center gap-3 h-fit w-24 lg:w-28 py-5 text-theme-orange bg-theme-inky text-sm rounded-ss-2xl border-b-4 border-theme-orange border-solid ease-in-out transition-transform duration-500 hover:scale-125 hover:z-10"
                >
                  <p>{skill.title}</p>
                  {dynamicIcon(skill.icon)}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
