import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Listing from "./pages/Listing";
import ConfirmPage from "./pages/ConfirmPage";
import ApplyPage from "./pages/ApplyPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/listing/:HouseId" element={<Listing />} />
					<Route path="/confirm/:HouseId" element={<ConfirmPage />} />
					<Route path="/apply/:HouseId" element={<ApplyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
