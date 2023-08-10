import { Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import "./search.css";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/list" element={<IssuePage />} />
        <Route exact path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
