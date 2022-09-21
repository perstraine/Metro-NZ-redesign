import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ShowListings.module.css";
import Search from "../../pages/Search";
import ListingComponents from "../ListingComponents/ListingComponents";

export default function Results() {
  const [listingsToShow, setListingsToShow] = useState(null);

  const showListings = async () => {
    const response = await axios.get("http://localhost:4000/search/");
    setListingsToShow(response.data);
  };

  useEffect(() => {
    showListings();
  }, []);

  // useEffect(() => {
  //   console.log(listingsToShow);
  // }, [listingsToShow]);

  return (
    <>
      <div className={styles.showListings}>
        <div className={styles.listingsSection}>
          {listingsToShow !== null &&
            listingsToShow.map((listing) => {
              // console.log(listing);
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
