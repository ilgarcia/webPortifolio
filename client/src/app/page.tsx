"use client";

import Image from "next/image";
import { motion as m, Variants } from "framer-motion";

import { Experience } from "../components/Experience";

import graphics from "./img/graphics.png";
// import contact from "./img/contact.png";

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
          viewport={{ once: true, amount: 0.5 }}
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
        {/* <section id="contact">
        <div className={styles.containerContact}>
          <Image
            src={contact}
            alt="Contact me"
            className={styles.contactPic}
            fill
            sizes="100%"
          />
          <h2>CONTACT ME</h2>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socials}>
            <a>
              <RiGithubFill />
              <div>
                <h3>GITHUB</h3>
                <p>Follow to see my projects</p>
              </div>
            </a>
            <a>
              <RiLinkedinBoxFill />
              <div>
                <h3>LINKEDIN</h3>
                <p>Let's connect on linkedin</p>
              </div>
            </a>
            <a>
              <RiNewspaperLine />
              <div>
                <h3>RESUME</h3>
                <p>Download my resume</p>
              </div>
            </a>
          </div>
          <div className={styles.messageContainer}>
            <p>
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </p>
            <form className={styles.messageForm}>
              <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
              </div>
              <div>
                <textarea rows={8} placeholder="Message" />
              </div>
              <button type="submit">Send message!</button>
            </form>
          </div>
        </div>
      </section> */}
      </div>
      <Socials />
    </main>
  );
}
