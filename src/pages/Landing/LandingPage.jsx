import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
// import Newsletter from "../components/Newsletter";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Blogs />
      <FAQ />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
