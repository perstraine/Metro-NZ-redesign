import styles from "./applyCardSmall.module.css";
import Apartment from "./assets/apartment_photo_small.png";
import Bed from "./assets/bed.png";
import Shower from "./assets/shower.png";
import Car from "./assets/car.png";

export default function ApplyCardSmall() {
	return (
		<div className={styles.outterCardContainer}>
			<div>
				<img src={Apartment} alt="" />
			</div>
			<div className={styles.innerCardContainer}>
				<div className={styles.contentContainer}>
					<div className={styles.address}>25 ENFIELD STREET MOUNT EDEN</div>
					<div className={styles.price}>$780 Per Week</div>
					<div className={styles.outterIconContainer}>
						<div className={styles.iconContainer}>
							<img src={Bed} alt="" />
							<div>2</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Shower} alt="" />
							<div>2</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Car} alt="" />
							<div>2</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
