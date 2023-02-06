"use client";

import Image from "next/image";
import { motion as m, Variants } from "framer-motion";

import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

import contact from "./img/contact.png";

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
    <div>
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
      <div className={styles.containerContact}>
        <Image
          src={contact}
          alt="Contact me"
          className={styles.contactPic}
          // fill
          // sizes="100%"
        />
        <h2>CONTACT ME</h2>
        <div className={styles.socialsLinks}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            veritatis quam rerum sunt officia culpa, commodi excepturi. Enim
            nisi quisquam natus omnis cumque minima at, esse dignissimos eaque
            ipsum beatae.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/ilgarcia"
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
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText />
              </a>
            </li>
          </ul>
          <p>
            <a
              href="mailto:limagarcia.igor@gmail.com"
              className={styles.emailDisplay}
            >
              limagarcia.igor@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
