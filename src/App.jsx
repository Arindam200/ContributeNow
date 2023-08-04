import { Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import LoadingBar from "react-top-loading-bar";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/list" element={<IssuePage />} />
      </Routes>
    </>
  );
}

export default App;
