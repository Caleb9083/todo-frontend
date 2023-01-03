import React from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";

const DashboardMyDay = () => {
  return (
    <DashboardWrapper>
      <DashboardCategory
        category="My Day"
        categoryDescription="Tasks for today"
        todos={[
          { name: "Learn Python" },
          { name: "Learn Django", completed: true, important: true },
        ]}
      />
    </DashboardWrapper>
  );
};

export default DashboardMyDay;
