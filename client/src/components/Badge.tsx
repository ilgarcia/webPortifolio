"use client";

import { useEffect, useState } from "react";
import * as Si from "react-icons/si";

import axios from "../services/api";

interface SkillsProps {
  _id: string;
  title: string;
  module: string;
  icon: string;
}

export function Badge() {
  const [skillsList, setSkillsList] = useState<SkillsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, [loading]);

  async function getSkills() {
    await axios
      .get("skills")
      .then((response) => {
        setSkillsList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function dynamicIcon(icon: string, module: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent className="text-3xl lg:text-4xl" />;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mx-auto lg:mx-2">
      {skillsList.map((skill) => {
        return (
          <div
            key={skill._id}
            className="flex flex-col items-center gap-3 h-fit w-24 lg:w-28 py-5 text-theme-orange bg-theme-inky text-sm rounded-ss-2xl border-b-4 border-theme-orange border-solid ease-in-out transition-transform duration-300 hover:scale-125 hover:z-10 "
          >
            <p>{skill.title}</p>
            {dynamicIcon(skill.icon, skill.module)}
          </div>
        );
      })}
    </div>
  );
}
