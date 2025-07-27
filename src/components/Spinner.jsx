// src/components/Spinner.jsx
import React from "react";
import Logo from "../assets/logo.png"; // adjust path if needed
import Logo1 from "../assets/logo-1.png";

const Spinner = () => {
  return (
    <div id="loader">
      <div className="spinner">
        <img src={Logo1} alt="Loading..." />
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Spinner;
