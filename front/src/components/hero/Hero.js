import styles from "./Hero.module.css";
import { useState } from "react";

export default function Hero() {
	const [active, setActive] = useState(true);

	const Suburbs = [
		{ value: "Any" },
		{ value: "Newlands" },
		{ value: "Te Aro" },
		{ value: "Johnsonville" },
		{ value: "Karori" },
	];

	const houseType = [{ value: "Any" }, { value: "House" }, { value: "Apartment" }, { value: "Townhouse" }];

	const noBedrooms = [
		{ value: "Any" },
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
	];

	return (
		<>
			<section>
				<div className={styles.heroBackground}>
					<div className={styles.heroContainer}>
						<div className={styles.heroInner}>
							<h1>Metro NZ</h1>
							<p>We manage properties so you can focus on what you love</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.mainContainer}>
				<div className={styles.searchContainer}>
					<div className={styles.searchHeader}>
						<div className={active === true ? styles.searchContainerLeft : styles.searchContainerLeftInactive}>
							<h1
								onClick={() => {
									setActive(false);
								}}
							>
								Find a property manager
							</h1>
							<div className={active === false ? styles.bottomBorderLeft : styles.bottomBorderLeftInactive}></div>
						</div>

						<div className={active === false ? styles.searchContainerRight : styles.searchContainerRightInactive}>
							<h1
								onClick={() => {
									setActive(true);
								}}
							>
								Find a rental property
							</h1>
							<div className={active === true ? styles.bottomBorderRight : styles.bottomBorderRightInactive}></div>
						</div>
					</div>
				</div>

				<div className={styles.searchBoxOutterContainer}>
					<div className={styles.searchBoxInnerContainer}>
						<div className={styles.dropdownBoxContainer}>
							<div className={styles.dropdownBox}>
								<label className={styles.dropdownHeading}>Select Suburb</label>
								<select className={styles.arrow}>
									<option value="" selected disabled hidden>
										Select suburb
									</option>
									{Suburbs.map((suburb) => (
										<option value={suburb.value}>{suburb.value}</option>
									))}
								</select>
							</div>

							<div className={styles.dropdownBox}>
								<label className={styles.dropdownHeading}>Select House Type</label>
								<select className={styles.arrow}>
									<option value="" selected disabled hidden>
										<p>Select home</p>
									</option>
									{houseType.map((houses) => (
										<option value={houses.value}>{houses.value}</option>
									))}
								</select>
							</div>

							<div className={styles.dropdownBox}>
								<label className={styles.dropdownHeading}>Number of bedrooms</label>
								<select className={styles.arrow}>
									<option value="" selected disabled hidden>
										Select bedrooms
									</option>
									{noBedrooms.map((bedrooms) => (
										<option value={bedrooms.value}>{bedrooms.value}</option>
									))}
								</select>
							</div>
						</div>
						<div className={styles.buttonContainer}>
							<button className={styles.searchButton}>Search</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
