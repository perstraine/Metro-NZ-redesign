import styles from './Community.module.css'
export default function Community() {
    return (
      <div id={styles.container}>
        <div id={styles.left}>
          <div id={styles.leftContainer}>
            <div id={styles.sectionTitle}>COMMUNITY SERVICE</div>
            <div id={styles.title}>WE KEEP OUR COMMUNITY IN MIND</div>
            <div id={styles.content}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </div>
            <div id={styles.button}>ABOUT US</div>
          </div>
        </div>
        <div id={styles.right}>
          <div className={styles.image} id={styles.image1}></div>
          <div className={styles.image} id={styles.image2}></div>
          <div className={styles.image} id={styles.image3}></div>
        </div>
      </div>
    );
}