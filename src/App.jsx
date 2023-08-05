import { Routes, Route } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/SignupPage" element={<SignupPage />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/list" element={<IssuePage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
