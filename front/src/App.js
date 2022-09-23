import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Listings from "./pages/Listings";
import ThirdPartyPage from "./pages/ThirdPartyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:HouseId" element={<Listing />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/third-party" element={<ThirdPartyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
