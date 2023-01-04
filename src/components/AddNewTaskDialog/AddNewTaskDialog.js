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
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AddNewTaskDialog = ({ handleOpen, handleClose, category }) => {
  const [value, setValue] = React.useState(dayjs(Date.now()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Dialog open={handleOpen} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide information about your new task, the ones marked with * are
            required
          </DialogContentText>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: "1rem" }}
          >
            <Grid>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                id="name"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                id="name"
                label="Category"
                type="text"
                fullWidth
                variant="standard"
                value={category}
                disabled
              />
            </Grid>
            <Grid sx={{ mt: "1.7rem", mb: "1rem" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Due Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Important"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Completed"
              />
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewTaskDialog;
