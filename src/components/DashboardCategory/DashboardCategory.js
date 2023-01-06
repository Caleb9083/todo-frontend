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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import UpdateCategoryDialog from "../UpdateCategoryDialog/UpdateCategoryDialog";
import DeleteCategoryDialog from "../DeleteCategoryDialog/DeleteCategoryDialog";

const DashboardCategory = () => {
  const [open, setOpen] = React.useState(false);
  const [openUpdateCategoryDialog, setOpenUpdateCategoryDialog] =
    React.useState(false);
  const [openDeleteCategoryDialog, setOpenDeleteCategoryDialog] =
    React.useState(false);

  const [todos, setTodos] = React.useState([]);

  let { category } = useParams();

  const formatCategory = (category) => {
    const s = category.split("-").join(" ");
    const capitalized = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
    return capitalized;
  };

  category = formatCategory(category);

  let categoryDescription;
  let none;
  switch (category) {
    case "Today":
      categoryDescription = "Tasks for Today";
      none = "none";
      break;
    case "Important":
      categoryDescription = "Tasks Ranked As Important";
      none = "none";
      break;
    case "Planned":
      categoryDescription = "Tasks With A Scheduled Date";
      none = "none";
      break;
    case "Completed":
      categoryDescription = "Tasks Which Are Completed";
      none = "none";
      break;
    case "Other":
      categoryDescription = "Unclassified Task";
      none = "none";
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

  // Add new Task Dialog
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Update Category Dialog
  const handleOpenUpdateCategory = () => {
    setOpenUpdateCategoryDialog(true);
  };

  const handleCloseUpdateCategory = () => {
    setOpenUpdateCategoryDialog(false);
  };

  // Delete Category Dialog
  const handleOpenDeleteCategory = () => {
    setOpenDeleteCategoryDialog(true);
  };

  const handleCloseDeleteCategory = () => {
    setOpenDeleteCategoryDialog(false);
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
      {openUpdateCategoryDialog && (
        <UpdateCategoryDialog
          handleOpen={handleOpenUpdateCategory}
          handleClose={handleCloseUpdateCategory}
        />
      )}
      {openDeleteCategoryDialog && (
        <DeleteCategoryDialog
          handleOpen={handleOpenDeleteCategory}
          handleClose={handleCloseDeleteCategory}
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
                <Box sx={{ display: "flex", fontSize: "2rem" }}>
                  {categoryDescription}
                  <Box sx={{ display: `${none}` }}>
                    <Tooltip title="Edit Category">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={handleOpenUpdateCategory}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Category">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={handleOpenDeleteCategory}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
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
                          taskId={el._id}
                          name={el.name}
                          description={el.description}
                          dueDate={el.dueDate}
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
