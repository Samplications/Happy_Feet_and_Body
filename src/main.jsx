import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import PrijslijstPage from './pages/PrijslijstPage';
import ContactPage from './pages/ContactPage';
import HouseRulesPage from './pages/HouseRulesPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPage';

// Custom component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RootComponent = () => (
  <>
    <Header />
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/Prijslijst" element={<PrijslijstPage />} />
      <Route exact path="/Contact" element={<ContactPage />} />
      <Route exact path="/HouseRules" element={<HouseRulesPage />} />
      <Route exact path="/Disclaimer" element={<DisclaimerPage />} />
      <Route exact path="/Privacy" element={<PrivacyPage />} />
    </Routes>
    <Footer />
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RootComponent />
    </Router>
  </StrictMode>
);
