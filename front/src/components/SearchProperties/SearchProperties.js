import React from "react";
import axios from "axios";
import style from "./SearchProperties.module.css";
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
  const initialFormData = Object.freeze({
    suburb: "",
    propertyType: "",
    budget: "",
    minRent: "",
    maxRent: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    availableNow: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  //   const handleChange = (e) => {
  //     updateFormData({
  //       ...formData,

  //       // Trimming any whitespace
  //       [e.target.name]: e.target.value.trim(),
  //     });
  //   };

  //   const [suburbInput, setSuburbInput] = useState("All");
  //   const [propertyTypeInput, setPropertyTypeInput] = useState("All");
  //   const [minPriceInput, setMinPriceInput] = useState("All");
  //   const [bedroomsInput, setBedroomsInput] = useState(1);
  //   const [maxPriceInput, setMaxPriceInput] = useState("All");
  //   const [bathroomsInput, setBathroomsInput] = useState(1);
  //   const [keywordsInput, setKeywordsInput] = useState();
  //   const [hasPetInput, setHasPetInput] = useState();
  //   const [availNowInput, setAvailNowInput] = useState();

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
      //   ...(formObject.bedrooms !== "Any" && {
      //     bedrooms: `{$gte: ${parseInt(formObject.bedrooms)}}`,
      //     // bedrooms: parseInt(formObject.bedrooms),
      //   }),
      //   ...(formObject.bathrooms !== "Any" && {
      //     bathrooms: parseInt(formObject.bathrooms),
      //   }),
      //   ...(formObject.minRent === "Any" &&
      //     formObject.maxRent !== "Any" && {
      //       "price.$numberDecimal": `{ $lte: ${parseInt(formObject.maxRent)}`,
      //     }),
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
      <div className={style.searchProperties}>
        <form action="" onSubmit={handleSearch}>
          <label htmlFor="suburb">Suburb</label>
          <select name="suburb" id="">
            {suburbs.map((suburb) => {
              return <option value={suburb}>{suburb}</option>;
            })}
          </select>
          <label htmlFor="propertyType">Property Type</label>
          <select name="propertyType" id="">
            {propertyType.map((type) => {
              return <option value={type}>{type}</option>;
            })}
          </select>
          <label htmlFor="budget">Budget</label>
          <select name="minRent" id="">
            {minRent.map((amount) => {
              return <option value={amount}>{amount}</option>;
            })}
          </select>
          <select name="maxRent" id="">
            {maxRent.map((amount) => {
              return <option value={amount}>{amount}</option>;
            })}
          </select>
          <label htmlFor="bedrooms">Bedrooms</label>
          <select name="bedrooms" id="">
            <option value="Any">Any</option>;
            {bedrooms.map((number) => {
              return <option value={number}>{number} +</option>;
            })}
          </select>
          <label htmlFor="bathrooms">Bathrooms</label>
          <select name="bathrooms" id="">
            <option value="Any">Any</option>;
            {bathrooms.map((number) => {
              return <option value={number}>{number} +</option>;
            })}
          </select>
          <label htmlFor="keywords">Keywords</label>
          <input type="text" placeholder="Enter keywords or Property ID #" />
          <label htmlFor="pets">Pets OK</label>
          <input type="checkbox" name="pets" value="true" />
          <label htmlFor="availableNow">Available Now</label>
          <input type="checkbox" name="availableNow" value="true" />
          <button>Search</button>
        </form>
      </div>
    </>
  );
}
