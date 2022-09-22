import React, { useState, useEffect } from "react";
import Nav from "../components/shared/nav/Nav";
import Footer from "../components/shared/footer/Footer";
import Gallery from "../components/listing/gallery/Gallery";
import { useParams } from "react-router-dom";
import axios from "axios";
import Details from "../components/listing/details/Details";

export default function Listing() {
  const [images, setImages] = useState('')
  const [details, setDetails] = useState({})

    const [result, setResult] = useState(false)
    let { HouseId } = useParams()
    console.log(HouseId)
  useEffect(() => {
    result ? console.log('haha') :
    axios
        .post("http://localhost:4000/listing", { houseId: `${HouseId}` })
        .then((res) => {
          console.log("result", res.data[0]);
          if (res.data === "failed") {
            setResult(false);
          } else {
            setImages(res.data[0].images);
            const detailsPlaceHolder = { 'address':res.data[0].address };
            detailsPlaceHolder.bed = res.data[0].bedrooms;
            detailsPlaceHolder.bath = res.data[0].bathrooms;
            detailsPlaceHolder.parking = res.data[0].parking;
            detailsPlaceHolder.price = res.data[0].price;
            setDetails(detailsPlaceHolder);

            // setAddress(res.data[0].address);
            setResult(true);
            
          }
        });
    }, [HouseId, result]);
    
    

    return (
      <>
        <Nav />
        {result && (
          <>
            <Gallery images={images} />
            <Details details={details} />
          </>
        )}

        <Footer />
      </>
    );
}