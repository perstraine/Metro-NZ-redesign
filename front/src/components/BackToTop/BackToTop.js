import React from "react";
import styles from "./BackToTop.module.css";
import ArrowUp from "./assets/arrow-up.svg";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <span className={styles.scrollTop}>
      <p onClick={scrollToTop}>
        Back to top <img src={ArrowUp} alt="" />{" "}
      </p>
    </span>
  );
}
