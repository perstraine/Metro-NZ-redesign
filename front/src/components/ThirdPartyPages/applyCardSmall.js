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
					<div className={styles.address}>102 WIND DRIVE PARNELL</div>
					<div className={styles.price}>$345 Per Week</div>
					<div className={styles.outterIconContainer}>
						<div className={styles.iconContainer}>
							<img src={Bed} alt="" />
							<div>3</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Shower} alt="" />
							<div>2</div>
						</div>
						<div className={styles.iconContainer}>
							<img src={Car} alt="" />
							<div>1</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
