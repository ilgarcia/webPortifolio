import Image from "next/image";

import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Socials } from "../components/Socials";

import graphics from "./img/graphics.png";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <main>
      <Banner />
      <section className={styles.container}>
        <Image
          src={graphics}
          alt="graphics"
          className={styles.graphicsPic}
          fill
          sizes="100%"
        />
        <section id="about" className={styles.sectionAbout}>
          <h2 className={styles.numberedHeaders}>About Me</h2>
          <About />
        </section>
        <section id="projects" className={styles.sectionProjects}>
          <h2 className={styles.numberedHeaders}>Some Things I've Built</h2>
          <Projects />
        </section>
        <section id="skills" className={styles.sectionSkills}>
          <h2 className={styles.numberedHeaders}>My Expertise</h2>
          <Skills />
        </section>
        <section id="experience" className={styles.sectionWork}>
          <h2 className={styles.numberedHeaders}>Where I've Worked</h2>
          <Experience />
        </section>
        <section id="contact" className={styles.sectionContact}>
          <Socials />
        </section>
      </section>
    </main>
  );
}
