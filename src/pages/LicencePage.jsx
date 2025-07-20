import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LicencePage = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* Title */}
          <div className="w-full flex items-center justify-center gap-4 mb-10">
            <div className="flex-grow border-t border-primary" />
            <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
              Licenses
            </h1>
            <div className="flex-grow border-t border-primary" />
          </div>
        </div>
      </section>
      <section className="text-white py-20 px-5 font-body container">
        <motion.div
          className="max-w-[700px] mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-head font-bold mb-4 text-center"
            variants={fadeInUp}
          >
            Assets & Licensing
          </motion.h2>

          <motion.p
            className="text-base text-gray-300 mb-10 leading-relaxed text-center"
            variants={fadeInUp}
          >
            Below is a list of all image sources, fonts, and icon libraries used
            across the Digital Island Solutions website. All assets comply with
            standard licensing and fair use terms.
          </motion.p>

          {/* Images */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Images</h3>
            <ul className="space-y-3">
              {[
                "unsplash.com",
                "webflow.com",
                "pinterest.com",
                "freepik.com",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white text-black py-3 px-5 rounded-[20px] text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fonts */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Fonts</h3>
            <ul className="space-y-3">
              {["Funnel Display", "Poppins"].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white text-black py-3 px-5 rounded-[20px] text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Icons */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Icons</h3>
            <ul className="space-y-3">
              <li className="bg-white text-black py-3 px-5 rounded-[20px] text-sm font-medium">
                Font Awesome
              </li>
              <li className="bg-white text-black py-3 px-5 rounded-[20px] text-sm font-medium">
                React Icons
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default LicencePage;
