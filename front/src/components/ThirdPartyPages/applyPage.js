import styles from "./applyPage.module.css";
import ApplyCardSmall from "./applyCardSmall";
import ApplyForm from "./applyForm";

export default function ApplyCard() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.outterContainer}>
				<ApplyCardSmall />
				<ApplyForm />
			</div>
		</div>
	);
}
