import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-white px-6 py-16 m-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-pink-500">
            About Our BookStore
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to BookStore — your trusted source for stories, knowledge,
            and imagination. Whether you're a casual reader or a bookworm, we’re
            here to bring you the best books from around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                To create a community where knowledge is freely shared, reading
                is celebrated, and books are always within reach.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                Why Choose Us?
              </h2>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-left">
                <li>✅ Thousands of titles across all genres</li>
                <li>✅ Fast & reliable delivery</li>
                <li>✅ Support for local authors</li>
                <li>✅ Secure online shopping</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                Our Promise
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We promise to always keep the love for books alive by making
                reading accessible, joyful, and affordable.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="italic text-gray-600 dark:text-gray-400">
              “Reading gives us someplace to go when we have to stay where we
              are.” – Mason Cooley
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
