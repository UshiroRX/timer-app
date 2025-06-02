import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
