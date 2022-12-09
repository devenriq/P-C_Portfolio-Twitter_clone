import React from "react";
import styles from "./styles.module.css";
import { FaImage } from "react-icons/fa";
import { MdEditCalendar, MdGpsFixed } from "react-icons/md";
import { RiEmotionHappyLine, RiFileGifLine } from "react-icons/ri";
import { GrList } from "react-icons/gr";

export const PublishTweet = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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

        <div className={styles.footer}>
          <div>
            <ul className={styles.list}>
              <li>
                <button>
                  <FaImage />
                </button>
              </li>
              <li>
                <button>
                  <RiFileGifLine />
                </button>
              </li>
              <li>
                <button>
                  <GrList />
                </button>
              </li>
              <li>
                <button>
                  <RiEmotionHappyLine />
                </button>
              </li>
              <li>
                <button>
                  <MdEditCalendar />
                </button>
              </li>

              <li>
                <button>
                  <MdGpsFixed />
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className={styles.submit}
          >
            Tweetear
          </button>
        </div>
      </form>
    </div>
  );
};
