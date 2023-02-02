// "use client"

import Image from "next/image";
import { motion as m, Variants } from "framer-motion";

import { DiHtml5, DiReact } from "react-icons/di";

import { PortfolioCard } from "../components/PortfolioCard";
import { Tabs } from "../components/Tabs";

import graphics from "./img/graphics.png";
import profile from "./img/profile.png";
// import contact from "./img/contact.png";

import styles from "./page.module.scss";
import { Socials } from "../components/Socials";

export default function Page() {
  // const cardVariants: Variants = {
  //   offscreen: {
  //     opacity: 0,
  //     x: -300,
  //   },
  //   onscreen: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8,
  //     },
  //   },
  // };

  return (
    <main className={styles.container}>
      <Image
        src={graphics}
        alt="graphics"
        className={styles.graphicsPic}
        fill
        sizes="100%"
      />
      <section
        id="about"
        className={styles.sectionAbout}
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        // variants={cardVariants}
      >
        <h2 className={styles.numberedHeaders}>About Me</h2>
        <div className={styles.aboutMe}>
          <div>
            <div className={styles.profileText}>
              <p>
                Hello! My name is Igor, my interest in web development started
                back in 2018 when I decided to start my own company. I've always
                been someone who has both a creative and a logical side and i
                realized it would be the perfect fit if i could use my creative
                side to design and my logical side to code.
              </p>
              <p>
                Well-organized person, problem solver, independent employee with
                high attention to detail. I want to keep learning, continue
                challenging myself, and do interesting things that matter.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <ul className={styles.skillList}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className={styles.profilePic}>
            <div className={styles.wrapper}>
              <picture>
                <Image
                  className={styles.perfilImage}
                  src={profile}
                  alt="profile picture"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.sectionProjects}>
        <h2 className={styles.numberedHeaders}>Some Things I've Built</h2>
        <div className={styles.cardsHolders}>
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
          <PortfolioCard
            image={"/img/card.png"}
            title={"Em construção"}
            date={"29 de Janeiro de 2023"}
            // icon={<DiHtml5 />}
          />
        </div>
      </section>
      <section id="skills" className={styles.sectionSkills}>
        <h2 className={styles.numberedHeaders}>My Expertise</h2>
        <div className={styles.expertizeContainer}>
          <div className={styles.expertizeBox}>
            <div className={styles.boxTitle}>
              <DiReact />
              <h3>
                <span className={styles.maior}>Frontend Dev</span>
                <span>React, NextJS</span>
              </h3>
            </div>
            <div className={styles.elementContainer}>
              <p>
                Passionate about UI/UX. working with a few projects and
                development experience in HTML, CSS, JS, React and NextJS
                frameworks.
              </p>
            </div>
          </div>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
            <div className={styles.skillsCard}>
              <p>HTML5</p>
              <DiHtml5 />
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className={styles.sectionWork}>
        <h2 className={styles.numberedHeaders}>Where I've Worked</h2>
        <Tabs />
      </section>
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
      <Socials />
    </main>
  );
}
