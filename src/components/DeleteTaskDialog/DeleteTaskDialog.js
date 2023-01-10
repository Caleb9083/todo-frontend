import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { todos as todoService } from "../../services/todos";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteTaskDialog = ({ handleOpen, handleClose, taskId }) => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = React.useState({
    name: "",
    description: "",
  });

  React.useEffect(() => {
    todoService
      .getTodo(taskId)
      .then((res) => {
        setTaskData(res.data.data.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const handleSubmit = () => {
    todoService
      .deleteTodo(taskId)
      .then((res) => {
        console.log("Task deleted");
      })
      .catch((err) => {
        console.log(err.response);
      });
    navigate(0);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={handleOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the task with the details below?
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {`${taskData.name}: ${taskData.description}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteTaskDialog;
