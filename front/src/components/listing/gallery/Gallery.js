import styles from "./Gallery.module.css";
import back from "./assets/back.png";
import { useState } from "react";

export default function Gallery({ images }) {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.back}>
            <div>
              <img src={back} alt="arrow" />
            </div>
            <div id={styles.backButton}>Back</div>
          </div>
          <div id={styles.gallery}>
            {images.map((image, idx) => {
              return (
                // <div className={styles.galleryImage} key={idx} style={{backgroundImage: `url(${image})`}}></div>
                <div
                  key={idx}
                  onClick={() => setIndex(idx)}
                  id={styles.galleryImageHolder}
                >
                  <img
                    className={
                      index === idx
                        ? styles.galleryImageactive
                        : styles.galleryImage
                    }
                    src={image}
                    alt="gallery"
                  ></img>
                </div>
              );
            })}
          </div>
          <div id={styles.showcase}>
            <div>
              <img
                onClick={() => setIsModalOpen(true)}
                id={styles.showcaseImage}
                src={images[index]}
                alt="showcase"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div id={styles.modalContainer} onClick={() => setIsModalOpen(false)}>
          <img id={styles.modalImage} src={images[index]} alt="showcase"></img>
        </div>
      )}
    </>
  );
}
