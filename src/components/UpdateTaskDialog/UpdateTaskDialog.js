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
// import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const UpdateTaskDialog = ({ handleOpen, handleClose, taskId, userId }) => {
  const [dateValue, setDateValue] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setDateValue(new Date(newValue));
  };

  const [taskData, setTaskData] = React.useState({
    user: userId,
    todo: taskId,
    name: "",
    description: "",
    category: "",
  });

  const handleInfoChange = (e) => {
    const task = { ...taskData };
    task[e.target.id] = e.target.value;
    setTaskData({ ...task });
  };

  const [important, setImportant] = React.useState(false);
  const handleImportant = () => {
    setImportant(!important);
  };

  const [completed, setCompleted] = React.useState(false);
  const handleCompleted = () => {
    setCompleted(!completed);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    const finalTask = { ...taskData, dueDate: dateValue, important, completed };
    console.log(finalTask);
    handleClose();
  };

  return (
    <div>
      <Dialog open={handleOpen} onClose={handleClose}>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide information about your new task, the ones marked with * are
            required
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
                onChange={(e) => handleInfoChange(e)}
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
                onChange={(e) => handleInfoChange(e)}
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
                onChange={(e) => handleInfoChange(e)}
              />
            </Grid>
            <Grid sx={{ mt: "1.7rem", mb: "1rem" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Due Date"
                  inputFormat="MM/DD/YYYY"
                  value={dateValue}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    id="important"
                    onChange={handleImportant}
                    value={important}
                    color="primary"
                  />
                }
                label="Important"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCompleted}
                    value={completed}
                    color="primary"
                  />
                }
                label="Completed"
              />
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateTaskDialog;
