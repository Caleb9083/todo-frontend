import React from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Testimonies from "../../components/Testimonies/Testimonies";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <Hero />
        <Testimonies />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
