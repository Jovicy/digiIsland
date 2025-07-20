import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../data/database";

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-700">
    <button
      onClick={onClick}
      className="w-full flex items-start justify-between text-left py-4 group"
    >
      <span className="flex gap-3 text-white font-medium text-base sm:text-lg">
        <span className="text-indigo-400 font-bold">{item.number}</span>
        {item.question}
      </span>
      <span className="text-indigo-400 text-xl group-hover:rotate-90 transition-transform duration-300">
        {isOpen ? "−" : "+"}
      </span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="text-gray-300 pb-4 pl-10 pr-2"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FaqPages = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section>
        <div className="container">
          {/* Title */}
          <div className="w-full flex items-center justify-center gap-4 mb-10">
            <div className="flex-grow border-t border-primary" />
            <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
              FAQs
            </h1>
            <div className="flex-grow border-t border-primary" />
          </div>
        </div>
      </section>
      <section className="bg-sub text-white container rounded-lg">
        <div className="max-w-6xl mx-auto container">
          {faqData.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="mb-14"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                {group.title}
              </h3>
              <div className="space-y-2">
                {group.items.map((item, index) => {
                  const globalIndex = `${groupIndex}-${index}`;
                  const isOpen = activeIndex === globalIndex;
                  return (
                    <AccordionItem
                      key={globalIndex}
                      item={item}
                      isOpen={isOpen}
                      onClick={() =>
                        setActiveIndex(isOpen ? null : globalIndex)
                      }
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="#/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white font-medium"
            >
              Ask your Question
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FaqPages;
