import React from "react";

import Cards from "../components/Card/Card";
import HeroSection from "../components/HeroSection/HeroSection";

import "../styles/App.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
};

export default Home;