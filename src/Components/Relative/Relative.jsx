import { useQuery } from "@tanstack/react-query";
import React from "react";
import { relatedResult } from "../../server/server";
import { v4 as uuidv4 } from "uuid";
import styles from "./Relative.module.css";
import { useNavigate } from "react-router-dom";

export default function Relative({ videoId }) {
  const navigate = useNavigate();

  //relativeVideoList를 보여준다.
  const { isLoading, data: relative } = useQuery(
    ["relativeVideo", videoId],
    () => {
      return relatedResult(videoId);
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
        "로딩 중..."
      ) : (
        <>
          {relative.items.map((item) => (
            <div key={uuidv4()} className={styles.video}>
              <img
                className={styles.thumbnails}
                onClick={clickHandler}
                id={item.id.videoId}
                src={item.snippet.thumbnails.high.url}
                alt=""
              />
              <div>
                <div className={styles.title}>{item.snippet.title}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
