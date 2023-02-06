import Image from "next/image";

import profile from "./img/profile.png";

import styles from "./styles.module.scss";

export function About() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.profileText}>
          <p>
            Hello! My name is Igor, my interest in web development started back
            in 2018 when I decided to start my own company. I've always been
            someone who has both a creative and a logical side and i realized it
            would be the perfect fit if i could use my creative side to design
            and my logical side to code.
          </p>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. I want to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
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
        <picture>
          <Image
            className={styles.perfilImage}
            src={profile}
            alt="profile picture"
          />
        </picture>
      </div>
    </div>
  );
}
