import styles from "./Contact.module.css";
import arrow from "./assets/arrow.png";
import right from "./assets/right.png"
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import { useState } from "react";

export default function Contact() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0)

  function handleClick(increase) {
    (index + increase) < 0? setIndex(5): setIndex(index + increase)
  }

  return (
    <div id={styles.container}>
      <div id={styles.sponsors}>
        <div className={styles.arrow} onClick={() => handleClick(1)}>
          <img src={arrow} alt="left arrow" />
        </div>
        <div>
          <img src={images[index % 6]} alt="sponsor" />
        </div>
        <div>
          <img src={images[(index + 1) % 6]} alt="sponsor" />
        </div>
        <div>
          <img src={images[(index + 2) % 6]} alt="sponsor" />
        </div>
        <div>
          <img src={images[(index + 3) % 6]} alt="sponsor" />
        </div>
        <div onClick={() => handleClick(-1)} className={styles.arrow}>
          <img src={right} alt="right arrow" />
        </div>
      </div>
      <div id={styles.join}>
        <div id={styles.content}>
          <span id={styles.text}>JOIN WITH METRO PROPERTY MANAGEMENT NOW</span>
          <span id={styles.button}>CONTACT US</span>
        </div>
      </div>
    </div>
  );
}
