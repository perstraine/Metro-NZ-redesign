import React from "react";
import styles from "./CantFindBanner.module.css";
import MetroLogo from "./assets/metro-logo.png";
import Phone from "./assets/phone.svg";
import Mail from "./assets/mail.svg";

export default function CantFindBanner() {
  return (
    <div className={styles.cantFindBanner}>
      <div className={styles.bannerContainer}>
        <h5>Can't find what you're looking for?</h5>
        <p>Get in touch so we can partner with you in your search.</p>
        <div className={styles.contact}>
          <span>
            <img src={Phone} alt="" />
            <p>09 391 4642</p>
          </span>
          <span>
            <img src={Mail} alt="" />
            <p>infro@metronz.co.nz</p>
          </span>
        </div>
        <img src={MetroLogo} alt="" className={styles.logo} />
      </div>
    </div>
  );
}
