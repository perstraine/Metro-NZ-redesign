import styles from "./ThirdPartyNav.module.css";
import metroLogo from "../assets/metronz_logo.png";
import backArrow from "../assets/back_arrow.png";

export default function ThirdPartyNav() {
	return (
		<div>
			<div className={styles.imgContainer}>
				<div>
					<img src={metroLogo} alt="" />
				</div>
			</div>
			<div className={styles.backArrow}>
				<img src={backArrow} alt="" />
				<div>Back</div>
			</div>
		</div>
	);
}
