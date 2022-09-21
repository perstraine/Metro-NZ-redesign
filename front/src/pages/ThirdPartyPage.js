import ThirdPartyFooter from "../components/shared/ThirdPartyPages/footer/ThirdPartyFooter";
import ThirdPartyNav from "../components/shared/ThirdPartyPages/nav/ThirdPartyNav";
import ConfirmCard from "../components/ThirdPartyPages/confirmCard";
import DropdownBox from "../components/ThirdPartyPages/dropdownBox";
import styles from "./ThirdPartyPage.module.css";

export default function ThirdPartyPage() {
	return (
		<div className={styles.mainContainer}>
			<ThirdPartyNav />
			<ConfirmCard />
			<DropdownBox />
			<ThirdPartyFooter />
		</div>
	);
}
