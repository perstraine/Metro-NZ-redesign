import styles from "./dropdownBox.module.css";

export default function DropdownBox() {
	const Addresses = [
		{ value: "Address 01" },
		{ value: "Address 02" },
		{ value: "Address 03" },
		{ value: "Address 04" },
	];
	return (
		<div className={styles.mainContainer}>
			<div className={styles.innerContainer}>
				<div className={styles.dropdowBoxText}>
					Not the property you were looking for? <br /> Select from the box below
				</div>
				<div className={styles.dropdownContainer}>
					<select>
						<option value="" selected disabled hidden>
							Select METRO NZ property
						</option>
						{Addresses.map((address) => (
							<option value={address.value}>{address.value}</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}
