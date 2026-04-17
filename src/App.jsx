import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WindowTint from "./pages/WindowTint";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/window-tinting" element={<WindowTint />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
