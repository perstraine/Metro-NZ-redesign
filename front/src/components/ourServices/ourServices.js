import styles from "./ourServices.module.css";
import msgIcon from "./assets/msg_icon.png";
import penRulerIcon from "./assets/pen_ruler_icon.png";
import homeIcon from "./assets/home_icon.png";

export default function Services() {
	return (
		<div className={styles.servicesMainContainer}>
			<div className={styles.servicesInnerContainer}>
				<div className={styles.headingContainer}>
					<h6>OUR SERVICES</h6>
					<h1>WORKING WITH LANDLORDS, TENANTS, BUILDING OWNERS AND PROPERTY INVESTORS</h1>
				</div>
				<div className={styles.cardsContainer}>
					{/* card 1 */}
					<div className={styles.cards}>
						<div>
							<img className={styles.iconCards} src={msgIcon} alt="" />
						</div>
						<div className={styles.innerCards}>
							<h4>PROPERTY MANAGEMENT</h4>
						</div>
						<div className={styles.innerCards}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
								pulvinar dapibus leo.
							</p>
						</div>
					</div>
					{/* card 2 */}
					<div className={styles.middleCard}>
						<div>
							<img className={styles.iconCards} src={penRulerIcon} alt="" />
						</div>
						<div className={styles.innerCards}>
							<h4 className={styles.middleCardText}>CHANGE TO NZ METRO</h4>
						</div>
						<div className={styles.innerCards}>
							<p className={styles.middleCardText}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
								pulvinar dapibus leo.
							</p>
						</div>
					</div>
					{/* card 3 */}
					<div className={styles.cards}>
						<div>
							<img className={styles.iconCards} src={homeIcon} alt="" />
						</div>
						<div className={styles.innerCards}>
							<h4>FIND A RENTAL</h4>
						</div>
						<div className={styles.innerCards}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
								pulvinar dapibus leo.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
