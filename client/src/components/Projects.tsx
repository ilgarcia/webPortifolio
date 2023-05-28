"use client";
import { useEffect, useState } from "react";
import format from "date-fns/format";

import { PortfolioCard } from "./PortfolioCard";

import axios from "../services/api";

type Props = {
  portfolios: Portfolio[];
};

// interface iconProps {
//   _id: string;
//   title: string;
//   module: string;
//   icon: string;
// }

// interface ProjectsProps {
//   _id: string;
//   image: string;
//   title: string;
//   date: Date;
//   icons: iconProps[];
// }

export function Projects({ portfolios }: Props) {
  // export function Projects() {
  // const [projectsList, setProjectsList] = useState<ProjectsProps[]>([]);
  // const [loading, setLoading] = useState(true);

  // const [show, setShow] = useState(1);

  // useEffect(() => {
  //   getSkills();
  // }, [loading]);

  // async function getSkills() {
  //   await axios
  //     .get("projects")
  //     .then((response) => {
  //       setProjectsList(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // function handleClick() {
  //   setShow(show + 1);
  // }

  return (
    <section className="mx-auto min-h-[80vh] pt-24 px-4 lg:px-0">
      <h2 className="title-h2 title-numbered">Some Things I've Built</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center mx-auto px-8 lg:px-16 gap-8">
          {/* {projectsList.slice(0, (show + 1) * 3).map((project) => { 
          return (
              <PortfolioCard
                key={project._id}
                id={project._id}
                image={`/img/${project.image}`}
                title={project.title}
                date={format(new Date(project.date), "dd MMMM yyyy")}
                icons={project.icons}
              />
          */}

          {portfolios.map((portfolio) => {
            return (
              <PortfolioCard
                key={portfolio._id}
                portfolio={portfolio}
                // id={project._id}
                // image={`/img/${project.image}`}
                // title={project.title}
                // date={format(new Date(project.date), "dd MMMM yyyy")}
                // icons={project.icons}
              />
            );
          })}

          {/* })} */}
        </div>

          {/* See More ----------------------------------- não apagar e concertar depois */}

        {/* {projectsList.length > 6 && (
          <button
            type="button"
            className="bg-transparent max-w-sm w-full border border-solid border-theme-orange text-theme-orange rounded font-display text-lg py-4 px-7 mt-8 mx-4 mb-0 transition-colors ease-in-out bg-theme-inky"
            onClick={handleClick}
          >
            Show More
          </button>
        )} */}
      </div>
    </section>
  );
}
