import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { todos as todoService } from "../../services/todos";

const ViewTaskDialog = ({ handleOpen, handleClose, taskId }) => {
  const [taskData, setTaskData] = React.useState({
    name: "",
    description: "",
    category: "",
    dueDate: null,
    important: false,
    completed: false,
  });

  React.useEffect(() => {
    todoService
      .getTodo(taskId)
      .then((res) => {
        setTaskData(res.data.data.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div>
      <Dialog open={handleOpen} onClose={handleClose}>
        <DialogTitle>View Task Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can view all the various details about your selected task here
          </DialogContentText>
          <Box component="form" noValidate sx={{ mt: "1rem" }}>
            <Grid>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                variant="standard"
                value={taskData.name}
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                value={taskData.description}
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                id="category"
                label="Category"
                type="text"
                fullWidth
                variant="standard"
                value={taskData.category}
              />
            </Grid>
            <Grid sx={{ mt: "1.7rem", mb: "1rem" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Due Date"
                  inputFormat="MM/DD/YYYY"
                  value={taskData.dueDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox checked={taskData.important} color="primary" />
                }
                label="Important"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled
                    checked={taskData.completed}
                    color="primary"
                  />
                }
                label="Completed"
              />
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewTaskDialog;
