import React from "react";
import Nav from "../components/shared/nav/Nav";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
