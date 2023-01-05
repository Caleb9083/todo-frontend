import { useParams } from "react-router-dom";
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
import { todos as todoService } from "../../services/todos";

const DashboardCategory = () => {
  const [open, setOpen] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  let { category } = useParams();

  const formatCategory = (category) => {
    const s = category.split("-").join(" ");
    const capitalized = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
    return capitalized;
  };

  category = formatCategory(category);

  let categoryDescription;
  switch (category) {
    case "Today":
      categoryDescription = "Tasks for Today";
      break;
    case "Important":
      categoryDescription = "Tasks Ranked As Important";
      break;
    case "Planned":
      categoryDescription = "Tasks With A Scheduled Date";
      break;
    case "Completed":
      categoryDescription = "Tasks Which Are Completed";
      break;
    case "Other":
      categoryDescription = "Unclassified Task";
      break;
    default:
      categoryDescription = "Special Tasks";
      break;
  }

  React.useEffect(() => {
    todoService
      .getTodosByCategory(category)
      .then((res) => {
        const todos = res.data.data.data;
        console.log(todos);
        setTodos(todos);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

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
          category={category}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      <Toolbar>{category}</Toolbar>
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
                <Box sx={{ fontSize: "2rem" }}>{categoryDescription}</Box>
                <Box>
                  <Button variant="contained" onClick={handleOpen}>
                    <AddIcon />
                    Add new Task
                  </Button>
                </Box>
              </Grid>
              <Grid container>
                <Box sx={{ width: "100%" }}>
                  {todos &&
                    todos.map((el) => {
                      return (
                        <TaskCard
                          key={el._id}
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
