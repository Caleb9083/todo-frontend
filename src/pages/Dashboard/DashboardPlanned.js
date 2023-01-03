import React from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";

const DashboardPlanned = () => {
  return (
    <DashboardWrapper>
      <DashboardCategory
        category="Planned"
        categoryDescription="Tasks With A Scheduled Date"
        todos={[
          { name: "Learn JavaScript" },
          { name: "Learn FullStack", completed: true, important: true },
        ]}
      />
    </DashboardWrapper>
  );
};

export default DashboardPlanned;
