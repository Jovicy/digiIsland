import React from "react";

const ContactPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="container flex flex-col items-center">
        {/* Contact Title */}
        <div className="w-full flex items-center justify-center gap-4 mb-10">
          <div className="flex-grow border-t border-primary" />
          <h1 className="title-span text-5xl md:text-7xl lg:text-9xl font-extrabold whitespace-nowrap">
            Contact Us
          </h1>
          <div className="flex-grow border-t border-primary" />
        </div>

        {/* Contact Form */}
        <form action="submit" className="w-full max-w-6xl">
          {/* Name and Phone */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-5 mb-10">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <label className="font-bold text-base" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full text-off-white px-4 py-3 border-2 rounded focus:outline-none focus:ring-0 focus:border-glow placeholder:text-black/400"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <label className="font-bold text-base" htmlFor="phone">
                Mobile Number
              </label>
              <input
                className="w-full text-off-white px-4 py-3 border-2 rounded focus:outline-none focus:ring-0 focus:border-glow placeholder:text-black/400"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full mb-10 flex flex-col gap-3">
            <label className="font-bold text-base" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full text-off-white px-4 py-3 border-2 rounded focus:outline-none focus:ring-0 focus:border-glow placeholder:text-black/400"
              type="email"
              placeholder="Enter Email Address"
            />
          </div>

          {/* Message */}
          <div className="w-full mb-10 flex flex-col gap-3">
            <label className="font-bold text-base" htmlFor="message">
              Messages
            </label>
            <textarea
              rows={8}
              name="messages"
              id="messages"
              placeholder="Enter Your Messages"
              className="w-full text-off-white px-4 py-3 border-2 rounded focus:outline-none focus:ring-0 focus:border-glow placeholder:text-black/400"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
