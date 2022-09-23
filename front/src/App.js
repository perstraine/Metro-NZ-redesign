import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Listings from "./pages/Listings";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
=======
// import Search from "./pages/Search";
import ThirdPartyPage from "./pages/ThirdPartyPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/search" element={<Search />} /> */}
					<Route path="/third-party" element={<ThirdPartyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
>>>>>>> development
}

export default App;
