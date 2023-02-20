import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dasboard";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

function AppRoutes({ toast }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage toast={toast} />} />
      <Route path="/register" element={<RegisterPage toast={toast} />} />
      <Route path="/dashboard" element={<DashboardPage toast={toast} />} />
    </Routes>
  );
}

export default AppRoutes;
