import React from "react";
import styles from "./styles.module.css";

import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";

export const Tweet = ({ name, username, children }) => {
  return (
    <article className={styles.tweet}>
      <div className={styles.header}>
        <img src="https://picsum.photos/100" alt="Profile pic" />
        <div className={styles.container}>
          <span>{name}</span>
          <span>{username}</span>
          <span className="">20h</span>
          <button>...</button>
        </div>
      </div>
      {children}
      <div className="styles.footer">
        <ul>
          <li>
            <button>
              <FaHeart />
            </button>
            10
          </li>
          <li>
            <button>
              <FaRetweet />
            </button>
            10
          </li>
          <li>
            <button>
              <FaComment />
            </button>
            10
          </li>
        </ul>
      </div>
    </article>
  );
};
