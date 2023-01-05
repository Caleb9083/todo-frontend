import React, { useState, useEffect } from "react";
import DashboardCategory from "../../components/DashboardCategory/DashboardCategory";
import DashboardWrapper from "./DashboardWrapper";
import { BASE_URL } from "../../config";
import axios from "axios";

const DashboardMyDay = () => {
  const todayTodosUrl = `${BASE_URL}/api/v1/todos/todosByCategory/Today`;
  const [todayTodos, setTodayTodos] = useState([]);

  useEffect(() => {
    axios
      .get(todayTodosUrl, {
        headers: {
          ContentType: "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setTodayTodos(res.data.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <DashboardWrapper>
      <DashboardCategory
        category="Today"
        categoryDescription="Tasks for today"
        todos={todayTodos}
      />
    </DashboardWrapper>
  );
};

export default DashboardMyDay;
