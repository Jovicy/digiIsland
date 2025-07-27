// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/lege.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition-colors duration-200 font-medium text-base 
    ${
      location.pathname === path
        ? "text-glow underline underline-offset-4"
        : "text-white hover:text-secondary"
    }`;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-4 md:py-5 relative w-full z-50 bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
        <ul className="hidden md:flex gap-x-14 items-center">
          <li>
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <a href="#/#services" className="text-white hover:text-secondary">
              Services
            </a>
          </li>
        </ul>

        {/* Logo Center */}
        <div className="w-40 md:w-48 p-2 flex items-center justify-center">
          <img
            src={Logo1}
            alt="Logo"
            className="w-full h-auto object-contain 
      contrast-[1.3] brightness-[1.15] drop-shadow-[0_0_4px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Right Links */}
        <ul className="hidden md:flex gap-x-14 items-center">
          <li>
            <a href="#/#solution" className="text-white hover:text-secondary">
              Solution
            </a>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="py-2 px-6 bg-primary text-white rounded-md hover:bg-glow transition"
            >
              Join Us
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-body-color px-6 py-8 rounded-b-2xl flex flex-col gap-6 items-start shadow-md"
          >
            <li>
              <Link
                to="/"
                className={navLinkClass("/")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={navLinkClass("/about")}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#/#services"
                className="text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#/#solution"
                className="text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Solution
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className={navLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 px-6 bg-primary text-white rounded-md hover:bg-glow transition"
              >
                Join Us
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
