import React from "react";
import { useState } from "react";
import Nav from "../components/shared/nav/Nav";
// import Search from "./Search";
import ShowListings from "../components/Listings/ShowListings";
// import ListingComponents from "../components/ListingComponents/ListingComponents";

export default function Listings() {
  return (
    <>
      <Nav />
      <ShowListings />
    </>
  );
}
