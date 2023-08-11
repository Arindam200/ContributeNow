import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import "./search.css";
import AuthPage from "./pages/AuthPage";

function App() {
  const theme = "dark";

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/list" element={<IssuePage />} />
          <Route exact path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
