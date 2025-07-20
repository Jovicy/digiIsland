import { div } from "framer-motion/client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import careerImg from "../assets/career-img.avif";
import stairUpIcon from "../assets/stair-icon.svg";
import userUpIcon from "../assets/user-up.svg";
import { stats, featureData, careerData } from "../data/database";
import CollabIcon from "../assets/satisfaction.svg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CareerPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section>
        <div className="container">
          {/* Title */}
          <div className="w-full flex items-center justify-center gap-4 mb-10">
            <div className="flex-grow border-t border-primary" />
            <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
              Careers
            </h1>
            <div className="flex-grow border-t border-primary" />
          </div>
        </div>
      </section>
      <section className="flex items-center">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-full lg:w-[43%] flex flex-col gap-[40px]"
            >
              <div className="text-[28px] sm:text-[32px] md:text-[36px] font-normal leading-[135%]">
                <h2>
                  Explore Exciting Career <br /> Opportunities
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                {/* Feature 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="career-head-icon shrink-0">
                    <img
                      src={stairUpIcon}
                      alt="Career Growth Icon"
                      className="w-10 h-10"
                      style={{
                        filter:
                          "invert(78%) sepia(57%) saturate(6571%) hue-rotate(160deg) brightness(115%) contrast(102%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[20px] sm:text-[24px] font-normal">
                      Career Growth &amp; Development
                    </h3>
                    <p className="text-white text-[14px] font-normal leading-relaxed">
                      Training, certifications, and mentorship{" "}
                      <br className="hidden sm:block" />
                      opportunities.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="career-head-icon shrink-0">
                    <img
                      src={userUpIcon}
                      alt="Compensation Icon"
                      className="w-10 h-10"
                      style={{
                        filter:
                          "invert(78%) sepia(57%) saturate(6571%) hue-rotate(160deg) brightness(115%) contrast(102%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[20px] sm:text-[24px] font-normal">
                      Competitive Compensation
                    </h3>
                    <p className="text-white text-[14px] font-normal leading-relaxed">
                      Health insurance, performance bonuses, and{" "}
                      <br className="hidden sm:block" />
                      stock options.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <img
                src={careerImg}
                alt="career-img"
                className="rounded-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-10"
              >
                <div>
                  <img
                    src={CollabIcon}
                    alt=""
                    className="w-20 h-20"
                    style={{
                      filter:
                        "invert(78%) sepia(57%) saturate(6571%) hue-rotate(160deg) brightness(115%) contrast(102%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-[18px] font-normal leading-[170%]">
                    {stat.label}
                  </h4>
                  <p className="text-[48px] font-semibold leading-[120%] text-white font-head">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                        decimals={stat.decimals || 0}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-36">
            {featureData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-sub rounded-[16px] pt-5 px-6 pb-6 flex flex-col"
                >
                  <div>
                    <Icon className="text-glow text-7xl mb-5" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-[32px] font-semibold tracking-[-0.5px]">
                      {item.title}
                    </h5>
                    <p className="text-[14px] font-normal text-[#acabb2]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="flex flex-col gap-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="text-center text-white flex flex-col gap-4">
              <h1 className="text-center text-white font-normal leading-[120%] text-[36px] md:text-[48px] lg:text-[56px] tracking-[-0.1875rem] m-0 font-head">
                Careers at Digital Island
              </h1>
              <p className="text-base md:text-lg text-[#d4d4d8]">
                Join a mission-driven team building the future of digital
                regulation across Africa and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
              {careerData.map((job, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-sub border border-white/10 rounded-[16px] flex flex-col items-start px-6 pt-6 pb-8"
                >
                  <p className="bg-borderDark text-[#ebebed] font-head border border-[#f3f2f21a] rounded-lg px-4 py-2 text-base font-normal leading-[1.7]">
                    {job.category}
                  </p>

                  <div className="flex flex-col gap-2 mt-6 mb-5">
                    <h6 className="text-white tracking-[-0.3px] text-[20px] md:text-[24px] font-medium leading-[1.5] m-0">
                      {job.title}
                    </h6>
                    <p className="text-[#acabb2] opacity-60 text-[16px] font-normal leading-[1.7] m-0">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex gap-2 mb-8 flex-wrap">
                    <p className="bg-borderDark text-primary border border-[#f3f2f21a] rounded-lg px-3 py-2 text-base font-normal leading-[1.7] m-0 font-head">
                      {job.type}
                    </p>
                    <p className="bg-borderDark text-primary border border-[#f3f2f21a] rounded-lg px-3 py-2 text-base font-normal leading-[1.7] m-0 font-head">
                      {job.salary}
                    </p>
                  </div>

                  <a
                    href={job.applyLink}
                    className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 transition-colors duration-500 no-underline"
                  >
                    <p className="text-white">
                      Apply Now{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
