import React from "react";
import styles from "./styles.module.css";

import { PublishTweet } from "../PublishTweet";
import { Tweet } from "../Tweet";

export const TimeLine = () => {
  return (
    <div className={styles.timeline}>
      <PublishTweet />
      <Tweet username="@enrigios" name="Enrique">
        <p>Hola mundo!</p>
        <img src="https://picsum.photos/200" alt="img" />
      </Tweet>
      <Tweet username="@juandc" name="Juan David">
        <p>Hola mundo2!</p>
        <img src="https://picsum.photos/300" alt="img" />
      </Tweet>
      <Tweet username="@dsofia" name="Diana Palomares">
        <p>Hola mundo3!</p>
        <img src="https://picsum.photos/400" alt="img" />
      </Tweet>
    </div>
  );
};
