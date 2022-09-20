import React from "react";
import Nav from "../components/shared/nav/Nav";
import Hero from "../components/hero/Hero";
import WhoAreWe from "../components/who are we/whoAreWe";
import Services from "../components/ourServices/ourServices";
import CallUsNow from "../components/callUsNow/callUsNow";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<WhoAreWe />
			<Services />
			<CallUsNow />
			<NewsletterSignup />
			<Footer />
		</>
	);
}
