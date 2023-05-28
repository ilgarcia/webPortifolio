import Image from "next/image";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

import { socials } from "../../constants";

import contact from "./img/contact.png";

export function Contact() {
  return (
    <section id="contact" className="relative text-center my-32">
      <Image
        src={contact}
        alt="Contact me"
        className="relative mx-auto top-5 w-3/5 lg:w-2/5 object-contain"
      />
      <h2 className="title-h2 mt-0">CONTACT ME</h2>
      <div className="text-slate-300 mt-12">
        <p className="max-w-md mx-auto leading-6">
          I'm currently looking for a new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <ol className="flex justify-center text-theme-orange mt-8 text-2xl">
          <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
            <a
              href={socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FiGithub />
            </a>
          </li>
          <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
            <a
              href={socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </li>
          <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
            <a
              href={socials.resume}
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculum"
            >
              <FiFileText />
            </a>
          </li>
        </ol>
        <p className="mx-4 mt-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
          <a href={`mailto:${socials.email}`} className="text-slate-300">
            {socials.email}
          </a>
        </p>
      </div>
    </section>
  );
}

