import React from "react";
import { useState } from "react";
import Nav from "../components/shared/nav/Nav";
import SearchImg from "../components/SearchImg/SearchImg";
import SearchProperties from "../components/SearchProperties/SearchProperties";
import ShowListings from "../components/Listings/ShowListings";
import Footer from "../components/shared/footer/Footer";

export default function Search() {
  const [searchResults, setSearchResults] = useState(null);
  return (
    <>
      <Nav />
      <SearchImg />
      <SearchProperties
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <ShowListings />
      <Footer />
    </>
  );
}
