import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hosting from "./pages/hosting/Hosting";
import Domain from "./pages/domain/Domain";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domain" element={<Domain/>} />
      </Routes>
      
    </div>
  );
}

export default App;
