import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dasboard";
import LoginPage from "../pages/Login";
import ProtectedRoutes from "../pages/ProtectRoutes";
import RegisterPage from "../pages/Register";

function AppRoutes({ toast }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage toast={toast} />} />
      <Route path="/register" element={<RegisterPage toast={toast} />} />
      
      <Route path="/dashboard" element={<ProtectedRoutes/>}>
        <Route index element={<DashboardPage/>} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
