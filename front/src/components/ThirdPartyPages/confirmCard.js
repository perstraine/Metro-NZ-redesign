import styles from "./confirmCard.module.css";
import Bed from "./assets/bed.png";
import Shower from "./assets/shower.png";
import Car from "./assets/car.png";

export default function ConfirmCard({ images, details }) {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.innerContainer}>
				<div className={styles.imgContainer}>
					<img className={styles.confirmImg} src={images[0]} alt="" />
				</div>
				<div className={styles.descContainer}>
					<div className={styles.addressContainer}>
						<div className={styles.addressPrice}>
							<div>{`${
								details.address.number
							} ${details.address.street.toUpperCase()} ${details.address.suburb.toUpperCase()}`}</div>
							<div>{`$${details.price["$numberDecimal"]} Per Week`}</div>
						</div>
					</div>

					<div className={styles.iconsMainContainer}>
						<div className={styles.iconsInnerContainer}>
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
					<div className={styles.buttonContainer}>
						<div className={styles.buttonInnerContainer}>
							<a href="/apply/04">
								<button>APPLY</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
