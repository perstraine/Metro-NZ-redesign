import React from "react";
import Nav from "../components/shared/nav/Nav";
import Hero from "../components/hero/Hero";
import WhoAreWe from "../components/who are we/whoAreWe";
import Services from "../components/ourServices/ourServices";
import CallUsNow from "../components/callUsNow/callUsNow";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";
import Testimonials from "../components/home/testimonials/Testimonials";
import Imgcarousel from "../components/home/imgcarousel/Imgcarousel";
import Community from "../components/home/community/Community";
import Contact from "../components/home/contact/Contact";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<WhoAreWe />
			<Services />
			<CallUsNow />
			<Testimonials />
			<Imgcarousel />
			<Community />
			<Contact />
			<NewsletterSignup />
			<Footer />
		</>
	);
}
