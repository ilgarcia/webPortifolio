import Modal from "react-modal";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

import styles from "./styles.module.scss";

import tela from "./img/tela.png";

interface PortfolioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PortfolioModal({
  isOpen,
  onRequestClose,
}: PortfolioModalProps) {
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
        <div>
          <figure className={styles.imageContainer}>
            <Image width={600} height={400} src={tela} alt="project image" />
          </figure>
        </div>
        <div className={styles.modalText}>
          <div>
            <div className={styles.modalTypeText}>Tipo de projeto</div>
            <h3>Project Name</h3>
          </div>
          <div className={styles.modalBox}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              consequuntur dignissimos ducimus? Saepe, culpa. Aut ipsa,
              laboriosam distinctio id, sint at{" "}
              <span className={styles.textMarkUp}>
                possimus placeat tenetur eum
              </span>
              , animi porro! Quidem, architecto consequuntur.
            </div>
          </div>
          <ul className={styles.codes}>
            <li>code</li>
            <li>code</li>
            <li>code</li>
            <li>code</li>
            <li>code</li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a>
                <RiGithubFill />
              </a>
            </li>
            <li>
              <a>
                <BiLinkExternal />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
