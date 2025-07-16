import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-bold text-red-600 mb-6">404</h1>
      <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-4 bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
