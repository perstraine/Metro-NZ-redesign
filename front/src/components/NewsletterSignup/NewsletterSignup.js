import React from "react";
import styles from "./NewsletterSignup.module.css";
import ArrowUp from "./assets/arrow-up.svg";

export default function NewsletterSignup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.newsletter}>
        <h3>GET THE LATEST PROPERTY NEWS</h3>
        <p>
          Integer non tortor sit amet augue ultrices viverra eget a odio. Nunc
          vestibulum erat non commodo ullamcorper. Mauris scelerisque laoreet
          ante. Nullam sed porta turpis
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email here" />
          <button>SEND NOW</button>
        </form>
        <p onClick={scrollToTop}>
          Back to top <img src={ArrowUp} alt="" />{" "}
        </p>
      </div>
    </>
  );
}
