import React from "react";
import style from "./ListingComponents.module.css";

export default function ListingComponents({ listing }) {
  return (
    <div className={style.listingComponents}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${listing.images[0]})` }}
      >
        {/* <img src={listing.images[0]} alt="" /> */}
        <h1>
          {listing.address.number +
            " " +
            listing.address.street +
            " " +
            listing.address.suburb}
        </h1>
      </div>
    </div>
  );
}
