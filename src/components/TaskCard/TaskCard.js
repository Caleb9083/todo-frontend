import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import UpdateTaskDialog from "../UpdateTaskDialog/UpdateTaskDialog";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog";
import ViewTaskDialog from "../ViewTaskDialog/ViewTaskDialog";

const TaskCard = (props) => {
  const [openView, setOpenView] = React.useState(false);

  const handleOpenView = () => {
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <Grid
      container
      alignItems={"baseline"}
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      {props.completed === true ? (
        <Box sx={{ textDecoration: "line-through" }}>
          <Button onClick={handleOpenView}>{props.name}</Button>
        </Box>
      ) : (
        <Box>
          <Button onClick={handleOpenView}>{props.name}</Button>
        </Box>
      )}

      <Box>
        <Button variant="outlined" onClick={handleOpenUpdate}>
          <EditIcon /> Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{ ml: 2 }}
          onClick={handleOpenDelete}
        >
          <DeleteIcon /> Delete
        </Button>
        <Button color="secondary" sx={{ ml: 1 }}>
          {props.important === true ? <StarIcon /> : <StarBorderIcon />}
        </Button>
      </Box>
      {openView && (
        <ViewTaskDialog
          taskId={props.taskId}
          handleOpen={handleOpenView}
          handleClose={handleCloseView}
        />
      )}
      {openUpdate && (
        <UpdateTaskDialog
          taskId={props.taskId}
          category={props.category}
          handleOpen={handleOpenUpdate}
          handleClose={handleCloseUpdate}
        />
      )}
      {openDelete && (
        <DeleteTaskDialog
          taskId={props.taskId}
          category={props.category}
          handleOpen={handleOpenDelete}
          handleClose={handleCloseDelete}
        />
      )}
    </Grid>
  );
};

export default TaskCard;
