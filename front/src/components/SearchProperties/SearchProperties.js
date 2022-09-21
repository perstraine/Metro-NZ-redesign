import React from "react";
import axios from "axios";
import styles from "./SearchProperties.module.css";
import {
  suburbs,
  propertyType,
  minRent,
  maxRent,
  bedrooms,
  bathrooms,
} from "./SearchOptions";
import { useState, useEffect } from "react";

export default function SearchProperties() {
  let newObj = {};

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());

    newObj = {
      ...(formObject.suburb !== "All" && {
        "address.suburb": formObject.suburb.toLowerCase(),
      }),
      ...(formObject.propertyType !== "All" && {
        "property type": formObject.propertyType.toLowerCase(),
      }),
      ...(formObject.pets === "true" && {
        pets: true,
      }),
      bedrooms: `{$gte: ${parseInt(formObject.bedrooms)}}`,
      //   ...(formObject.bedrooms !== "Any" && {
      // bedrooms: parseInt(formObject.bedrooms),
      // }),
      // ...(formObject.bathrooms !== "Any" && {
      //   bathrooms: parseInt(formObject.bathrooms),
      // }),
      // ...(formObject.minRent === "Any" &&
      //   formObject.maxRent !== "Any" && {
      //     "price.$numberDecimal": `{ $lte: ${parseInt(formObject.maxRent)}`,
      //   }),
    };
    await searchForProperties(newObj);
  };

  const searchForProperties = async (searchObj) => {
    // e.preventDefault();
    // console.log(formObject);
    const response = await axios.post(
      "http://localhost:4000/search/results",
      searchObj
    );
    console.log("hii", response);
  };

  return (
    <>
      <div className={styles.searchProperties}>
        <form action="" onSubmit={handleSearch}>
          <section className={styles.rowOne}>
            <span>
              <label htmlFor="suburb">Select Suburb</label>
              <select name="suburb" id={styles.suburb}>
                {suburbs.map((suburb) => {
                  return <option value={suburb}>{suburb}</option>;
                })}
              </select>
            </span>
            <span>
              <label htmlFor="propertyType">Select Property Type</label>
              <select name="propertyType" id={styles.propertyType}>
                {propertyType.map((type) => {
                  return <option value={type}>{type}</option>;
                })}
              </select>
            </span>
            <span id={styles.budget}>
              <span>
                <label htmlFor="budget">Select Weekly Budget</label>
                <select name="minRent" id={styles.minRent}>
                  {minRent.map((amount) => {
                    return <option value={amount}>{amount}</option>;
                  })}
                </select>
              </span>
              {/* <span className={styles.dash}>-</span> */}
              <span>
                {/* <label htmlFor="budget">hello</label> */}
                <select name="maxRent" id={styles.maxRent}>
                  {maxRent.map((amount) => {
                    return <option value={amount}>{amount}</option>;
                  })}
                </select>
              </span>
            </span>
          </section>
          <span className={styles.rowTwo}>
            <span>
              <label htmlFor="bedrooms">Bedrooms</label>
              <select name="bedrooms" id={styles.bedrooms}>
                <option value="Any">Any</option>;
                {bedrooms.map((number) => {
                  return <option value={number}>{number} +</option>;
                })}
              </select>
            </span>
            <span>
              <label htmlFor="bathrooms">Bathrooms</label>
              <select name="bathrooms" id={styles.bathrooms}>
                <option value="Any">Any</option>;
                {bathrooms.map((number) => {
                  return <option value={number}>{number} +</option>;
                })}
              </select>
            </span>

            <span id={styles.petsAndAvail}>
              <span>
                <input type="checkbox" name="pets" value="true" />
                <label htmlFor="pets">Pets OK</label>
              </span>
              <span>
                <input type="checkbox" name="availableNow" value="true" />
                <label htmlFor="availableNow">Available Now</label>
              </span>
            </span>
            <span>
              <label htmlFor="keywords">Keywords</label>

              <input
                for="keywords"
                type="text"
                id={styles.keywords}
                placeholder="Enter keywords or Property ID #"
              />
            </span>
            <button>Search</button>
          </span>
        </form>
      </div>
    </>
  );
}
