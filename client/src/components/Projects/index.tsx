import { useEffect, useState } from "react";
import format from 'date-fns/format'

import { PortfolioCard } from "../PortfolioCard";

import axios from "../../services/api";

import styles from "./styles.module.scss";

interface iconProps {
  _id: string;
  title: string;
  module: string;
  icon: string;
}

interface ProjectsProps {
  _id: string;
  image: string;
  title: string;
  date: Date;
  icons: iconProps[];
}

export function Projects() {
  const [projectsList, setProjectsList] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(1);

  useEffect(() => {
    getSkills();
  }, [loading]);

  async function getSkills() {
    await axios
      .get("projects")
      .then((response) => {
        setProjectsList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleClick() {
    setShow(show + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardsHolders}>
        {projectsList.slice(0, (show + 1) * 3).map((project) => {
          return (
            <PortfolioCard
              key={project._id}
              id={project._id}
              image={`/img/${project.image}`}
              title={project.title}
              date={format(new Date(project.date), 'dd MMMM yyyy')}
              icons={project.icons}
            />
          );
        })}
      </div>
      {  projectsList.length > 6 &&
      <button type="button" className={styles.buttonMore} onClick={handleClick}>
        Show More
      </button>
      }
    </div>
  );
}
