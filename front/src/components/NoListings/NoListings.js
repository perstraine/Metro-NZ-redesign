import React from "react";
import MagGlass from "./assets/mag-glass.svg";
import styles from "./NoListings.module.css";

export default function NoListings() {
  return (
    <div className={styles.noListings}>
      <p>Sorry, we couldn't find any results</p>
      <p>Try broadening your search</p>
      <img src={MagGlass} alt="" />
    </div>
  );
}
