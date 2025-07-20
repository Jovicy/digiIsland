import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const TermsPage = () => {
  return (
    <section className="bg-body text-white leading-relaxed px-5 py-20 font-body">
      <div className="container">
        {/* Title */}
        <div className="w-full flex items-center justify-center gap-4 mb-36">
          <div className="flex-grow border-t border-primary" />
          <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
            Usage Policy
          </h1>
          <div className="flex-grow border-t border-primary" />
        </div>
      </div>
      <motion.div
        className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {/* Intro */}
        <motion.div variants={fadeUp}>
          <p className="text-lg sm:text-xl font-normal leading-8 mb-10">
            At Digital Island Solutions, accessible via{" "}
            <a
              href="https://digitalislands.com"
              target="_blank"
              className="text-primary underline hover:text-[#8870ff]"
            >
              digitalislands.com
            </a>
            , protecting your privacy is one of our core priorities. This
            Privacy Policy outlines the types of information we collect and how
            we use it.
            <br />
            <br />
            If you have any questions or need more information about our Privacy
            Policy, feel free to contact us at{" "}
            <a
              href="mailto:info@digitalislandsolutions.com"
              className="text-primary underline hover:text-[#8870ff]"
            >
              info@digitalislandsolutions.com
            </a>
            .
            <br />
            <br />
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website in relation to the information
            they share and/or collect on Digital Island Solutions. This policy
            does not apply to any information collected offline or through
            channels other than this website.
          </p>
        </motion.div>

        {/* Terms Section 1 */}
        <motion.div
          className="bg-sub rounded-2xl p-6 md:p-12 mb-10"
          variants={fadeUp}
        >
          <h5 className="text-2xl md:text-3xl font-semibold mb-4 relative before:absolute before:bottom-[-8px] before:left-0 before:w-10 before:h-[2px] before:bg-primary">
            Information We Collect
          </h5>
          <p className="text-gray-300 mb-5">
            When we ask you to supply personal information, we will clearly
            explain why we’re requesting it.
          </p>
          <p className="text-gray-300 mb-5">
            If you contact us directly, we may collect your name, email, phone
            number, the content of your message, attachments, and any other
            information you choose to provide.
          </p>
          <p className="text-gray-300 mb-5">
            When creating an account, we may collect your name, company name,
            address, email, and phone number.
          </p>

          <h5 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 relative before:absolute before:bottom-[-8px] before:left-0 before:w-10 before:h-[2px] before:bg-primary">
            How We Use Your Information
          </h5>
          <p className="text-gray-300 mb-4">We use the collected data to:</p>
          <ul className="list-disc text-gray-300 pl-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve and personalize your user experience</li>
            <li>Understand how our visitors use our platform</li>
            <li>Create new products, services, and features</li>
            <li>Communicate with you about updates, services, or promotions</li>
            <li>Send you emails and newsletters</li>
            <li>Detect and prevent fraud</li>
          </ul>
        </motion.div>

        {/* Terms Section 2 */}
        <motion.div
          className="bg-sub rounded-2xl p-6 md:p-12"
          variants={fadeUp}
        >
          <h5 className="text-2xl md:text-3xl font-semibold mb-4 relative before:absolute before:bottom-[-8px] before:left-0 before:w-10 before:h-[2px] before:bg-primary">
            Log Files
          </h5>
          <p className="text-gray-300 mb-5">
            Digital Island Solutions follows standard procedures for using log
            files. These log files track visits to our website, a common
            practice among hosting companies and part of analytics services.
          </p>
          <p className="text-gray-300 mb-5">
            The information collected by log files includes IP addresses,
            browser type, Internet Service Provider (ISP), date/time stamps,
            referring/exit pages, and possibly the number of clicks. This data
            is not linked to personally identifiable information. It helps us
            analyze trends, administer the site, and gather demographic
            information.
          </p>

          <h5 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 relative before:absolute before:bottom-[-8px] before:left-0 before:w-10 before:h-[2px] before:bg-primary">
            Cookies and Web Beacons
          </h5>
          <p className="text-gray-300 mb-5">
            Like many other websites, Digital Island Solutions uses cookies to
            store information including visitors’ preferences and the pages they
            visited. This helps tailor website content to browser types and user
            behavior for a better experience.
          </p>

          <h5 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 relative before:absolute before:bottom-[-8px] before:left-0 before:w-10 before:h-[2px] before:bg-primary">
            Advertising Partners Privacy Policies
          </h5>
          <p className="text-gray-300 mb-5">
            You may consult this list to find the Privacy Policy for each of our
            advertising partners.
          </p>
          <p className="text-gray-300">
            Third-party ad servers or networks may use cookies, JavaScript, or
            Web Beacons in their advertisements and links that appear on our
            site. These are sent directly to users’ browsers and automatically
            receive your IP address. These technologies are used to measure the
            effectiveness of advertising campaigns and personalize the ads you
            see.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TermsPage;
