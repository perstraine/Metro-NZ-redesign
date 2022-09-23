import styles from "./dropdownBox.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DropdownBox() {
	const [details, setDetails] = useState([]);
	const [result, setResult] = useState(false);
	useEffect(() => {
		result
			? console.log("test")
			: axios.post("http://localhost:4000/get-listing").then((res) => {
					console.log("details", res.data);
					if (res.data === "failed") {
						setResult(false);
					} else {
						setDetails(res.data);
						setResult(true);
					}
			  });
	}, [result]);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.innerContainer}>
				<div className={styles.dropdowBoxText}>
					Not the property you were looking for? <br /> Select from the box below
				</div>
				<div className={styles.dropdownContainer}>
					<select className={styles.selectDropdown}>
						<option value="" selected disabled hidden>
							Select METRO NZ property
						</option>
						{details.length > 0 &&
							details.map((house) => {
								return (
									<option
										value={`${house.address.number} ${house.address.street}, ${house.address.suburb}, ${house.address.city}`}
									>{`${house.address.number} ${house.address.street}, ${house.address.suburb}, ${house.address.city}`}</option>
								);
							})}
					</select>
				</div>
			</div>
		</div>
	);
}
