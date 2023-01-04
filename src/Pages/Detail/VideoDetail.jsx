import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Relative from "../../Components/Relative/Relative";
import { videoDetail } from "../../server/server";
import { v4 as uuidv4 } from "uuid";
import styles from "./VideoDetail.module.css";
import { AiFillLike } from "react-icons/ai";

export default function VideoDetail() {
  const param = useParams();
  const { isLoading, data: detail } = useQuery(
    ["videoDetail", param],
    () => {
      return videoDetail(param.id);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      {isLoading ? (
        "로딩 중..."
      ) : (
        <div className={styles.container}>
          <div className={styles.mainSection}>
            <iframe
              className={styles.iframe}
              width="640"
              height="390"
              src={`http://www.youtube.com/embed/${param.id}?enablejsapi=1`}
              title={param.id}
            ></iframe>
            {detail.items.map((item) => (
              <div key={uuidv4()}>
                <div className={styles.title}>{item.snippet.title}</div>
                <div className={styles.info}>
                  <span className={styles.like}>
                    <AiFillLike /> : {item.statistics.likeCount}
                  </span>
                  <span>조회수 : {item.statistics.viewCount}</span>
                </div>
                <div>{item.snippet.description}</div>
              </div>
            ))}
          </div>
          <div className={styles.subSection}>
            <Relative videoId={param.id} />
          </div>
        </div>
      )}
    </>
  );
}
