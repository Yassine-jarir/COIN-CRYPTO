import { useState } from "react";
import NavBar from "./componnts/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
function App() {
  const [navcolor, setnavcolor] = useState("hero");

  return (
    <>
      <BrowserRouter>
        <NavBar navcolor={navcolor} setnavcolor={setnavcolor} />
        <Routes>
          <Route path="/" element={<Home setnavcolor={setnavcolor} />} />
          <Route path="coins" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
