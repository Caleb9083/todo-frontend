import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardMyDay from "./pages/Dashboard/DashboardMyDay";

const DashboardIndex = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/my-day" element={<DashboardMyDay />} />
      <Route path="/dashboard/important" element="" />
      <Route path="/dashboard/planned" element="" />
      <Route path="/dashboard/completed" element="" />
    </Routes>
  );
};

export default DashboardIndex;
