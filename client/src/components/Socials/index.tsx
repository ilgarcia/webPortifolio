import styles from "./styles.module.scss";
import {
  RiNewspaperLine,
} from "react-icons/ri";
import {
  FiGithub,
  FiLinkedin,
  FiFileText,

} from "react-icons/fi";

export function Socials() {
  return (
    <div className={styles.socials}>
      <ul className={styles.socialsList}>
        <li><a href="" className={styles.emailDisplay}>limagarcia.igor@gmail.com</a></li>
        <li><a href="" className={styles.svgDisplay}><FiGithub /></a></li>
        <li><a href="" className={styles.svgDisplay}><FiLinkedin /></a></li>
        <li><a href="" className={styles.svgDisplay}><FiFileText /></a></li>
      </ul>
    </div>
  );
}
