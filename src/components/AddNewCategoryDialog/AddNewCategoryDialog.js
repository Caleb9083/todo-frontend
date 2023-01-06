import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AddNewCategoryDialog = ({ handleOpen, handleClose, userId }) => {
  const [dateValue, setDateValue] = React.useState(new Date());

  const [categoryData, setCategoryData] = React.useState({
    user: userId,
    category: "",
    categoryDescription: "",
  });

  const handleInfoChange = (e) => {
    const category = { ...categoryData };
    category[e.target.id] = e.target.value;
    setCategoryData({ ...category });
  };

  const handleSubmit = () => {
    const finalCategory = { ...categoryData };
    console.log(finalCategory);
    handleClose();
  };

  return (
    <div>
      <Dialog open={handleOpen} onClose={handleClose}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide information about your new category, the ones marked with.
            All fields are required
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
                id="category"
                label="Category Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => handleInfoChange(e)}
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                id="categoryDescription"
                label="Description of Category"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => handleInfoChange(e)}
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

export default AddNewCategoryDialog;
