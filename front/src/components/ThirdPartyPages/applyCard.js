import styles from "./applyPage.module.css";
import ApplyCardSmall from "./applyCardSmall";
import ApplyForm from "./applyForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ApplyCard() {
	const [images, setImages] = useState("");
	const [details, setDetails] = useState({});

	const [result, setResult] = useState(false);
	let { HouseId } = useParams();

	useEffect(() => {
		result
			? console.log("test")
			: axios.post("http://localhost:4000/third-party", { houseId: `${HouseId}` }).then((res) => {
					console.log("result", res.data[0]);
					if (res.data === "failed") {
						setResult(false);
					} else {
						setImages(res.data[0].images);
						const details = { address: res.data[0].address };
						details.bedrooms = res.data[0].bedrooms;
						details.bathrooms = res.data[0].bathrooms;
						details.parking = res.data[0].parking;
						details.price = res.data[0].price;
						setDetails(details);

						setResult(true);
					}
			  });
	}, [HouseId, result]);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.outterContainer}>
				{result && <ApplyCardSmall images={images} details={details} />}
				<ApplyForm />
			</div>
		</div>
	);
}
