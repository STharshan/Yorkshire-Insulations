import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoftInsulation from "./pages/Loftinsulation";
import CavityWallInsulation from "./pages/CavityWallInsulation";
import SprayFoamRemoval from "./pages/SprayFoamRemoval";
import UnderfloorInsulation from "./pages/UnderfloorInsulation";
import NewBuildInsulation from "./pages/NewBuildInsulation";
import Leeds from "./pages/leeds";
import ScrollToHash from "./components/ScrollToHash";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/loft-insulation" element={<LoftInsulation />} />
        <Route path="/services/cavity-wall-insulation" element={<CavityWallInsulation />} />
        <Route path="/services/spray-foam-removal" element={<SprayFoamRemoval />} />
        <Route path="/services/underfloor-insulation" element={<UnderfloorInsulation />} />
        <Route path="/services/new-build-insulation" element={<NewBuildInsulation />} />
        <Route path="/locations/leeds" element={<Leeds />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
