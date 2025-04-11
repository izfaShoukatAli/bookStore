import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/freeBook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
};

export default Home;
