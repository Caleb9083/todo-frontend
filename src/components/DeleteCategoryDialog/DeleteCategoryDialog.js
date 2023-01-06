import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteCategoryDialog = ({
  handleOpen,
  handleClose,
  categoryId,
  userId,
}) => {
  const handleSubmit = () => {
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
        <DialogTitle>{"Delete Category"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this category and all the tasks in
            it?
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {"Task Name"}
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

export default DeleteCategoryDialog;
