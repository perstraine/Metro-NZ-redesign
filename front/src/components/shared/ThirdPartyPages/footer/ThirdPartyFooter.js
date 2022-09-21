import styles from "./ThirdPartyFooter.module.css";

export default function ThirdPartyFooter() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerText}>
				Tenancy Application provided by www.tenant.co.nz Copyright © 2022 <br /> To view our privacy policy and see how
				we protect your data, click here
			</div>
		</div>
	);
}
