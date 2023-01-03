import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const TaskCard = (props) => {
  return (
    <Grid
      container
      alignItems={"baseline"}
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      {props.completed === true ? (
        <Box sx={{ textDecoration: "line-through" }}>{props.name}</Box>
      ) : (
        <Box>{props.name}</Box>
      )}

      <Box>
        <Button variant="outlined">
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
