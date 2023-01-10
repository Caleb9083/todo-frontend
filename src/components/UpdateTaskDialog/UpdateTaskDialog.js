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
import { todos as todoService } from "../../services/todos";
import { useNavigate } from "react-router-dom";

const UpdateTaskDialog = ({ handleOpen, handleClose, taskId }) => {
  const navigate = useNavigate();

  const [dateValue, setDateValue] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setDateValue(new Date(newValue));
  };

  const [taskData, setTaskData] = React.useState({
    todo: taskId,
    name: "",
    description: "",
    category: "",
  });

  React.useEffect(() => {
    todoService
      .getTodo(taskId)
      .then((res) => {
        setTaskData(res.data.data.data);
        setDateValue(res.data.data.data.dueDate);
        setImportant(res.data.data.data.important);
        setCompleted(res.data.data.data.completed);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

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
    const finalTask = { ...taskData, dueDate: dateValue, important, completed };
    console.log(finalTask);
    console.log();
    todoService
      .updateTodo(taskId, finalTask)
      .then((res) => {
        console.log("Task Updated");
        navigate(0);
      })
      .catch((err) => {
        console.log(err.response);
      });
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
                onChange={(e) => handleInfoChange(e)}
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
                onChange={(e) => handleInfoChange(e)}
                value={taskData.category}
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
                    checked={important}
                    color="primary"
                  />
                }
                label="Important"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCompleted}
                    checked={completed}
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
