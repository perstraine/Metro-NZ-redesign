import styles from "./Hero.module.css";
import { useState } from "react";

export default function Hero() {
	const [active, setActive] = useState(true);

	const Suburbs = [
		{ value: "Any" },
		{ value: "Ponsonby" },
		{ value: "Newmarket" },
		{ value: "Epsom" },
		{ value: "Parnell" },
		{ value: "Balmoral" },
		{ value: "Mission Bay" },
	];

	const houseType = [{ value: "Any" }, { value: "House" }, { value: "Apartment" }, { value: "Townhouse" }];

	const noBedrooms = [
		{ value: "Any" },
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5+" },
	];

	const Regions = [
		{ value: "All" },
		{ value: "Auckland" },
		{ value: "Bay of Plenty" },
		{ value: "Canterbury" },
		{ value: "Marlborough" },
		{ value: "Otago" },
		{ value: "Waikato" },
		{ value: "Wellington" },
	];

	const Services = [
		{ value: "Property Management" },
		{ value: "Building Management" },
		{ value: "Rental Property Management" },
		{ value: "Body Corporate Administration" },
		{ value: "Investment Properties" },
		{ value: "Tenanted Property Sales" },
		{ value: "Healthy Homes Standards" },
		{ value: "Decluttering Service" },
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
				{/* find a rental property section */}
				<div className={active === true ? styles.searchBoxOutterContainer : styles.searchBoxOutterContainerInactive}>
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
				{/* find a property manager section */}
				<div
					className={active === false ? styles.propManagerOutterContainer : styles.propManagerOutterContainerInactive}
				>
					<div className={styles.propManagerInnerContainer}>
						<div className={styles.proManagerSearch}>
							{/*  */}
							<div className={styles.dropdownBox}>
								<label className={styles.dropdownHeading}>Select Region</label>
								<select className={styles.arrowPropManager}>
									<option value="" selected disabled hidden>
										Select a Region
									</option>
									{Regions.map((region) => (
										<option value={region.value}>{region.value}</option>
									))}
								</select>
							</div>
							{/*  */}
							<div className={styles.dropdownBox}>
								<label className={styles.dropdownHeading}>Select Service</label>
								<select className={styles.arrowPropManager}>
									<option value="" selected disabled hidden>
										Select a Service
									</option>
									{Services.map((services) => (
										<option value={services.value}>{services.value}</option>
									))}
								</select>
							</div>
							{/*  */}
						</div>
						<div className={styles.buttonContainerPropManager}>
							<button className={styles.searchButton}>Search</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
