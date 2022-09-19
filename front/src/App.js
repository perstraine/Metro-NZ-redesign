import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
>>>>>>> cb8c5d17d8ca85ff7e2ac87af05679fc699f8d17
}

export default App;
