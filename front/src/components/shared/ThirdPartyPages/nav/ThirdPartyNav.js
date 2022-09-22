import styles from "./ThirdPartyNav.module.css";
<<<<<<< HEAD
import metroLogo from "../assets/metronz_logo.png";
import backArrow from "../assets/back_arrow.png";
=======
import metroLogo from "./assets/metronz_logo.png";
>>>>>>> origin/listing

export default function ThirdPartyNav() {
	return (
		<div>
			<div className={styles.imgContainer}>
<<<<<<< HEAD
				<div>
					<img src={metroLogo} alt="" />
				</div>
			</div>
			<div className={styles.backArrow}>
				<img src={backArrow} alt="" />
				<div>Back</div>
=======
				<img src={metroLogo} alt="" />
>>>>>>> origin/listing
			</div>
		</div>
	);
}
