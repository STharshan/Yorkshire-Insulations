import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoftInsulation from "./pages/Loftinsulation";
import Leeds from "./pages/leeds";
import ScrollToHash from "./components/ScrollToHash";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";


function App() {
  return (
    <Router>
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/loft-insulation" element={< LoftInsulation />} />
        <Route path="/locations/leeds" element={<Leeds />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
