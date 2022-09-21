import styles from "./callUsNow.module.css";
import callUsPhoto from "./assets/group_photo_02.png";
import phoneIcon from "./assets/phone.png";

export default function CallUsNow() {
	return (
		<div className={styles.callMainContainer}>
			<div className={styles.blackContainer}>
				<div className={styles.innerBlackContainer}>
					<div>
						<img className={styles.callUsPhoto} src={callUsPhoto} alt="" />
					</div>
					<div className={styles.callInnerContainer}>
						<div className={styles.contactUsContainer}>
							<div className={styles.contactUsBox}>
								<div>
									<img src={phoneIcon} alt="" />
								</div>
								<div>
									<h4>CALL US NOW</h4>
								</div>
								<div>
									<p>(09) 391 4642</p>
								</div>
							</div>
							<div className={styles.contactUsText}>"GET IN TOUCH SO WE CAN PARTNER WITH YOU IN YOUR SEARCH"</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
