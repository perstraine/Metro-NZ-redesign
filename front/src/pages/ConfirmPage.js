import ThirdPartyFooter from "../components/shared/ThirdPartyPages/footer/ThirdPartyFooter";
import ThirdPartyNav from "../components/shared/ThirdPartyPages/nav/ThirdPartyNav";
import ConfirmCard from "../components/ThirdPartyPages/confirmCard";
import DropdownBox from "../components/ThirdPartyPages/dropdownBox";
import styles from "./ThirdPartyPage.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ConfirmPage() {
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
			<ThirdPartyNav />
			{result && (
				<>
					<ConfirmCard images={images} details={details} />
					<DropdownBox details={details} />
				</>
			)}
			<ThirdPartyFooter />
		</div>
	);
}
