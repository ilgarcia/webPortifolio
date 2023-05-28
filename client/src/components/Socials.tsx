import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

import { SocialMotion } from "./Motion";

import { socials } from "../../constants";

export function Socials() {
  return (
    <section>
      <SocialMotion>
        <ol className="flex flex-col items-center m-0 p-0 after:contents-[''] after:block after:w-0.5 after:h-24 after:mt-3 after:bg-theme-orange">
          <li className="flex items-center mb-32 transform rotate-90 ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href="mailto:limagarcia.igor@gmail.com"
              className="text-sm tracking-widest font-display"
            >
              {socials.email}
            </a>
          </li>
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={socials.github}
              className="text-xl"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FiGithub />
            </a>
          </li>
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={socials.linkedin}
              className="text-xl"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </li>
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={socials.resume}
              className=" text-xl"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculum"
            >
              <FiFileText />
            </a>
          </li>
        </ol>
      </SocialMotion>
    </section>
  );
}

//     li {
//       margin: 10px auto;
//       a {
//         padding: 10px;
//       }

//       transition: all 0.6s;

//       &:hover {
//         transform: translateY(-3px);
//       }

//       &:hover,
//       &:focus {
//         color: var(--slate-100);
//       }
//     }
//   }
// }

//  ----------------
