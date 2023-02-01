"use client";

import { useState } from "react";

import styles from "./styles.module.scss";

export function Tabs() {
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
          Trabalho 1
        </button>
        <button
          className={`${styles.tabs} ${openTab === 2 && styles.active}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Trabalho 2
        </button>
        <button
          className={`${styles.tabs} ${openTab === 3 && styles.active}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
        >
          Trabalho 3
        </button>
      </div>
      <div className={styles.experienceInfo}>
        <div className={`${styles.info} ${openTab !== 1 && styles.hidden}`}>
          <h3>Trabalho 1</h3>
          <p>Month Year - Month Year</p>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                eligendi autem quaerat reprehenderit! Non est quidem
                consequatur, totam, expedita voluptatum asperiores repudiandae
                esse voluptas reiciendis nobis aliquid provident tenetur sunt.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, nihil. Atque repudiandae, quia voluptatibus illo eius
                cupiditate nesciunt iusto sint tempore fugiat quam corporis
                magnam, dolore iste enim eos? Minima?
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.info} ${openTab !== 2 && styles.hidden}`}>
          <h3>Trabalho 2</h3>
          <p>Month Year - Month Year</p>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                eligendi autem quaerat reprehenderit! Non est quidem
                consequatur, totam, expedita voluptatum asperiores repudiandae
                esse voluptas reiciendis nobis aliquid provident tenetur sunt.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, nihil. Atque repudiandae, quia voluptatibus illo eius
                cupiditate nesciunt iusto sint tempore fugiat quam corporis
                magnam, dolore iste enim eos? Minima?
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.info} ${openTab !== 3 && styles.hidden}`}>
          <h3>Trabalho 3</h3>
          <p>Month Year - Month Year</p>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                eligendi autem quaerat reprehenderit! Non est quidem
                consequatur, totam, expedita voluptatum asperiores repudiandae
                esse voluptas reiciendis nobis aliquid provident tenetur sunt.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, nihil. Atque repudiandae, quia voluptatibus illo eius
                cupiditate nesciunt iusto sint tempore fugiat quam corporis
                magnam, dolore iste enim eos? Minima?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
