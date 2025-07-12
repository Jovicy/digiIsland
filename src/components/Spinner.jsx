// src/components/Spinner.jsx
import React from "react";
import Logo from "../assets/logo.png"; // adjust path if needed

const Spinner = () => {
  return (
    <div id="loader">
      <div className="spinner">
        <img src={Logo} alt="Loading..." />
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Spinner;
