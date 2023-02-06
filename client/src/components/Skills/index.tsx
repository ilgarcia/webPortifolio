import { DiHtml5, DiReact } from "react-icons/di";

import styles from "./styles.module.scss";

export function Skills() {
  return (
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

    </div>
  </div>
  );
}
