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
import { category as categoryService } from "../../services/catergories";
import { useNavigate } from "react-router-dom";

const UpdateCategoryDialog = ({ handleOpen, handleClose, categoryId }) => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = React.useState({
    category: "",
    categoryDescription: "",
  });

  const handleInfoChange = (e) => {
    const category = { ...categoryData };
    category[e.target.id] = e.target.value;
    setCategoryData({ ...category });
  };

  const handleSubmit = () => {
    const finalCategory = {
      category: categoryData.category,
      categoryDescription: categoryData.categoryDescription,
    };
    categoryService
      .updateCategory(categoryId, finalCategory)
      .then((res) => {
        navigate(
          `/dashboard/${res.data.data.data.category}`
            .replace(" ", "-")
            .toLowerCase()
        );
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  React.useEffect(() => {
    categoryService
      .getCategory(categoryId)
      .then((res) => {
        setCategoryData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Dialog open={handleOpen} onClose={handleClose}>
        <DialogTitle>Update Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use the fields provided to update the details of your category
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
                value={categoryData.category}
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
                value={categoryData.categoryDescription}
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

export default UpdateCategoryDialog;
