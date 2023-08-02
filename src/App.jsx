import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";

function App() {
  return (
    <>
      {/* <Hero />
      <Features />
      <Blogs />
      <FAQ />
      <Footer /> */}
      <Routes>
        <Route exact path="/list" element={<IssuePage />} />
      </Routes>
    </>
  );
}

export default App;
