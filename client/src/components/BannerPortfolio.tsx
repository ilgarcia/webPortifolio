import Image from "next/image";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

import graphicsBanner from "./img/graphicsBanner.png";
import purpleStar from "./img/purpleStar.png";
import whiteStar from "./img/whiteStar.png";
import lineStar from "./img/lineStar.png";

export function BannerPortfolio() {
  return (
    <section className="flex items-center bg-black h-screen pt-8 border-b-8 border-solid border-theme-purple border-opacity-30">
      <div className="hidden lg:block lg:z-0">
        <Image
          src={purpleStar}
          alt="Purple Star"
          className="absolute top-20 left-16 animate-shine"
          height={55}
          width={55}
        />
        <Image
          src={whiteStar}
          alt="White Star"
          className="absolute top-16 left-12"
          height={35}
          width={35}
        />
        <Image
          src={whiteStar}
          alt="White Star"
          className="absolute top-36 right-1/3"
          height={40}
          width={40}
        />
        <Image
          src={lineStar}
          alt="Line Star"
          className="absolute top-72 right-[13%]"
          height={30}
          width={30}
        />
        <Image
          src={lineStar}
          alt="Line Star"
          className="absolute top-80 right-[15%]"
          height={45}
          width={45}
        />
      </div>
      <Image
        src={graphicsBanner}
        alt="Banner picture"
        className="object-contain object-bottom hidden md:block md:z-0"
        fill
        sizes="100%"
      />
      <div className="max-w-7xl mx-auto px-8 z-10">
        <div className="flex flex-col flex-wrap gap-7 w-4/5 leading-7 md:leading-8 lg:leading-loose">
          <h1 className="text-theme-orange md:text-xl">Hi There! I'm Igor</h1>
          <p className="text-2xl md:text-3xl lg:text-5xl md:leading-snug lg:leading-snug">
            A <span className="text-theme-purple">Fullstack developer</span> who
            writes clean, elegant and efficient code.
          </p>
          <p className="max-w-3xl font-light md:text-xl ">
            I'm a software engineer specializing in building exceptional and
            practical digital experiences. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
          <div>
            <ol className="flex mt-4 text-theme-orange text-2xl gap-6 lg:hidden">
              <li className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
                <a
                  href="https://github.com/ilgarcia"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              </li>
              <li className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
                <a
                  href="https://www.linkedin.com/in/ilgarcia/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
              </li>
              <li className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
                <a
                  href="/resume.pdf"
                  aria-label="Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFileText />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}