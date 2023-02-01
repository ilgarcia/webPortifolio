"use client";
import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

import styles from "./styles.module.scss";

export function Header() {
  const { modal } = useContext(ModalContext);

  const [visible, setVisible] = useState(true);
  const [above, setAbove] = useState(false);

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const above = currentYOffset > 0;

    if (!modal) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setAbove(above);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  useEffect(() => {
    setVisible(!modal);
  }, [modal]);

  return (
    <header
      className={`${styles.headerContainer}  ${
        !visible && styles.navbarHidden
      } ${above ? styles.navbarAbove : styles.navbarBellow}`}
    >
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <a href="#">
            l<span>.</span>garcia<span>_</span>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
