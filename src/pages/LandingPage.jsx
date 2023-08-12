import React from "react"
import Hero from "../components/Hero"
import Blogs from "../components/Blogs"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
