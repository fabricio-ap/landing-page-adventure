import React from "react";

import Cards from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

import "../styles/App.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;