import React from "react";
import Nav from "../components/shared/nav/Nav";
import SearchImg from "../components/SearchImg/SearchImg";
import SearchProperties from "../components/SearchProperties/SearchProperties";
import Footer from "../components/shared/footer/Footer";

export default function Search() {
  return (
    <>
      <Nav />
      <SearchImg />
      <SearchProperties />
      <Footer />
    </>
  );
}
