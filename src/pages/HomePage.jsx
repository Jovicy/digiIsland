import React from "react";
import Solution from "../components/Solution";
import Serve from "../components/Serve";
import Footer from "../components/Footer";

import TriangleImg from "../assets/triangle.svg";
import PassionImg from "../assets/passion-icon.svg";
import CollabImg from "../assets/collab-img.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section className="py-16 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto flex flex-col gap-12">
          {/* TITLE */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="w-full lg:w-1/2 text-left space-y-3">
              <span className="title-span font-medium text-[20px] md:text-[22px]">
                Who We Are
              </span>
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-tight font-bold">
                Regulatory Experts. <br className="hidden md:block" /> Tech
                Innovators.
              </h1>
            </div>
            <div className="w-full lg:w-1/2 text-white text-[15px] md:text-[16px] leading-[28px] opacity-70">
              <p>
                We are a technology-driven firm with deep regulatory insight.
                Our team brings together experience from public sector
                regulation, financial services, and software engineering to
                build secure, scalable, and AI-enabled digital tools. From
                real-time reporting to risk intelligence, we help clients
                navigate the complexities of modern regulation with confidence.
              </p>
            </div>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Customer-Centricity",
                desc: "Our clients' needs shape our innovations, ensuring user-focused and regulatory-aligned solutions.",
                img: TriangleImg,
              },
              {
                title: "Collaboration",
                desc: "We co-create with regulators, institutions, and stakeholders to deliver meaningful digital impact.",
                img: CollabImg,
              },
              {
                title: "Passion for Learning",
                desc: "We're constantly evolving—adapting to new challenges, technologies, and regulatory needs.",
                img: PassionImg,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-6 border border-[#ffffff1a] rounded-[16px] px-4 pt-4 pb-8 backdrop-blur-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <div className="flex justify-center items-center pt-16 pb-16 border border-[#ffffff1a] rounded-md bg-[linear-gradient(302deg,_#0000,_#ffffff1a)]">
                  <div className="w-[100px] md:w-[124px]">
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 text-white px-2 md:px-[10px]">
                  <h4 className="text-[22px] md:text-[28px] font-normal">
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div id="services">
        <Serve />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
