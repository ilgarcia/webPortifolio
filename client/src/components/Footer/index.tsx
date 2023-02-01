import styles from "./styles.module.scss";
import { RiCopyrightLine, RiArrowUpLine } from "react-icons/ri";

export function Footer() {
  return (
    <footer className={styles.footerSection}>
      <a href="#">
        <div className={styles.arrowUp}>
          <RiArrowUpLine />
        </div>
      </a>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <RiCopyrightLine /> 2023 Igor Lima Garcia
        </div>
      </div>
    </footer>
  );
}
