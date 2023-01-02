import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Calender from "./Calender";
import CategoriesCard from "./CategoriesCard";
import AllTasks from "./AllTasks";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Caleb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DashboardMain = () => {
  const categoriesArr = [
    { image: "/?2", title: "Today", description: "Task for today", count: "3" },
    {
      image: "/?2",
      title: "Important",
      description: "Task Starred",
      count: "3",
    },
    {
      image: "/?2",
      title: "Planned",
      description: "Tasks with deadlines",
      count: "3",
    },
    {
      image: "/?2",
      title: "Completed",
      description: "Task that are completed",
      count: "3",
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
              {categoriesArr.map((el) => {
                return (
                  <CategoriesCard
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
