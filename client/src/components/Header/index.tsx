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

const hamNavVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
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

  const items = ["about", "projects", "skills", "experience", "contact"];

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
          <a href="/#">
            l<span>.</span>garcia<span>_</span>
          </a>
        </m.div>

        <section className={`${enabled ? styles.enabled : styles.disabled}`}>
          <button className={styles.hamStyled} onClick={handleNavBar}>
            <div className={styles.hamBox}>
              <div className={styles.hamBoxInner}></div>
            </div>
          </button>

          <div className={`${styles.navList}`}>
            <ul>
              {items.map((item) => {
                return (
                  <m.li
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={item}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </m.li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* <div
          className={`${styles.hamNavBar} ${
            enabled ? styles.enabled : styles.disabled
          }`}
        >
          <button className={styles.hamStyled} onClick={handleNavBar}>
            <div className={styles.hamBox}>
              <div className={styles.hamBoxInner}></div>
            </div>
          </button>
          <m.aside
            className={styles.sideBar}
            animate={enabled ? "open" : "closed"}
          >
            <div className={`${styles.navList} ${styles.asideList}`}>
              <m.ul variants={hamNavVariants}>
                <m.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/#about" onClick={handleClick}>
                    About
                  </a>
                </m.li>
                <m.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/#projects" onClick={handleClick}>
                    Projects
                  </a>
                </m.li>
                <m.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/#skills" onClick={handleClick}>
                    Skills
                  </a>
                </m.li>
                <m.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a href="/#experience" onClick={handleClick}>
                    Experience
                  </a>
                </m.li>
                <m.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/#contact" onClick={handleClick}>
                    Contact
                  </a>
                </m.li>
              </m.ul>
            </div>
          </m.aside>
        </div> */}
      </m.nav>
    </header>
  );
}
