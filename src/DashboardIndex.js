import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardCompleted from "./pages/Dashboard/DashboardCompleted";
import DashboardImportant from "./pages/Dashboard/DashboardImportant";
import DashboardMyDay from "./pages/Dashboard/DashboardMyDay";
import DashboardOther from "./pages/Dashboard/DashboardOther";
import DashboardPlanned from "./pages/Dashboard/DashboardPlanned";
import DashboardWrapper from "./pages/Dashboard/DashboardWrapper";

const DashboardIndex = () => {
  const userCategories = ["Current month", "Last quarter", "Last year"];

  let arr = [];
  for (let i = 0; i < userCategories.length; i++) {
    const userCategoryRoute = (
      <Route
        path={`/dashboard/${userCategories[i].replace(" ", "-").toLowerCase()}`}
        element={
          <DashboardWrapper>
            <h1>{`${userCategories[i]}`}</h1>
          </DashboardWrapper>
        }
      />
    );
    arr.push(userCategoryRoute);
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/my-day" element={<DashboardMyDay />} />
      <Route path="/dashboard/important" element={<DashboardImportant />} />
      <Route path="/dashboard/planned" element={<DashboardPlanned />} />
      <Route path="/dashboard/completed" element={<DashboardCompleted />} />
      <Route path="/dashboard/other" element={<DashboardOther />} />

      {arr.map((el) => {
        return el;
      })}
    </Routes>
  );
};

export default DashboardIndex;
