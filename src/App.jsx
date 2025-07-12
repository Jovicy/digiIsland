import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
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
      // Show Header slightly after loader disappears
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

      {/* Bottom Gradient Bar */}
      <div className="w-full h-[6px] bottom-bar z-[100]" />
    </>
  );
}

export default App;
