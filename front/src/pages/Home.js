import Hero from "../components/shared/hero/Hero";
import React from "react";
import Nav from "../components/shared/nav/Nav";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<NewsletterSignup />
			<Footer />
		</>
	);
}
