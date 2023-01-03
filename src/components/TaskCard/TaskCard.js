import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskCard = (props) => {
  return (
    <Grid
      container
      alignItems={"baseline"}
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      <Box>{props.name}</Box>
      <Box>
        <Button variant="outlined">
          <EditIcon /> Edit
        </Button>
        <Button variant="outlined" color="error" sx={{ ml: 2 }}>
          <DeleteIcon /> Delete
        </Button>
      </Box>
    </Grid>
  );
};

export default TaskCard;
