import styles from "./Contact.module.css";
import arrow from "./assets/arrow.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

export default function Contact() {
  return (
    <div id={styles.container}>
      <div id={styles.sponsors}>
        <div className={styles.arrow}>
          <img src={arrow} alt="left arrow" />
        </div>
        <div>
          <img src={img1} alt="left arrow" />
        </div>
        <div>
          <img src={img2} alt="left arrow" />
        </div>
        <div>
          <img src={img3} alt="left arrow" />
        </div>
        <div>
          <img src={img4} alt="left arrow" />
        </div>
        <div className={styles.arrow} id={styles.arrowRight}>
          <img src={arrow} alt="left arrow" />
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
