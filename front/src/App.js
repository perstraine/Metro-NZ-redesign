import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ConfirmPage from "./pages/ConfirmPage";
import ApplyPage from "./pages/ApplyPage";
import Listings from "./pages/Listings";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/listing/:HouseId" element={<Listing />} />
					<Route path="/listings" element={<Listings />} />
					<Route path="/confirm/:HouseId" element={<ConfirmPage />} />
					<Route path="/apply/:HouseId" element={<ApplyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
