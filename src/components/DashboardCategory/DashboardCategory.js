import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "../Copyright/Copyright";
import ClockComponent from "../Clock/Clock";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "../TaskCard/TaskCard";
import AddNewTaskDialog from "../AddNewTaskDialog/AddNewTaskDialog";

const DashboardCategory = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      {open && (
        <AddNewTaskDialog
          category={props.category}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      <Toolbar>{props.category}</Toolbar>
      <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                minHeight: "270px",
              }}
            >
              <Grid
                container
                alignItems={"baseline"}
                justifyContent="space-between"
              >
                <Box sx={{ fontSize: "2rem" }}>{props.categoryDescription}</Box>
                <Box>
                  <Button variant="contained" onClick={handleOpen}>
                    <AddIcon />
                    Add new Task
                  </Button>
                </Box>
              </Grid>
              <Grid container>
                <Box sx={{ width: "100%" }}>
                  {props.todos &&
                    props.todos.map((el) => {
                      return (
                        <TaskCard
                          name={el.name}
                          completed={el.completed}
                          important={el.important}
                        />
                      );
                    })}
                </Box>
              </Grid>
            </Paper>
          </Grid>
          {/* Time */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 350,
              }}
            >
              <ClockComponent />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
};

export default DashboardCategory;
