import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cardData } from "../data/database";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const getCardVariants = (isCenter) => ({
  hidden: {
    opacity: 0,
    y: isCenter ? -40 : 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // custom cubic bezier for smooth easing
    },
  },
});

const Solution = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? cardData : cardData.slice(0, 6);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="container flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.4 }} // triggers when 40% is in view
          className="flex flex-col items-center text-center gap-3 mb-10"
        >
          <span className="title-span text-base sm:text-lg md:text-xl font-medium">
            Smart Solutions & Expert Services
          </span>

          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight max-w-4xl">
            Smart Regulatory and Supervisory Solutions for a Dynamic Financial
            Landscape
          </h1>

          <p className="text-sm sm:text-base text-lightText max-w-xl">
            Designed to support regulatory and supervisory transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[100px]"
        >
          {/* Cards */}
          {visibleItems.map(({ id, icon: Icon, title, description, details }, index) => {
            const isCenter = index % 3 === 1;

            return (
              <motion.div
                key={id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
                variants={getCardVariants(isCenter)}
                className="w-full max-w-sm mx-auto relative mb-20 px-6 pt-[60px] pb-[40px] border-2 border-white hover:border-glow backdrop-blur-[12.5px] transition-all duration-1000 shadow-[0_4px_49px_0_rgba(0,7,72,0.12)] bg-[linear-gradient(155deg,hsla(0,0%,100%,0)_-2.13%,hsla(0,0%,100%,.15)_136.58%)] cursor-pointer flex flex-col justify-between"
              >
                <div className="absolute w-24 h-24 -top-[50px] left-6 bg-primary p-2 rounded-md">
                  <Icon className="w-full h-full" />
                </div>
                <div>
                  <h1 className="text-white text-2xl font-medium mb-4 leading-normal">
                    {title}
                  </h1>
                </div>
                <div className="h-full">
                  <p className="text-sm text-[#899aa9] font-normal leading-6 mb-4 break-words">
                    {description}
                  </p>
                </div>
                <button
                  onClick={() =>
                    openModal({ id, icon: Icon, title, description, details })
                  }
                  className="w-full py-3 flex items-center justify-center text-white border-2 border-white backdrop-blur-[12.5px] transition-all duration-1000 cursor-pointer no-underline bg-transparent"
                >
                  Know More
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        {isModalOpen && selectedCard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative text-black">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-black text-lg font-bold"
              >
                ×
              </button>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary p-2 rounded-md mb-4">
                <selectedCard.icon className="w-full h-full text-white" />
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
              <div className="text-sm leading-6 text-gray-700 whitespace-pre-line">
                {selectedCard.details}
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary font-medium border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
