"use client";

import Image from "next/image";
import { motion as m, Variants } from "framer-motion";

import { Experience } from "../components/Experience";

import graphics from "./img/graphics.png";

import styles from "./page.module.scss";
import { Socials } from "../components/Socials";
import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

export default function Page() {
  return (
    <main>
      <Banner />
      <div className={styles.container}>
        <Image
          src={graphics}
          alt="graphics"
          className={styles.graphicsPic}
          fill
          sizes="100%"
        />
        <m.section
          id="about"
          className={styles.sectionAbout}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h2 className={styles.numberedHeaders}>About Me</h2>
          <About />
        </m.section>
        <m.section
          id="projects"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <h2 className={styles.numberedHeaders}>Some Things I've Built</h2>
          <Projects />
        </m.section>
        <m.section
          id="skills"
          className={styles.sectionSkills}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h2 className={styles.numberedHeaders}>My Expertise</h2>
          <Skills />
        </m.section>
        <m.section
          id="experience"
          className={styles.sectionWork}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h2 className={styles.numberedHeaders}>Where I've Worked</h2>

          <Experience />
        </m.section>
        <section
          id="contact"
          className={styles.sectionContact}
        >
          <Socials />
        </section>
      </div>
    </main>
  );
}
