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
import { services } from "./Data/services";

const serviceRouteElements = {
  loftInsulation: <LoftInsulation />,
  cavityWallInsulation: <CavityWallInsulation />,
  sprayFoamRemoval: <SprayFoamRemoval />,
  underfloorInsulation: <UnderfloorInsulation />,
  newBuildInsulation: <NewBuildInsulation />,
};


function App() {
  return (
    <Router>
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {services.map((service) => (
          <Route
            key={service.path}
            path={service.path}
            element={serviceRouteElements[service.key]}
          />
        ))}
        {services.map((service) => {
          const rootPath = service.path.replace("/services", "");

          return (
            <Route
              key={rootPath}
              path={rootPath}
              element={<Navigate to={service.path} replace />}
            />
          );
        })}
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
