""; // src/components/Header.jsx
import React from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo.png";
import videoBackground from "../assets/bg-video.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative w-full h-auto bg-black overflow-hidden">
      <Navbar />

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoBackground}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 flex flex-col gap-6 justify-center min-h-[500px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-10 md:pt-14"
        >
          <h1 className="text-[31.5px] md:text-5xl lg:text-7xl font-semibold lg:font-extrabold md:font-extrabold leading-tight text-white">
            Welcome to <br />
            <span className="text-primary">DigitalIsland Solutions</span>
            <br />
            <span className="text-primary flex items-center gap-3 text-2xl md:text-2xl lg:text-7xl mt-2">
              <FaArrowRightLong /> AI + SupTech + RegTech
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-[560px] text-lightText">
            AI-powered SupTech and RegTech solutions for smarter compliance,
            oversight, and financial system resilience—secured by blockchain and
            enabled for the future of Web3.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
