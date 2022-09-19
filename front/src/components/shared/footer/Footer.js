import React from "react";
import styles from "./Footer.module.css";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import Twitter from "./assets/twitter.svg";
import Phone from "./assets/phone.svg";
import Mail from "./assets/mail.svg";
import Location from "./assets/location.svg";
import Arrow from "./assets/arrow.svg";

export default function Footer() {
  const footerItems = [
    {
      title: "Homepage",
      url: "/",
    },
    {
      title: "Management Services",
      url: "/",
    },
    {
      title: "Find a Rental",
      url: "/",
    },
    {
      title: "News",
      url: "/",
    },
    {
      title: "About Us",
      url: "/",
    },
    {
      title: "Contact",
      url: "/",
    },
  ];
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.main}>
          <div className={styles.footerCol}>
            <h4>INFORMATION</h4>
            <section>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <span>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
              </span>
            </section>
          </div>
          <div className={styles.footerCol}>
            <h4>NAVIGATION</h4>
            <section>
              {footerItems.map((item) => {
                return (
                  <span>
                    <img src={Arrow} alt="" />
                    <a href={item.url}>{item.title}</a>
                  </span>
                );
              })}
            </section>
          </div>
          <div className={styles.footerCol}>
            <h4>CONTACT US</h4>
            <section>
              <span>
                <img src={Phone} alt="" />
                <p>( 09 ) 391 4642</p>
              </span>
              <span>
                <img src={Mail} alt="" />
                <p>info@metronz.co.nz</p>
              </span>
              <span>
                <img src={Location} alt="" />
                <p>
                  Level 17, PWC Building Commercial Bay Tower, 11-19 Customs
                  Street West, Auckland CBD 1010, New Zealand
                </p>
              </span>
              <span>
                <img src={Location} alt="" />
                <p>
                  P.O. Box 106500, Customs Street, AUCKLAND 1010, NEW ZEALAND
                </p>
              </span>
            </section>
          </div>
        </div>
        <div className={styles.bottom}>
          <section>
            <p>
              ALL RIGHTS RESERVED - &copy; 2022 METRO NZ PROPERTY MANAGEMENT
            </p>
            <p>DISCLAIMER</p>
            <p>PRIVACY POLICY</p>
            <p>TERM OF USE</p>
          </section>
        </div>
      </div>
    </>
  );
}
