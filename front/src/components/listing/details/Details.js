import styles from "./Details.module.css";
import bed from './assets/bed.png'
import bath from './assets/bath.png'
import parking from "./assets/parking.png";


export default function Details({ details }) {
    return (
      <div id={styles.container}>
        <div id={styles.address}>
          <div>{`${
            details.address.number
          } ${details.address.street.toUpperCase()}, ${details.address.suburb.toUpperCase()}, ${details.address.city.toUpperCase()}`}</div>
        </div>
        <div id={styles.other}>
          <div id={styles.bbp}>
            <div className={styles.bbp}>
              <img className={styles.bbpimage} src={bed} alt="bed" />
              <div>{`${details.bed} Beds`}</div>
            </div>
            <div className={styles.bbp}>
              <img className={styles.bbpimage} src={bath} alt="bath" />
              <div>{`${details.bath} Baths`}</div>
            </div>
            <div className={styles.bbp}>
              <img className={styles.bbpimage} src={parking} alt="parking" />
              <div>{`${details.parking} Parking`}</div>
            </div>
          </div>
                <div id={styles.price}>
                    <div>{`$${details.price['$numberDecimal']} Per Week` }</div>
          </div>
        </div>
      </div>
    );
}