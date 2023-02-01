import Image from "next/image";

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiNewspaperLine,
} from "react-icons/ri";

import { DiHtml5, DiReact } from "react-icons/di";

import { PortfolioCard } from "../components/PortfolioCard";
import { Tabs } from "../components/Tabs";

import graphics from "./img/graphics.png";
import profile from "./img/profile.png";
import contact from "./img/contact.png";

import styles from "./page.module.scss";
import { Socials } from "../components/Socials";

export default function Page() {
  return (
    <main className={styles.container}>
      <Image
        src={graphics}
        alt="graphics"
        className={styles.graphicsPic}
        fill
        sizes="100%"
      />
      <section id="about" className={styles.sectionAbout}>
        <h2 className={styles.numberedHeaders}>About Me</h2>
        <div className={styles.aboutMe}>
          <div className={styles.profileText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quasi harum dolorum iste nihil quidem facilis, eaque officiis
              delectus. Amet neque architecto quaerat distinctio odit veritatis
              aliquid eum cum accusantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              facilis beatae maiores saepe laboriosam, incidunt, nostrum eaque
              praesentium ex minus deleniti labore qui vero voluptatem in? elit.
              Ipsum voluptate porro eprehenderit doloribus impedit, dolore
              laudantium laborum asperiores sint, incidunt temporibus nulla
              commodi! Corporis cum a dignissimos quae vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              beatae nulla earum, quisquam accusantium molestiae autem tenetur
              velit ipsum qui veritatis dicta nam eveniet quo sunt ratione illo,
              praesentium optio.
            </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                esse iure voluptatibus nemo, soluta accusamus, ducimus veniam
                odit veritatis laboriosam distinctio excepturi atque labore
                quaerat totam in!
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
