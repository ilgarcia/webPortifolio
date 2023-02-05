"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { motion as m, Variants } from "framer-motion";
import { ToggleContext } from "../../context/ToggleContext";

import styles from "./styles.module.scss";

const navVariants: Variants = {
  visible: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function Header() {
  const { modal } = useContext(ToggleContext);

  const [visible, setVisible] = useState(true);
  const [above, setAbove] = useState(false);

  const [enabled, setEnabled] = useState(false);

  const ref = useRef<any>(null);

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

  useEffect(() => {
    if (!enabled) return;
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleNavBar();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [enabled]);

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

  function handleNavBar() {
    setEnabled(!enabled);
    document.body.classList.toggle("blur");
  }

  function handleClick() {
    if (enabled) {
      setEnabled(!enabled);
      document.body.classList.toggle("blur");
    }
  }

  return (
    <header
      className={`${styles.headerContainer}  ${
        !visible && styles.navbarHidden
      } ${above ? styles.navbarBorder : styles.navbarNoBorder}`}
    >
      <m.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={styles.headerContent}
      >
        <m.div variants={itemVariants} className={styles.logo}>
          <a href="#">
            l<span>.</span>garcia<span>_</span>
          </a>
        </m.div>
        <div className={`${styles.navList} ${styles.horizontalList}`}>
          <ul>
            <m.li variants={itemVariants}>
              <a href="#about" onClick={handleClick}>About</a>
            </m.li>
            <m.li variants={itemVariants}>
              <a href="#projects" onClick={handleClick}>Projects</a>
            </m.li>
            <m.li variants={itemVariants}>
              <a href="#skills" onClick={handleClick}>Skills</a>
            </m.li>
            <m.li variants={itemVariants}>
              <a href="#experience" onClick={handleClick}>Experience</a>
            </m.li>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
        <div
          className={`${styles.hamNavBar} ${enabled ? styles.enabled : styles.disabled}`}
          ref={ref}
        >
          <button className={styles.hamStyled} onClick={handleNavBar}>
            <div className={styles.hamBox}>
              <div className={styles.hamBoxInner}></div>
            </div>
          </button>
          <aside className={styles.sideBar}>
            <div className={`${styles.navList} ${styles.asideList}`}>
              <ul>
                <m.li variants={itemVariants}>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </m.li>
                <m.li variants={itemVariants}>
                  <a href="#projects" onClick={handleClick}>
                    Projects
                  </a>
                </m.li>
                <m.li variants={itemVariants}>
                  <a href="#skills" onClick={handleClick}>
                    Skills
                  </a>
                </m.li>
                <m.li variants={itemVariants}>
                  <a href="#experience" onClick={handleClick}>
                    Experience
                  </a>
                </m.li>
                {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
              </ul>
            </div>
          </aside>
        </div>
      </m.nav>
    </header>
  );
}
