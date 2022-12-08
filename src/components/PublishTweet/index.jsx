import React from "react";
import styles from "./styles.module.css";
import { FaImage } from "react-icons/fa";
import { MdEditCalendar, MdGpsFixed } from "react-icons/md";
import { RiEmotionHappyLine, RiFileGifLine } from "react-icons/ri";
import { GrList } from "react-icons/gr";

export const PublishTweet = () => {
  const handleSubmit = () => {};
  console.log("first");
  return (
    <div className={styles.publishTweet}>
      <img
        src="https://picsum.photos/100"
        alt="Profile pic"
        className={`${styles.profilePic} img-default`}
      />

      <form className={styles.form}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escribe un tweet"
        ></textarea>

        <div>
          <div className={styles.footer}>
            <ul className={styles.list}>
              <li>
                <button
                  onClick={() => {
                    console.log("Agregando imagen");
                  }}
                >
                  <FaImage />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    console.log("agregando gif");
                  }}
                >
                  <RiFileGifLine />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    console.log("Agregando lista");
                  }}
                >
                  <GrList />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    console.log("Agregando lista");
                  }}
                >
                  <RiEmotionHappyLine />
                </button>
              </li>
              <li>
                <button>
                  <MdEditCalendar />
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    console.log("Agregando ubicacion");
                  }}
                >
                  <MdGpsFixed />
                </button>
              </li>
            </ul>
          </div>
          <button onClick={handleSubmit} type="submit">
            Tweetear
          </button>
        </div>
      </form>
    </div>
  );
};
