"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion as m, Variants, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <m.div
        className={styles.socials}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: {
            opacity: !isInView ? 1 : 0,
            y: !isInView ? 0 : 300,
            transition: { duration: 1, delay: 0.2 },
          },
        }}
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
              title="GitHub"
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
              title="LinkedIn"
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
              title="Curriculum"
            >
              <FiFileText />
            </a>
          </li>
        </ul>
      </m.div>

      <section className={styles.containerContact}>
        <Image src={contact} alt="Contact me" className={styles.contactPic} />
        <h2>CONTACT ME</h2>
        <div className={styles.socialsLinks}>
          <p>
            I'm currently looking for a new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/ilgarcia"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
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
                title="LinkedIn"
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
                title="Curriculum"
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
      </section>
    </section>
  );
}

