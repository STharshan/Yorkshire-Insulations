import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import  LoftInsulation from "./pages/Loftinsulation";
import Leeds from "./pages/leeds";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/loft-insulation" element={< LoftInsulation />} />
        <Route path="/locations/leeds" element={<Leeds />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
