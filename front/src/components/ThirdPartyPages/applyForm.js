import styles from "./applyForm.module.css";

export default function ApplyForm() {
	const TenancyType = [
		{ value: "Periodic Tenancy" },
		{ value: "Fixed-Term Tenancy" },
		{ value: "Boarding Houses" },
		{ value: "Service Tenancy" },
	];

	const Years = [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5+" }];

	const Months = [
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
		{ value: "7" },
		{ value: "8" },
		{ value: "9" },
		{ value: "10" },
		{ value: "11" },
		{ value: "12" },
	];
	return (
		<div>
			<form className={styles.formContainer}>
				<header className={styles.header}>Apply Here</header>
				<br />
				<div className={styles.innerFormContainer}>
					<label>
						When can you take the property?<span>*</span>
						<br />
						<input className={styles.date} type="date" required />
					</label>{" "}
					<br />
					<label>
						Preferred tenancy type <span>*</span> <br />
						<select className={styles.optionText} required>
							<option value="" selected disabled hidden>
								--select--
							</option>
							{TenancyType.map((tenancy) => (
								<option value={tenancy.value}>{tenancy.value}</option>
							))}
						</select>
					</label>
					<br />
					<label>
						How long do you want the property for?<span>*</span>
						<br />
						<select className={styles.optionText} required>
							<option value="" selected disabled hidden>
								Years
							</option>
							{Years.map((years) => (
								<option value={years.value}>{years.value}</option>
							))}
						</select>
						<br />
						<select className={styles.optionText} required>
							<option value="" selected disabled hidden>
								Months
							</option>
							{Months.map((months) => (
								<option value={months.value}>{months.value}</option>
							))}
						</select>
					</label>
					<div className={styles.submitForm}>
						<div>
							<label>
								Have you viewed the property?<span>*</span>
								<br />
								<button className={styles.yesButton}>YES</button>
								<button className={styles.noButton}>NO</button>
							</label>
						</div>
						<div className={styles.nextButton}>
							<button>NEXT</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
