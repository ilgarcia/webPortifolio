// import { DiHtml5, DiReact } from "react-icons/di";

import { useEffect, useState } from "react";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";

import axios from "../../services/api";

import styles from "./styles.module.scss";

interface SkillsProps {
  _id: string;
  title: string;
  module: string;
  icon: string;
}

export function Skills() {
  const [skillsList, setSkillsList] = useState<SkillsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, [loading]);

  async function getSkills() {
    await axios
      .get("skills")
      .then((response) => {
        setSkillsList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function dynamicIcon( icon: any): JSX.Element {
    const IconComponent = Di[icon as keyof typeof Di];

    return <IconComponent />
  }

  return (
    <div className={styles.expertizeContainer}>
      <div className={styles.expertizeBox}>
        <div className={styles.boxTitle}>
          <Di.DiReact />
          <h3>
            <span className={styles.maior}>Frontend Dev</span>
            <span>React, NextJS</span>
          </h3>
        </div>
        <div className={styles.elementContainer}>
          <p>
            Passionate about UI/UX. working with a few projects and development
            experience in HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        {skillsList.map((skill) => {
          return (
            <div key={skill._id} className={styles.skillsCard}>
              <p>{skill.title}</p>
              {dynamicIcon(skill.icon)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
