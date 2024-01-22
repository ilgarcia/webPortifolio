import Image from "next/image";

import { groq } from "next-sanity";

import { client } from "../../../lib/sanity.client";

import { BannerPortfolio } from "../../components/BannerPortfolio";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { Experience } from "../../components/Experience";
import { Socials } from "../../components/Socials";
import { Contact } from "../../components/Contact";

import graphics from "./img/graphics.png";

const queryPortfolios = groq`
  *[_type=='portfolio']{
    ...,
    projectType->,
    skill[]->,
    tools[]->,
  } | order(_createdAt desc)
`;

const querySkills = groq`
  *[_type=='skill']{
    ...,
  } | order(_createdAt)
`;

export default async function Page() {
  const portfolios = await client.fetch(queryPortfolios);
  const skills = await client.fetch(querySkills);
  
  return (
    <main>
      <BannerPortfolio />
      <section className="relative max-w-6xl mx-auto [counter-reset:section-number] text-slate-100">
        {/* <Image
          src={graphics}
          alt="graphics"
          className={styles.graphicsPic}
          fill
          sizes="100%"
        /> */}
        <About />
        {/* <Projects /> */}
        <Projects portfolios={portfolios} />
        <Skills skills={skills} />
        <Experience />
        <Contact />
        <Socials />
      </section>
    </main>
  );
}

// @import "../../styles/mixins.scss";

// @include lessDesktop {
//   .graphicsPic {
//     display: none;
//   }
// }

// .container {
//   position: relative;

//   .graphicsPic {
//     object-fit: none;
//     object-position: 50% 0%;
//   }

//   section {
//     max-width: 1220px;
//     margin: 0 auto;
//     position: relative;
//     color: var(--slate-100);

//   }
