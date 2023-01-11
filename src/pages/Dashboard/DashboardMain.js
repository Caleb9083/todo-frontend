import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Calender from "./Calender";
import CategoriesCard from "./CategoriesCard";
import AllTasks from "./AllTasks";
import Copyright from "../../components/Copyright/Copyright";
import todayImg from "../../assets/today.jpg";
import importantImg from "../../assets/important.jpg";
import plannedImg from "../../assets/planned.jpg";
import completedImg from "../../assets/completed.jpg";
import otherImg from "../../assets/other.jpg";
import yourCategoriesImg from "../../assets/categories.jpg";
import { todos as todoService } from "../../services/todos";

const DashboardMain = () => {
  const [today, setToday] = React.useState(0);
  const [important, setImportant] = React.useState(0);
  const [planned, setPlanned] = React.useState(0);
  const [completed, setCompleted] = React.useState(0);
  const [other, setOther] = React.useState(0);

  React.useEffect(() => {
    todoService.getTodosByCategory("Today").then((res) => {
      setToday(res.data.data.data.length);
    });
    todoService.getTodosByCategory("Important").then((res) => {
      setImportant(res.data.data.data.length);
    });
    todoService.getTodosByCategory("Planned").then((res) => {
      setPlanned(res.data.data.data.length);
    });
    todoService.getTodosByCategory("Completed").then((res) => {
      setCompleted(res.data.data.data.length);
    });
    todoService.getTodosByCategory("Other").then((res) => {
      setOther(res.data.data.data.length);
    });
  }, []);

  const categoriesArr = [
    {
      image: todayImg,
      title: "Today",
      description: "Task for today",
      count: `${today}`,
    },
    {
      image: importantImg,
      title: "Important",
      description: "Task Starred",
      count: `${important}`,
    },
    {
      image: plannedImg,
      title: "Planned",
      description: "Tasks with deadlines",
      count: `${planned}`,
    },
    {
      image: completedImg,
      title: "Completed",
      description: "Task that are completed",
      count: `${completed}`,
    },
    {
      image: otherImg,
      title: "Other",
      description: "Unclassified Tasks",
      count: `${other}`,
    },
    {
      image: yourCategoriesImg,
      title: "Your Categories",
      description: "Find all your categories here",
      count: "Go to your catgories",
    },
  ];
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "auto",
        overflow: "none",
      }}
    >
      <Toolbar>Hi User</Toolbar>
      <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Categories */}
          <Grid item xs={12} md={6} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                height: "auto",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {categoriesArr.map((el, index) => {
                return (
                  <CategoriesCard
                    key={index}
                    image={el.image}
                    title={el.title}
                    description={el.description}
                    count={el.count}
                  />
                );
              })}
            </Paper>
          </Grid>
          {/* Calender */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 360,
              }}
            >
              <Calender />
            </Paper>
          </Grid>
          {/* All Tasks */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <AllTasks />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
};

export default DashboardMain;
