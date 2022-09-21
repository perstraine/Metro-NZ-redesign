import styles from "./ThirdPartyNav.module.css";
import metroLogo from "./assets/metronz_logo.png";

export default function ThirdPartyNav() {
	return (
		<div>
			<div className={styles.imgContainer}>
				<img src={metroLogo} alt="" />
			</div>
		</div>
	);
}
