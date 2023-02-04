"use client";

import { useState } from "react";

import styles from "./styles.module.scss";

export function Experience() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceTabs}>
        <button
          className={`${styles.tabs} ${openTab === 1 && styles.active}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
        >
          Conta-Mais
        </button>
        <button
          className={`${styles.tabs} ${openTab === 2 && styles.active}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Itaú Unibanco
        </button>
        <button
          className={`${styles.tabs} ${openTab === 3 && styles.active}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
        >
          Itaú Unibanco
        </button>
      </div>
      <div className={styles.experienceInfo}>
        <div className={`${styles.info} ${openTab !== 1 && styles.hidden}`}>
          <h3>Conta-Mais</h3>
          <p>Managing Partner - Aug 2018 - Jan 2022</p>
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
        <div className={`${styles.info} ${openTab !== 2 && styles.hidden}`}>
          <h3>Itaú Unibanco</h3>
          <p>Analyst - Apr 2016 - Aug 2018</p>
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
        <div className={`${styles.info} ${openTab !== 3 && styles.hidden}`}>
          <h3>Itaú Unibanco</h3>
          <p>Intern - Jun 2014 - Apr 2016</p>
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
