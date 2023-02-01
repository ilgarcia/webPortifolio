import styles from "./styles.module.scss";
import { RiNewspaperLine } from "react-icons/ri";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export function Socials() {
  return (
    <div className={styles.socials}>
      <ul className={styles.socialsList}>
        <li>
          <a
            href="mailto:limagarcia.igor@gmail.com"
            className={styles.emailDisplay}
          >
            limagarcia.igor@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ilgarcia"
            className={styles.svgDisplay}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ilgarcia/"
            className={styles.svgDisplay}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            className={styles.svgDisplay}
            aria-label="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFileText />
          </a>
        </li>
      </ul>
    </div>
  );
}
