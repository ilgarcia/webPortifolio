import styles from "./styles.module.scss";
import { RiGithubFill, RiLinkedinBoxFill} from "react-icons/ri"

export function Header() {
  return(
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>l<span>.</span>garcia</div>
          <nav>
            <ul>
              <li>about</li>
              <li>Portfolio</li>
              <li>Skills</li>
              <li>Resume</li>
              <li>Contact</li>
              <li><RiGithubFill className={styles.socialIcons}/></li>
              <li><RiLinkedinBoxFill className={styles.socialIcons}/></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}