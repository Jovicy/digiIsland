import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
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
      setTimeout(() => setShowHeader(true), 100);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {/* Top Gradient Bar */}
      <div className="w-full h-[6px] top-bar z-[100]" />

      {loading && <Spinner />}
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Bottom Gradient Bar */}
      <div className="w-full h-[6px] bottom-bar z-[100]" />
    </>
  );
}

export default App;
