import React from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";

const DashboardImportant = () => {
  return (
    <DashboardWrapper>
      <DashboardCategory
        category="Important"
        categoryDescription="Tasks Ranked As Important"
        todos={[
          { name: "Learn Frontend" },
          { name: "Learn Django", completed: true, important: true },
        ]}
      />
    </DashboardWrapper>
  );
};

export default DashboardImportant;
