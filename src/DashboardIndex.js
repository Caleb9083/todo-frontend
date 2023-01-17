import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardWrapper from "./pages/Dashboard/DashboardWrapper";
import DashboardCategory from "./components/DashboardCategory/DashboardCategory";

const DashboardIndex = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          sessionStorage.getItem("token") ? (
            <Dashboard />
          ) : (
            <Navigate to={"/sign-in"} />
          )
        }
      />

      <Route
        path="/dashboard/:category"
        element={
          sessionStorage.getItem("token") ? (
            <DashboardWrapper>
              <DashboardCategory />
            </DashboardWrapper>
          ) : (
            <Navigate to={"/sign-in"} />
          )
        }
      />
    </Routes>
  );
};

export default DashboardIndex;
