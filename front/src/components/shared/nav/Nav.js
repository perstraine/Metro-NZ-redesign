import React from "react";
import styles from "./Nav.module.css";
import Logo from "./assets/metro-logo.png";

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navColOne}>
          <span>CALL US - (09) 391 4642</span>
          <span>GET A FREE APPRAISAL</span>
          <span>CHANGE TO METRO NZ</span>
        </div>
        <div className={styles.navColTwo}>
          <img src={Logo} alt="" />
          <p>Management Services</p>
          <p>Find a Rental</p>
          <p>News</p>
          <p>About Us</p>
          <p>Contact</p>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}
