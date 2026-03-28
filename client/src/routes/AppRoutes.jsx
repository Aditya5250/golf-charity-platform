import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charities from "../pages/Charities";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Scores from "../pages/Scores";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/scores" element={<ProtectedRoute><Scores /></ProtectedRoute>} />
        <Route path="/charities" element={<ProtectedRoute><Charities /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;