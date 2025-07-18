import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/about-page.avif";
import integrateImg1 from "../assets/triangle.svg";
import integrateImg2 from "../assets/geometric.svg";
import integrateImg3 from "../assets/bermuda.svg";
import visionImg from "../assets/vision-icon.svg";
import missionImg from "../assets/mission-icon.svg";
import noDp from "../assets/no-dp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Your image data
import { PartnerImg, testimonialsCont } from "../data/database";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust based on when to start the animation
  });

  return (
    <section className="min-h-screen">
      <div className="container flex flex-col items-center">
        {/* Title */}
        <div className="w-full flex items-center justify-center gap-4 mb-10">
          <div className="flex-grow border-t border-primary" />
          <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
            Digital Islands
          </h1>
          <div className="flex-grow border-t border-primary" />
        </div>
        {/* About Content */}
        <div className="flex flex-col gap-10" ref={ref}>
          {/* Image Section */}
          <div className="bg-sub p-6 md:p-10 lg:p-16 rounded-3xl">
            <img src={Image} alt="team image" className="rounded-3xl w-full" />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#ffffff1a] w-full">
            {/* Stat 1 */}
            <div className="flex flex-col gap-8 border-b md:border-b-0 md:border-r border-[#ffffff1a] p-6">
              <div className="w-20">
                <img src={integrateImg1} alt="stat-img" className="w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-glow">
                  {inView ? <CountUp end={85} duration={5} suffix="%" /> : "0%"}
                </h1>
                <p className="text-base font-medium">
                  Reduction in manual reporting
                </p>
                <h4 className="text-[#757575] text-sm pb-2">
                  Through automated data collection
                </h4>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-8 border-b md:border-b-0 md:border-r border-[#ffffff1a] p-6">
              <div className="w-20">
                <img src={integrateImg2} alt="stat-img" className="w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-glow">
                  {inView ? <CountUp end={70} duration={5} suffix="%" /> : "0%"}
                </h1>
                <p className="text-base font-medium">
                  Improved risk detection accuracy
                </p>
                <h4 className="text-[#757575] text-sm pb-2">
                  Using AI-driven SUPTECH tools
                </h4>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-8 p-6">
              <div className="w-20">
                <img src={integrateImg3} alt="stat-img" className="w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-glow">
                  {inView ? <CountUp end={90} duration={5} suffix="%" /> : "0%"}
                </h1>
                <p className="text-base font-medium">
                  Regulatory and supervisory process digitization
                </p>
                <h4 className="text-[#757575] text-sm pb-2">
                  Across client institutions
                </h4>
              </div>
            </div>
          </div>

          {/* About Main section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 pb-20">
            {/* About Text */}
            <motion.div
              className="lg:w-[40%] flex flex-col gap-4 sticky lg:top-[100px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold">About Us</h3>

              {[
                "Digital Island Solutions Limited stands at the forefront of the evolving Suptech and Regtech sectors, establishing itself as a pioneering force dedicated to reshaping the very fabric of regulatory compliance and supervisory oversight.",
                "We achieve this through the strategic and innovative application of cutting-edge technologies, most notably artificial intelligence (AI), blockchain, and the decentralized potential that Web3 solutions offer.",
                "By harnessing the power of these transformative tools, Digital Island Solutions is uniquely positioned to competently address the evolving challenges and intricate demands of the modern financial ecosystem.",
                "Our commitment lies in developing and deploying sophisticated platforms and services that not only streamline regulatory and supervisory processes, but also enhance the capabilities of those tasked with ensuring market integrity and stability.",
                "We understand that the future of effective regulation and supervision largely depends on the intelligent integration of technology, in all its diverse forms. This is why Digital Island Solutions is driving the much-needed shift to achieve this critical revolution.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-sm md:text-base font-normal leading-relaxed text-[#ebebed] opacity-70"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Vision & Mission */}
            <div className="lg:w-[55%] flex flex-col gap-20">
              {/* Vision */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20">
                  <img src={visionImg} alt="Our Vision" className="w-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl font-medium title-span">
                    Our Vision
                  </h2>
                  <p className="text-base font-normal text-white">
                    To be Africa's foremost provider of transformative
                    regulatory and supervisory technologies that enable
                    real-time, intelligent, and equitable governance of
                    financial systems.
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-20">
                  <img src={missionImg} alt="Our Mission" className="w-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl font-medium title-span">
                    Our Mission
                  </h2>
                  <p className="text-base font-normal text-white">
                    Our mission is deeply rooted in the desire to empower a
                    diverse range of stakeholders — financial institutions
                    navigating an increasingly complex regulatory landscape,
                    regulatory bodies striving for more effective oversight, and
                    governments seeking to foster economic stability and
                    security. Digital Island Solutions equips these key players
                    with tools and insights to navigate modern finance with
                    unprecedented efficiency, transparency, and security.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="bg-sub py-20">
        <div className="container flex flex-col items-center gap-10">
          {/* Partners Title */}
          <div className="mb-4 text-center max-w-3xl">
            <h1 className="title-span text-[32px] sm:text-[40px] md:text-[56px] font-medium">
              Our Partners
            </h1>
            <p className="text-sm sm:text-base text-white opacity-80 mt-4">
              We collaborate with leading regulatory bodies, financial
              institutions, and technology providers to deliver comprehensive
              SUPTECH and REGTECH solutions.
            </p>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 6, spaceBetween: 50 },
            }}
            className="w-full px-4 flex "
          >
            {PartnerImg.map((partner) => (
              <SwiperSlide
                key={partner.id}
                className="flex justify-center items-center"
              >
                <div className="w-24 h-auto">
                  <img
                    src={partner.image}
                    alt={`partner-${partner.id}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Testimonial Section */}
      <article className="py-10">
        <div className="container flex flex-col">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="title-span font-medium text-[20px] md:text-[22px]">
                Testimonials
              </span>
              <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium">
                Real Stories of How <span className="title-span">Digital</span>{" "}
                Island Is Transforming Regulation
              </h1>
            </div>
            {/* Custom Arrows */}
            <div className="flex items-center gap-2.5">
              <div className="swiper-prev bg-[#ffffff1a] rounded-[10px] flex justify-center items-center w-12 h-12 text-white cursor-pointer">
                <FaArrowLeft />
              </div>
              <div className="swiper-next bg-[#ffffff1a] rounded-[10px] flex justify-center items-center w-12 h-12 text-white cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {testimonialsCont.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-6 text-white flex flex-col gap-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] h-full">
                  <div className="flex items-center gap-2">
                    <div className="w-14 flex items-center justify-center">
                      <img
                        src={noDp}
                        alt="Testimonial User"
                        className="rounded-full border-2 border-glow object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">
                        {testimonial.userName}
                      </h3>
                      <p className="text-[0.85rem] text-[#ccc]">
                        {testimonial.userTitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.95rem] leading-[1.6] text-[#ddd]">
                    {testimonial.userTestimony}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
