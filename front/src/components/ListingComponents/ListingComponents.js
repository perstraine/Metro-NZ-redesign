import React from "react";
import styles from "./ListingComponents.module.css";
import BedIcon from "./assets/bed-icon.svg";
import BathroomIcon from "./assets/bathroom-icon.svg";
import CarIcon from "./assets/car-icon.svg";
import RightArrow from "./assets/right-arrow.png";
import MetroLogo from "./assets/metro-logo.png";
import { Link } from "react-router-dom";

export default function ListingComponents({ listing }) {
  return (
    <div className={styles.listingComponents}>
      <div className={styles.propertyListingCard}>
        <img src={MetroLogo} alt="" className={styles.metroLogo} />
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${listing.images[0]})` }}
        ></div>
        <div className={styles.infoCard}>
          <h1 className={styles.listingTitle}>
            {listing.address.number +
              " " +
              listing.address.street +
              " " +
              listing.address.suburb}
          </h1>
          <div className={styles.price}>
            <p>${listing.price.$numberDecimal} per week</p>
          </div>
          <div className={styles.icons}>
            <span>
              <img src={BedIcon} alt="" />
              <p>{listing.bedrooms}</p>
            </span>
            <span>
              <img src={BathroomIcon} alt="" />
              <p>{listing.bathrooms}</p>
            </span>
            <span>
              <img src={CarIcon} alt="" />
              <p>{listing.parking}</p>
            </span>
          </div>
          <span className={styles.buttonAndInfo}>
            <button>APPLY</button>
            <section>
              <p>
                <Link to={`/listing/${listing.houseId}`}>More Info</Link>
              </p>
              <img src={RightArrow} alt="" />
            </section>
          </span>
        </div>
      </div>
    </div>
  );
}
