import styles from "./applyCardSmall.module.css";
import Bed from "./assets/bed.png";
import Shower from "./assets/shower.png";
import Car from "./assets/car.png";

export default function ApplyCardSmall({ images, details }) {
	return (
		<div className={styles.outterCardContainer}>
			<div>
				<img className={styles.mainImg} src={images[0]} alt="" />
			</div>
			<div className={styles.innerCardContainer}>
				<div className={styles.contentContainer}>
					<div className={styles.address}>{`${
						details.address.number
					} ${details.address.street.toUpperCase()} ${details.address.suburb.toUpperCase()}`}</div>
					<div className={styles.price}>{`$${details.price["$numberDecimal"]} Per Week`}</div>
					<div className={styles.outterIconContainer}>
						<div className={styles.iconContainer}>
							<img src={Bed} alt="" />
							<div>{`${details.bedrooms}`}</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Shower} alt="" />
							<div>{`${details.bathrooms}`}</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Car} alt="" />
							<div>{`${details.parking}`}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
