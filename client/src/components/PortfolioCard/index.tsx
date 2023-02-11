"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import Modal from "react-modal";


import { IconBaseProps, icons } from "react-icons";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";

import { PortfolioModal } from "../PortfolioModal";
import { ToggleContext } from "../../context/ToggleContext";

import styles from "./styles.module.scss";

Modal.setAppElement("#__next");

interface cardProps {
  image: string;
  title: string;
  date: string;
  // icon: React.ComponentType<IconBaseProps>;
  // icon: JSX.Element;
  // icons?: React.ReactElement[];
  // icons?: {[key: string]: any};
  // (icons?: any[]): ReactNode[]
  // (icons?: any[]): JSX.Element[];
}

// export function PortfolioCard({ image, title, date, icon: Icon }: cardProps) {
export function PortfolioCard({ image, title, date }: cardProps) {
  const { setModal } = useContext(ToggleContext);

  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);

  const cardIcons: { icons: JSX.Element[] } = {
    icons: [<Di.DiHtml5 />, <Di.DiCss3 />, <Si.SiNextdotjs />],
  };

  function handleOpenPortfolioModal() {
    document.body.classList.toggle("blur");
    setModal(true);
    setPortfolioModalOpen(true);
  }

  function handleClosePortfolioModal() {
    document.body.classList.toggle("blur");
    setModal(false);
    setPortfolioModalOpen(false);
  }

  return (
    <>
      <a onClick={handleOpenPortfolioModal} className={styles.cards}>
        <div className={styles.cover}>
          <Image
            src={image}
            alt="Card Image"
            className={styles.cardImg}
            fill
            sizes="100%"
          />
          <h3>{title}</h3>
          <div className={styles.badgesContainer}>
            {cardIcons.icons.map((icon, index) => {
              return (
                <div key={index} className={styles.badges}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.info}>
          <p>{date}</p>
          <p className={styles.seeMore}>See more</p>
        </div>
      </a>
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onRequestClose={handleClosePortfolioModal}
      />
    </>
  );
}
