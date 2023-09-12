import { useState } from "react";

import NavBar from "./componnts/NavBar";
import Home from "./pages/Home";

function App() {
  const [navcolor, setnavcolor] = useState("hero");

  return (
    <div>
      <NavBar navcolor={navcolor} setnavcolor={setnavcolor} />

      <Home setnavcolor={setnavcolor} />
    </div>
  );
}

export default App;
