import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardWrapper from "./pages/Dashboard/DashboardWrapper";
import DashboardCategory from "./components/DashboardCategory/DashboardCategory";

const DashboardIndex = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/dashboard/:category"
        element={
          <DashboardWrapper>
            <DashboardCategory />
          </DashboardWrapper>
        }
      />
    </Routes>
  );
};

export default DashboardIndex;
