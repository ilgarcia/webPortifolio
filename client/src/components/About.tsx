import Image from "next/image";

import profile from "./img/profile.png";

export function About() {
  return (
    <div className="block md:grid grid-cols-5 gap-12">
      <div className="col-span-3">
        <div className="flex flex-col leading-6 gap-4">
          <p>
            Hello! My name is Igor, my interest in web development started back
            in 2018 when I decided to start my own company. I've always been
            someone who has both a creative and a logical side and i realized it
            would be the perfect fit if i could use my creative side to design
            and my logical side to code.
          </p>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. I want to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <ul className="grid grid-cols-2 mt-5 gap-x-3">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div className="group relative col-span-2 mx-auto w-72 h-72 md:w-[300] md:h-[300] mt-12 md:mt-0">
        <picture className="absolute z-10">
          <Image src={profile} alt="profile picture" className="rounded-sm" />
        </picture>
        <div className="absolute z-20 h-full w-full bg-theme-purple opacity-20 rounded-sm duration-500 ease-in-ou group-hover:bg-transparent"></div>
        <div className="absolute left-2 top-2 h-full w-full bg-theme-orange rounded-sm duration-500 ease-in-out group-hover:bg-theme-purple group-hover:-translate-y-4 group-hover:-translate-x-4"></div>
        <div className="absolute right-2 bottom-2 h-full w-full bg-theme-orange rounded-sm duration-500 ease-in-out group-hover:bg-theme-purple group-hover:translate-y-4 group-hover:translate-x-4"></div>
      </div>
    </div>
  );
}
