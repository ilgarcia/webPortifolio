"use client";

import { motion as m, Variants } from "framer-motion";

import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

import styles from "./styles.module.scss";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.2 },
  },
};

export function Socials() {
  return (
    <m.div
      className={styles.socials}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
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
    </m.div>
  );
}
