import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardCompleted from "./pages/Dashboard/DashboardCompleted";
import DashboardImportant from "./pages/Dashboard/DashboardImportant";
import DashboardMyDay from "./pages/Dashboard/DashboardMyDay";
import DashboardOther from "./pages/Dashboard/DashboardOther";
import DashboardPlanned from "./pages/Dashboard/DashboardPlanned";
import DashboardWrapper from "./pages/Dashboard/DashboardWrapper";
import DashboardCategory from "./components/DashboardCategory/DashboardCategory";

const DashboardIndex = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/my-day" element={<DashboardMyDay />} />
      <Route path="/dashboard/important" element={<DashboardImportant />} />
      <Route path="/dashboard/planned" element={<DashboardPlanned />} />
      <Route path="/dashboard/completed" element={<DashboardCompleted />} />
      <Route path="/dashboard/other" element={<DashboardOther />} />
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
