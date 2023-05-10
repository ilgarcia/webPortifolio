"use client";

import { useState } from "react";

export function Experience() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="lg:flex lg:max-w-4xl">
      <div className="flex mb-6 overflow-x-auto lg:block lg:mb-0 ">
        <button
          className={`"flex whitespace-nowrap max-w-[220px] w-full px-2 py-3 border-solid border-gray-600 border-b-2 lg:border-l-2 lg:border-b-0 hover:bg-opacity-10 hover:border-theme-orange hover:bg-theme-orange " ${
            openTab === 1 &&
            "text-theme-orange border-theme-orange bg-theme-orange bg-opacity-10"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
        >
          Conta-Mais
        </button>
        <button
          className={`"flex whitespace-nowrap max-w-[220px] w-full px-2 py-3 border-solid border-gray-600 border-b-2 lg:border-l-2 lg:border-b-0 hover:bg-opacity-10 hover:border-theme-orange hover:bg-theme-orange " ${
            openTab === 2 &&
            "text-theme-orange border-theme-orange bg-theme-orange bg-opacity-10"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Itaú Unibanco
        </button>
        <button
          className={`"flex whitespace-nowrap max-w-[220px] w-full px-2 py-3 border-solid border-gray-600 border-b-2 lg:border-l-2 lg:border-b-0 hover:bg-opacity-10 hover:border-theme-orange hover:bg-theme-orange " ${
            openTab === 3 &&
            "text-theme-orange border-theme-orange bg-theme-orange bg-opacity-10"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
        >
          Itaú Unibanco
        </button>
      </div>
      <div className="ml-5">
        <div
          className={`relative w-full h-auto py-3 px-1 ${
            openTab !== 1 && "hidden"
          }`}
        >
          <h3 className="title-tab">Conta-Mais</h3>
          <p className="mb-6 text-slate-300">
            Managing Partner - Aug 2018 - Jan 2022
          </p>
          <div>
            <ul>
              <li>
                Ensure the operation of all internal processes, website
                development as well as hire the necessary technological tools.
              </li>
              <li>
                Code development and maintenance, first WordPress was used and
                then it was migrated to React.
              </li>
              <li>
                Write modern, performant, maintainable code for internal
                projects
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`relative w-full h-auto py-3 px-1 ${
            openTab !== 2 && "hidden"
          }`}
        >
          <h3 className="title-tab">Itaú Unibanco</h3>
          <p className="mb-6 text-slate-300">Analyst - Apr 2016 - Aug 2018</p>
          <div>
            <ul>
              <li>Creation of tools and process automation.</li>
              <li>
                Process mapping, preparation of management reports, capacity
                controls, productivity indicators, inventory and SLA's.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`relative w-full h-auto py-3 px-1 ${
            openTab !== 3 && "hidden"
          }`}
        >
          <h3 className="title-tab">Itaú Unibanco</h3>
          <p className="mb-6 text-slate-300">Intern - Jun 2014 - Apr 2016</p>
          <div>
            <ul>
              <li>
                Monitor occurrences related to technological solutions,
                detecting opportunities/improvements.
              </li>
              <li>Assist in project planning and management.</li>
              <li>
                Structure and actively participate in the acquisition,
                logistics, activation, support and maintenance process for
                users.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
