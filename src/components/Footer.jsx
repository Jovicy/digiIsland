import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex justify-center items-center px-4 sm:px-6 lg:px-0">
      <div className="w-full bg-sub container rounded-lg p-6 sm:p-10 flex flex-col gap-6">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Logo and Description */}
          <div className="w-full lg:w-2/5">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Digital<span className="title-span">Island</span>
            </h1>
            <p className="text-sm sm:text-base">
              Supervisory and regulatory challenges evolve fast – Stay ahead
              with Digital Island
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:justify-between gap-6">
            <ul className="flex flex-col gap-2.5">
              <h3 className="mb-3 font-bold text-base">Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </ul>

            <ul className="flex flex-col gap-2.5">
              <h3 className="mb-3 font-bold text-base">Resources</h3>
              <Link to="/terms">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/faq">FAQ</Link>
            </ul>

            <ul className="flex flex-col gap-2.5">
              <h3 className="mb-3 font-bold text-base">Info</h3>
              <Link to="/career">Career</Link>
              <Link to="/license">License</Link>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-700">
          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <div className="bg-primary flex items-center justify-center rounded-md h-8 w-8 text-white">
              <FaFacebook />
            </div>
            <div className="bg-primary flex items-center justify-center rounded-md h-8 w-8 text-white">
              <FaTwitter />
            </div>
            <div className="bg-primary flex items-center justify-center rounded-md h-8 w-8 text-white">
              <FaInstagram />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">
            © 2025 Digital Island Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
