import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchResult } from "../../server/server";
import styles from "./Video.module.css";

export default function Videos() {
  const navigate = useNavigate();
  //검색된 비디오 결과를 보여준다.
  const { state } = useLocation();
  const { isLoading, data: videos } = useQuery(
    ["searchResult", state],
    () => {
      return searchResult(state);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const clickHandler = (e) => {
    navigate(`${e.target.id}`);
  };
  return (
    <div className={styles.list}>
      {isLoading ? (
        "로딩중..."
      ) : (
        <>
          {videos.items.map((video) => (
            <div key={video.etag} className={styles.video}>
              <img
                className={styles.thumbnails}
                onClick={clickHandler}
                id={video.id.videoId}
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
