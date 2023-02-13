"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import Modal from "react-modal";

import * as Si from "react-icons/si";

import { PortfolioModal } from "../PortfolioModal";
import { ToggleContext } from "../../context/ToggleContext";

import styles from "./styles.module.scss";

Modal.setAppElement("#__next");

interface iconProps {
  _id: string;
  title: string;
  module: string;
  icon: string;
}

interface cardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  icons: iconProps[];
}

export function PortfolioCard({ id, image, title, date, icons }: cardProps) {
  const { setModal } = useContext(ToggleContext);

  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);

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

  function dynamicIcon(icon: string, module: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent />;
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
            {icons.map((icon) => {
              return (
                <div key={icon._id} className={styles.badges}>
                  {dynamicIcon(icon.icon, icon.module)}
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
        id={id}
      />
    </>
  );
}
