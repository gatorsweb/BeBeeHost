import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hosting from "./pages/hosting/Hosting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
      </Routes>
    </div>
  );
}

export default App;
