import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Listing from "./pages/Listing";
import ThirdPartyPage from "./pages/ThirdPartyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:HouseId" element={<Listing />} />
          <Route path="/third-party" element={<ThirdPartyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
