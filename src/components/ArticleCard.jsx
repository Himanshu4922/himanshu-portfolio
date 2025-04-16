import React from "react";
import styles from "./ArticleCard.module.css";

function ArticleCard({ articleInfo }) {
  return (
    <>
      <a
        href={articleInfo.url}
        target="_blank"
        className={styles["article-card"]}
      >
        <h3>{articleInfo.title}</h3>
        <p>
          {articleInfo.datePublished}
          <span>&nbsp;&middot;&nbsp;</span>
          <span>{articleInfo.time}</span>
        </p>
      </a>
    </>
  );
}

export default ArticleCard;
