import Image from "next/image";

import graphicsBanner from "./img/graphicsBanner.png";
import purpleStar from "./img/purpleStar.png";
import whiteStar from "./img/whiteStar.png";
import lineStar from "./img/lineStar.png";
import styles from "./styles.module.scss";

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
      <div className={styles.starOne}>
        <Image
          src={purpleStar}
          alt="Purple Star"
          className={styles.purpleStar}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.starTwo}>
        <Image
          src={whiteStar}
          alt="Purple Star"
          className={styles.whiteStar}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.starThree}>
        <Image
          src={whiteStar}
          alt="Purple Star"
          className={styles.whiteStar}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.starFour}>
        <Image
          src={lineStar}
          alt="Purple Star"
          className={styles.lineStar}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.starFive}>
        <Image
          src={lineStar}
          alt="Purple Star"
          className={styles.lineStar}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.bannerText}>
          <h1>Hi There! I'm Igor</h1>
          <p>
            A <span>Frontend developer</span> who writes clean, elegant and
            efficient code.
          </p>
          <p>
            I'm a software engineer specializing in building exceptional and
            practical digital experiences. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
