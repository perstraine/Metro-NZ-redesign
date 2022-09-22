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

export default function SearchProperties({ onSubmit }) {
  return (
    <>
      <div className={styles.searchProperties}>
        <form action="" onSubmit={onSubmit}>
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
              <span>
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
