import styles from "./confirmCard.module.css";
import ApartmentImg from "./assets/apartment_card_placeholder.png";
import Bed from "./assets/bed.png";
import Shower from "./assets/shower.png";
import Car from "./assets/car.png";

export default function ConfirmCard() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.innerContainer}>
				<div>
					<img src={ApartmentImg} alt="" />
				</div>
				<div className={styles.descContainer}>
					<div className={styles.addressContainer}>
						<div className={styles.addressPrice}>
							<div>25 ENFIELD STREET MOUNT EDEN</div>
							<div>$780 Per Week</div>
						</div>
					</div>

					<div className={styles.iconsMainContainer}>
						<div className={styles.iconsInnerContainer}>
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
					<div className={styles.buttonContainer}>
						<div className={styles.buttonInnerContainer}>
							<button>APPLY</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
