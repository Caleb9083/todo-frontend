import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import UpdateTaskDialog from "../UpdateTaskDialog/UpdateTaskDialog";

const TaskCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      container
      alignItems={"baseline"}
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      {open && (
        <UpdateTaskDialog
          category={props.category}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      {props.completed === true ? (
        <Box sx={{ textDecoration: "line-through" }}>{props.name}</Box>
      ) : (
        <Box>{props.name}</Box>
      )}

      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          <EditIcon /> Edit
        </Button>
        <Button variant="outlined" color="error" sx={{ ml: 2 }}>
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
