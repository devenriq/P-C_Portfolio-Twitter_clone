import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { PublishTweet } from "../PublishTweet";
import { Tweet } from "../Tweet";

export const TimeLine = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/10`)
      .then((res) => res.json())
      .then((quotes) => {
        console.log(quotes);
        setData(quotes);
      });
  }, []);
  return (
    <div className={styles.timeline}>
      <PublishTweet />
      {data ? (
        data.map(() => {
          <Tweet username={tweet.author.split("")} name={tweet.author}>
            <p>{Tweet.quote}</p>
            <img src="https://picsum.photos/200" alt="img" />
          </Tweet>;
        })
      ) : (
        <p>Loading tweet</p>
      )}
    </div>
  );
};
