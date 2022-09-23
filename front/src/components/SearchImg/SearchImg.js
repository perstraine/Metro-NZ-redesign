import React from "react";
import style from "./SearchImg.module.css";
import Img from "./assets/auckland-img.png";
import ManImg from "./assets/man-img.png";

export default function SearchImg() {
  return (
    <>
      <div className={style.searchImg}>
        <h1>What METRO NZ properties are you interested in?</h1>
        <img src={ManImg} alt="" />
      </div>
    </>
  );
}
