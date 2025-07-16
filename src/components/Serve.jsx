import React from "react";
import { motion } from "framer-motion";
import {
  FaScaleBalanced,
  FaLandmark,
  FaShield,
  FaRobot,
  FaShieldHalved,
} from "react-icons/fa6";

const Serve = () => {
  return (
    <section className="relative bg-sub">
      <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-5">
        {/* Sided Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-2/5 flex flex-col gap-3 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            Industries We <span className="title-span">Serve</span>
          </h1>
          <p className="text-sm sm:text-base">
            We support regulators, financial institutions, and government
            agencies to navigate the evolving landscape of compliance and
            oversight.
          </p>
        </motion.div>

        {/* Sided Cards */}
        <div className="w-full lg:w-3/5 flex flex-col sm:flex-row sm:flex-wrap justify-between items-stretch lg:items-center gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5 flex-1 min-w-[280px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full flex flex-col gap-3 p-6 mt-[15px] rounded-sm backdrop-blur-[2px] bg-[rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-lg title-span">
                <FaScaleBalanced className="h-8 w-8" />
                <h3>Financial Regulators</h3>
              </div>
              <p className="font-normal">
                We provide AI-powered SUPTECH tools that help regulators
                automate reporting, enhance supervision, and make faster,
                data-driven decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full flex flex-col gap-3 p-6 mt-[15px] rounded-sm backdrop-blur-[2px] bg-[rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-lg title-span">
                <FaLandmark className="h-8 w-8" />
                <h3>Banks</h3>
              </div>
              <p className="font-normal">
                Our REGTECH solutions help banks simplify compliance, automate
                regulatory reporting, and proactively manage operational risk
                through real-time insights.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 flex-1 min-w-[280px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full flex flex-col gap-3 p-6 mt-[15px] rounded-sm backdrop-blur-[2px] bg-[rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-lg title-span">
                <FaShield className="h-8 w-8" />
                <h3>Insurance Companies</h3>
              </div>
              <p className="font-normal">
                We enable insurers to navigate complex regulatory frameworks
                with tools that streamline compliance processes and improve data
                accuracy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full flex flex-col gap-3 p-6 mt-[15px] rounded-sm backdrop-blur-[2px] bg-[rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-lg title-span">
                <FaRobot className="h-8 w-8" />
                <h3>Fintechs</h3>
              </div>
              <p className="font-normal">
                We help fintechs meet regulatory demands with agile, cloud-based
                tools that automate compliance and support responsible growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full flex flex-col gap-3 p-6 mt-[15px] rounded-sm backdrop-blur-[2px] bg-[rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-lg title-span">
                <FaShieldHalved className="h-8 w-8" />
                <h3>Law Enforcement</h3>
              </div>
              <p className="font-normal">
                Our solutions support enforcement agencies with smart data tools
                for tracking financial crime, monitoring risks, and driving
                investigations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blueGradient)"
            d="M0,80 C360,0 1080,160 1440,60 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Serve;
