import styles from './Testimonials.module.css'
import testim1 from './assets/testim1.png'
import testim2 from './assets/testim2.png'
import testim3 from "./assets/testim3.png";
import star from './assets/star.png'
import half from './assets/halfstar.png'
import { useState } from 'react';


export default function Testimonials() {
  function handleClick(i) {
    setInvis(true);
    setTimeout(() => {
      setInvis(false);
      setIndex(i);
    }, 300)
    
  }

  const [index, setIndex] = useState(0)
  const [invis, setInvis] = useState(false)
  const testimonials = [
    {
      rating: [star, star, star, star, half],
      comment: `Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      image: testim1,
      name: "JOHN DOE",
      occupation: "PROPERTY INVESTOR",
    },
    {
      rating: [star, star, star, star, star],
      comment: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      image: testim2,
      name: "JANE LEE",
      occupation: "TENANT",
    },
    {
      rating: [star, star, star, star, half],
      comment: `Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      image: testim3,
      name: "KEVIN HA",
      occupation: "LANDLORD",
    },
  ];
    return (
      <div id={styles.container}>
        <div id={styles.left}>
          <div id={styles.sectionTitle}>CLIENT FEEDBACK</div>
          <div id={styles.title}>TESTIMONIALS</div>
          <div id={styles.content}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam.
          </div>
        </div>
        <div id={styles.right}>
          <div id={invis? styles.innerContainerhidden :styles.innerContainer}>
            <div id={styles.rating}>
              {testimonials[index].rating.map((rate) => {
                return <img className={styles.stars} src={rate} alt="star" />;
              })}
            </div>
            <div id={styles.comment}>{testimonials[index].comment}</div>
            <div id={styles.person}>
              <div id={styles.image}>
                <img
                  id={styles.testim}
                  src={testimonials[index].image}
                  alt="person"
                ></img>
              </div>
              <div id={styles.details}>
                <div id={styles.name}>{testimonials[index].name}</div>
                <div id={styles.occupation}>
                  {testimonials[index].occupation}
                </div>
              </div>
            </div>
          </div>
          <div id={styles.circleContainer}>
            <div
              onClick={() => {
                handleClick(0);
              }}
              className={index === 0 ? styles.circleActive : styles.circle}
            ></div>
            <div
              onClick={() => {
                handleClick(1);
              }}
              className={index === 1 ? styles.circleActive : styles.circle}
            ></div>
            <div
              onClick={() => {
                handleClick(2);
              }}
              className={index === 2 ? styles.circleActive : styles.circle}
            ></div>
          </div>
        </div>
      </div>
    );
}