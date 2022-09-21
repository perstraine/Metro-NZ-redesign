import React, { useState, useEffect } from "react";
import Nav from "../components/shared/nav/Nav";
import Footer from "../components/shared/footer/Footer";
import Gallery from "../components/listing/gallery/Gallery";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Listing() {
    const [listing, setListing] = useState({})
    const [result, setResult] = useState(false)
    let { HouseId } = useParams()
    console.log(HouseId)
    useEffect(() => {
      axios
        .post("http://localhost:4000/listing", { houseId: `${HouseId}` })
        .then((res) => {
          console.log("result", res.data);
          if (res.data === "failed") {
            setResult(false);
          } else {
            setResult(true);
            setListing(res.data[0]);
          }
        });
    }, [HouseId]);
    
    

    return (
        <>
            <Nav />
            <Gallery result={result} listing={listing} />
            <Footer />
        </>
    )
}