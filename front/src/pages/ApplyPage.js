import ThirdPartyFooter from "../components/shared/ThirdPartyPages/footer/ThirdPartyFooter";
import ThirdPartyNav from "../components/shared/ThirdPartyPages/nav/ThirdPartyNav";
import ApplyCard from "../components/ThirdPartyPages/applyCard";
import styles from "./ThirdPartyPage.module.css";

export default function ApplyPage() {
	return (
		<div className={styles.mainContainer}>
			<ThirdPartyNav />
			<ApplyCard />
			<ThirdPartyFooter />
		</div>
	);
}
