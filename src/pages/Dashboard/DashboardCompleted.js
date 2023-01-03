import React from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";

const DashboardCompleted = () => {
  return (
    <DashboardWrapper>
      <DashboardCategory
        category="Completed"
        categoryDescription="Tasks Which Are Completed"
        todos={[
          { name: "Learn React" },
          { name: "Learn Material UI", completed: true, important: true },
        ]}
      />
    </DashboardWrapper>
  );
};

export default DashboardCompleted;
