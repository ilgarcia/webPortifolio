"use client";

import Image from "next/image";
import { motion as m, Variants } from "framer-motion";

import graphicsBanner from "./img/graphicsBanner.png";
import purpleStar from "./img/purpleStar.png";
import whiteStar from "./img/whiteStar.png";
import lineStar from "./img/lineStar.png";
import styles from "./styles.module.scss";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const starVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <Image
        src={graphicsBanner}
        alt="Banner picture"
        className={styles.bannerPic}
        fill
        sizes="100%"
      />
      <m.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.animationContainer}
      >
        <m.div className={styles.starOne} variants={starVariants}>
          <Image
            src={purpleStar}
            alt="Purple Star"
            className={styles.purpleStar}
            fill
            sizes="100%"
          />
        </m.div>
        <m.div className={styles.starTwo} variants={starVariants}>
          <Image
            src={whiteStar}
            alt="Purple Star"
            className={styles.whiteStar}
            fill
            sizes="100%"
          />
        </m.div>
        <m.div className={styles.starThree} variants={starVariants}>
          <Image
            src={whiteStar}
            alt="Purple Star"
            className={styles.whiteStar}
            fill
            sizes="100%"
          />
        </m.div>
        <m.div className={styles.starFour} variants={starVariants}>
          <Image
            src={lineStar}
            alt="Purple Star"
            className={styles.lineStar}
            fill
            sizes="100%"
          />
        </m.div>
        <m.div className={styles.starFive} variants={starVariants}>
          <Image
            src={lineStar}
            alt="Purple Star"
            className={styles.lineStar}
            fill
            sizes="100%"
          />
        </m.div>
        <div className={styles.textContainer}>
          <div className={styles.bannerText}>
            <m.h1 variants={itemVariants}>Hi There! I'm Igor</m.h1>
            <m.p variants={itemVariants}>
              A <span>Frontend developer</span> who writes clean, elegant and
              efficient code.
            </m.p>
            <m.p variants={itemVariants}>
              I'm a software engineer specializing in building exceptional and
              practical digital experiences. I'm quietly confident, naturally
              curious, and perpetually working on improving my chops one design
              problem at a time.
            </m.p>
          </div>
        </div>
      </m.div>
    </section>
  );
}
