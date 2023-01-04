import React from "react";
import { mostPopularVideoList } from "../../server/server";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  // mostPopular videos를 보여준다.
  const { isLoading, data: videos } = useQuery(
    ["mostPopular"],
    () => {
      return mostPopularVideoList();
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const clickHandler = (e) => {
    navigate(`/videos/${e.target.id}`);
  };
  return (
    <div className={styles.list}>
      {isLoading ? (
        "로딩중..."
      ) : (
        <>
          {videos?.items?.map((video) => (
            <div key={video.id} className={styles.video}>
              <img
                className={styles.thumbnails}
                onClick={clickHandler}
                id={video.id}
                src={video.snippet.thumbnails.high.url}
                alt=""
              />
              <div className={styles.title}>{video.snippet.title}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
