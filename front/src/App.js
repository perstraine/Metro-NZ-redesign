import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThirdPartyPage from "./pages/ThirdPartyPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/third-party" element={<ThirdPartyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
