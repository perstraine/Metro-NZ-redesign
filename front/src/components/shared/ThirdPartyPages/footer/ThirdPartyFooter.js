import styles from "./ThirdPartyFooter.module.css";

export default function ThirdPartyFooter() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerText}>
				Tenancy Application provided by
				<span className={styles.linkText}>
					<a href="www.tenant.co.nz" target="_blank">
						{" "}
						www.tenant.co.nz{" "}
					</a>
				</span>
				Copyright © 2022 <br /> To view our privacy policy and see how we protect your data,{" "}
				<span className={styles.clickHere}>click here</span>
			</div>
		</div>
	);
}
