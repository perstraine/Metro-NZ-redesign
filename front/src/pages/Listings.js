import React, { Children, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/shared/nav/Nav";
import SearchProperties from "../components/SearchProperties/SearchProperties";
import ShowListings from "../components/Listings/ShowListings";
// import BackToTop from "../components/BackToTop/BackToTop";
// import ListingComponents from "../components/ListingComponents/ListingComponents";
import Footer from "../components/shared/footer/Footer";
import axios from "axios";
import NoListings from "../components/NoListings/NoListings";
import { sortPriceLowHigh, sortPriceHighLow } from "../QuickSort";
import BackToTop from "../components/BackToTop/BackToTop";
import CantFindBanner from "../components/CantFindBanner/CantFindBanner";

export default function Listings() {
  let formObject = {};
  let newObj = {};

  const [listingsToShow, setListingsToShow] = useState(null);
  const [toShowFiltered, setToShowFiltered] = useState(null);
  const [noListings, setNoListings] = useState(false);
  const [sortMethod, setSortMethod] = useState("");

  const showListings = async () => {
    const response = await axios.get("http://localhost:4000/search/");
    setListingsToShow(response.data);
  };

  useEffect(() => {
    showListings();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    formObject = Object.fromEntries(data.entries());
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
    };
    await searchForProperties(newObj);
  };

  const searchForProperties = async (searchObj) => {
    const response = await axios.post(
      "http://localhost:4000/search/results",
      searchObj
    );
    if (response) {
      setNoListings(false);
    }
    checkData(formObject, response);
  };

  function checkData(formObj, dbObj) {
    const formData = { ...formObj };
    for (let key in formData) {
      if (formData[key] === "Any" || formData[key] === "All") {
        delete formData[key];
      }
    }
    const filter = [];
    const toBeFiltered = [
      "bedrooms",
      "bathrooms",
      "available",
      "minRent",
      "maxRent",
    ];
    for (let i = 0; i < toBeFiltered.length; i++) {
      if (Object.keys(formObj).includes(toBeFiltered[i])) {
        filter.push(toBeFiltered[i]);
      }
    }
    let dbDataFiltered = [...dbObj.data];

    for (let i = 0; i < filter.length; i++) {
      let dbDataholder = [];
      for (let j = 0; j < dbDataFiltered.length; j++) {
        let allowed = true;
        switch (filter[i]) {
          case "bedrooms": {
            if (dbDataFiltered[j].bedrooms < formData.bedrooms) {
              allowed = false;
            }
            break;
          }
          case "bathrooms": {
            if (dbDataFiltered[j].bathrooms < formData.bathrooms) {
              allowed = false;
            }
            break;
          }
          case "minRent": {
            if (
              dbDataFiltered[j].price["$numberDecimal"] <
              parseInt(formData.minRent)
            ) {
              allowed = false;
            }
            break;
          }
          case "maxRent": {
            if (
              dbDataFiltered[j].price["$numberDecimal"] >
              parseInt(formData.maxRent)
            ) {
              allowed = false;
            }
            break;
          }
          case "pets": {
            if (dbDataFiltered[j].pets != parseInt(formData.maxRent)) {
              allowed = false;
            }
            break;
          }
        }
        if (allowed) {
          dbDataholder.push(dbDataFiltered[j]);
        }
      }
      dbDataFiltered = [...dbDataholder];
    }
    setToShowFiltered(dbDataFiltered);
    if (dbDataFiltered.length === 0) {
      setNoListings(true);
    }
  }

  useEffect(() => {
    if (toShowFiltered !== null) {
      setListingsToShow(toShowFiltered);
    }
  }, [toShowFiltered]);

  useEffect(() => {
    sort(sortMethod);
  }, [sortMethod]);

  const sort = async (method) => {
    console.log(method);
    if (method === "highestPrice") {
      const sortedObj = await sortPriceHighLow(listingsToShow);
      setListingsToShow(sortedObj);
      console.log(sortedObj);
    }
    if (method === "lowestPrice") {
      console.log(method);
      const sortedObj = await sortPriceLowHigh(listingsToShow);
      setListingsToShow(sortedObj);
      console.log(sortedObj);
    }
    if (method === "latestListing") {
      console.log(method);
    }
  };

  return (
    <>
      <Nav />
      <SearchProperties onSubmit={handleSearch} />
      {noListings === false && (
        <ShowListings
          listingsToShow={listingsToShow}
          setSortMethod={setSortMethod}
          sortMethod={sortMethod}
        />
      )}
      {noListings === true && <NoListings />}
      {noListings === false && <BackToTop />}
      <CantFindBanner />
      <Footer />
    </>
  );
}
