import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "./HobbySection.module.css";

function HobbySection() {
  const articles = [
    {
      title: "Creating a React element without any bundler",
      datePublished: "April 11 2025",
      time: "5 min read",
      url: "https://www.linkedin.com/posts/himanshu-bisht-900a3b247_root-root-frontend-activity-7316574778268520448-0ZD_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zKlABSpXbteAvqVQUuIuLdk2CLtiiXks",
    },
    {
      title: "What is Babel ?",
      datePublished: "April 11 2025",
      time: "5 min read",
      url: "https://www.linkedin.com/posts/himanshu-bisht-900a3b247_babel-babelcdn-javascript-activity-7317548216843939842-N7K5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zKlABSpXbteAvqVQUuIuLdk2CLtiiXks",
    },
    {
      title: "Why React?",
      datePublished: "April 11 2025",
      time: "5 min read",
      url: "https://www.linkedin.com/posts/himanshu-bisht-900a3b247_javascript-reactjs-frontenddevelopment-activity-7316172838636331009-zZOU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zKlABSpXbteAvqVQUuIuLdk2CLtiiXks",
    },
    {
      title: "Using React and ReactDom cdn",
      datePublished: "April 11 2025",
      time: "5 min read",
      url: "https://www.linkedin.com/posts/himanshu-bisht-900a3b247_javascript-reactwithoutcra-reactjs-activity-7316561500712669184-5_i7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0zKlABSpXbteAvqVQUuIuLdk2CLtiiXks",
    },
  ];
  return (
    <>
      <section className={styles["hobbies-section"]}>
        <div className={styles["heading-hobbies-section"]}>
          <p>📰 Latest Linkedin Posts</p>
          <a
            href="https://www.linkedin.com/in/himanshu-bisht-900a3b247/recent-activity/all/"
            target="_blank"
          >
            View all posts &rarr;
          </a>
        </div>
        <div className={styles["article-card-container"]}>
          {articles.map(function (article, index) {
            return <ArticleCard key={index} articleInfo={article} />;
          })}
        </div>
      </section>
    </>
  );
}

export default HobbySection;
