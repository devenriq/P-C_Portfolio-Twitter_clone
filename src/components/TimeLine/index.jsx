import React from "react";
import styles from "./styles.module.css";

import { useApi } from "../../hooks/useApi";
import { PublishTweet } from "../PublishTweet";
import { LoadingTweets } from "../LoadingTweets";
import { Tweet } from "../Tweet";

export const TimeLine = () => {
  const { data, error, loading } = useApi(import.meta.env.VITE_API);

  return (
    <div className={styles.timeline}>
      <PublishTweet />
      {data &&
        data.map((tweet) => (
          <Tweet username={tweet.author.split(" "[0])} name={tweet.author}>
            <p>{tweet.quote}</p>
            <img src="https://picsum.photos/200" alt="img" />
          </Tweet>
        ))}
      {loading && <LoadingTweets />}
    </div>
  );
};
