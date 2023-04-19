import Image from "next/image";

import degrade from "./img/degrade.png";

import styles from "./styles.module.scss";

export function BannerBlog() {
  return (
    <section className={styles.banner}>
      <Image
        src={degrade}
        alt={"degrade"}
        className={styles.degrade}
        fill
        sizes="100%"
      />

      <div className={styles.container}>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>
            Igor's Daily <span>Blog.</span>
          </h1>
          <p className={styles.bannerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            laoreet arcu. Phasellus congue, libero in bibendum sagittis, erat
            nisl placerat diam, non faucibus arcu nisi vel magna. Aenean ac diam
            dapibus, placerat nunc{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
