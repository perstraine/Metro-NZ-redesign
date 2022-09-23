import React from "react";
import styles from "./Nav.module.css";
import Logo from "./assets/metro-logo.png";
import DownArrow from "./assets/down-arrow.svg";
import MagGlass from "./assets/mag-glass.svg";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const showDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    dropdown.classList.toggle(styles["active"]);
  };

  const hideDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    dropdown.classList.remove(styles["active"]);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navColOne}>
          <span>CALL US - (09) 391 4642</span>
          <span>GET A FREE APPRAISAL</span>
          <span>CHANGE TO METRO NZ</span>
        </div>
        <div className={styles.navColTwo}>
          <img src={Logo} alt="" onClick={() => navigate("/")} />
          <span>
            <p onClick={showDropdown}>
              Management Services <img src={DownArrow} alt="" />
            </p>
            <div
              className={styles.dropdown}
              id="dropdown"
              onMouseLeave={hideDropdown}
            >
              <p>Property Management</p>
              <p>Building Management</p>
              <p>Body Corporate Administration</p>
              <p>Get a free appraisal</p>
            </div>
          </span>

          <p>Find a Rental</p>
          <p>News</p>
          <p>About Us</p>
          <p>Contact</p>
          <img src={MagGlass} alt="" />
        </div>
      </div>
    </>
  );
}
