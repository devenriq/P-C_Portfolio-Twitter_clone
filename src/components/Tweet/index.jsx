import React from "react";
import styles from "./styles.module.css";

export const Tweet = () => {
  return (
    <article className={styles.tweet}>
      <div class={styles.header}>
        <img src="https://picsum.photos/100" alt="Profile pic" />
        <div class={styles.container}>
          <span>Enrique Palomino</span>
          <span>@enrigios</span>
          <span className="">20h</span>
          <button>...</button>
        </div>
      </div>
    </article>
  );
};
