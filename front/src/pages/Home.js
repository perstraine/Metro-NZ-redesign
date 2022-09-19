import React from "react";
import Nav from "../components/shared/nav/Nav";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";
import Testimonials from "../components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Testimonials/>
      <NewsletterSignup />
      <Footer />
    </>
  );
}
