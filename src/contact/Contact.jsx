import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 px-6 py-16 text-gray-800 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-pink-500 m-10">
            Contact Us
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            Have questions or need help? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-pink-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    contact@bookstore.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-pink-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    +92 123 4567890
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-pink-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    BookNest HQ,
                    <br />
                    123 Book Street,
                    <br />
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form (non-functional for now) */}
            <form className="space-y-6 bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
