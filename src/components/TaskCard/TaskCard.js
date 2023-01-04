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

const TaskCard = (props) => {
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
      {openUpdate && (
        <UpdateTaskDialog
          category={props.category}
          handleOpen={handleOpenUpdate}
          handleClose={handleCloseUpdate}
        />
      )}
      {openDelete && (
        <DeleteTaskDialog
          category={props.category}
          handleOpen={handleOpenDelete}
          handleClose={handleCloseDelete}
        />
      )}
      {props.completed === true ? (
        <Box sx={{ textDecoration: "line-through" }}>{props.name}</Box>
      ) : (
        <Box>{props.name}</Box>
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
    </Grid>
  );
};

export default TaskCard;
