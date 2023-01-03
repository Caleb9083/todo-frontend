import React from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";

const DashboardOther = () => {
  return (
    <DashboardWrapper>
      <DashboardCategory
        category="Other"
        categoryDescription="Unclassified Task"
        todos={[
          { name: "Learn Backend" },
          { name: "Learn SQL", completed: true, important: true },
        ]}
      />
    </DashboardWrapper>
  );
};

export default DashboardOther;
