import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ShowListings.module.css";
import ListingComponents from "../ListingComponents/ListingComponents";
import MapIcon from "./assets/map-icon.svg";

export default function Results({ listingsToShow, setSortMethod, sortMethod }) {
  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
  };

  return (
    <>
      <div className={styles.showListings}>
        <span className={styles.headings}>
          <h1>BROWSE OUR LISTINGS</h1>
          <h3>or narrow your search using the filters above</h3>
        </span>
        <section>
          <span className={styles.noOfListings}>Showing 1 - 6 of 55</span>
          <select name="" id="" onChange={handleSortChange}>
            <option value="latestListing">Sort by: Latest listing</option>
            <option value="lowestPrice">Sort by: Lowest price</option>
            <option value="highestPrice">Sort by: Highest price</option>
          </select>
          <span className={styles.mapView}>
            <p>Map View</p>
            <img src={MapIcon} alt="" />
          </span>
        </section>
        <div className={styles.listingsSection}>
          {listingsToShow !== null &&
            listingsToShow.map((listing) => {
              return (
                <div className={styles.listingCard}>
                  <ListingComponents listing={listing} style={styles} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
