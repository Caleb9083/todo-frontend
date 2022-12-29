import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonies from "../../components/Testimonies/Testimonies";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <Hero />
        <Testimonies />
      </div>
    </div>
  );
};

export default Home;
