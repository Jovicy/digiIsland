import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareerPage from "./pages/CareerPage";
import LicencePage from "./pages/LicencePage";
import TermsPage from "./pages/TermsPage";
import FaqPages from "./pages/FaqPages";
import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowHeader(false);

    const timeout = setTimeout(() => {
      setLoading(false);
      if (location.pathname === "/" || location.pathname === "") {
        setShowHeader(true);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [location]);

  const isNotFound =
    location.pathname === "/404" ||
    location.pathname === "/notfound" ||
    location.hash === "#404";

  return (
    <>
      <ScrollToTop /> {/* ✅ Add this line */}

      {!isNotFound && <div className="w-full h-[6px] top-bar z-[100]" />}

      {loading && <Spinner />}
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/license" element={<LicencePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/faq" element={<FaqPages />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isNotFound && <div className="w-full h-[6px] bottom-bar z-[100]" />}
    </>
  );
}


export default App;