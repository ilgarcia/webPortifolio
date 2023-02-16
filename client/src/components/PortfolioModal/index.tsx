import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

import axios from "../../services/api";

import styles from "./styles.module.scss";

interface toolsProps {
  _id: string;
  title: string;
}

interface ProjectProps {
  image: string;
  title: string;
  type: string;
  text: string;
  tools: toolsProps[];
  gitLink?: string;
  pageLink?: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}

export function PortfolioModal({
  isOpen,
  onRequestClose,
  id,
}: PortfolioModalProps) {
  const [project, setProject] = useState<ProjectProps>({} as ProjectProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, [loading]);

  async function getSkills() {
    await axios
      .get(`projects/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className={styles.reactModalClose}
      >
        <AiOutlineClose />
      </button>

      <div className={styles.modalContainer}>
        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={`/img/${project.image}`}
            width={600}
            height={300}
            alt="project image"
          />
        </figure>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTypeText}>{project.type}</div>
            <h3>{project.title}</h3>
          </div>
          <div className={styles.modalBox}>
            <div>{project.text}</div>
          </div>
          <ul className={styles.codes}>
            {project.tools?.map((tool) => {
              return <li key={tool._id}>{tool.title}</li>;
            })}
          </ul>
          <ul className={styles.links}>
            {project.gitLink && (
              <li>
                <a href={project.gitLink} target="_blank">
                  <RiGithubFill />
                </a>
              </li>
            )}
            {project.pageLink && (
              <li>
                <a href={project.pageLink} target="_blank">
                  <BiLinkExternal />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
