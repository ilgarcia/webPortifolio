import { PortfolioCard } from "../PortfolioCard";

import styles from "./styles.module.scss";

export function Projects() {
  return (
    <div className={styles.cardsHolders}>
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
    <PortfolioCard
      image={"/img/card.png"}
      title={"Em construção"}
      date={"29 de Janeiro de 2023"}
      // icon={<DiHtml5 />}
    />
  </div>
  );
}
