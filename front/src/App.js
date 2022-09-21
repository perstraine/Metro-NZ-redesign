import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
}

export default App;
