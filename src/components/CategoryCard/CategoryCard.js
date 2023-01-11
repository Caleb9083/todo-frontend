import * as React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import UpdateCategoryDialog from "../UpdateCategoryDialog/UpdateCategoryDialog";
import DeleteCategoryDialog from "../DeleteCategoryDialog/DeleteCategoryDialog";
import { category as categoryService } from "../../services/catergories";
import { formatCategory } from "../../utils/utils";

const CategoryCard = () => {
  const [openUpdateCategoryDialog, setOpenUpdateCategoryDialog] =
    React.useState(false);
  const [openDeleteCategoryDialog, setOpenDeleteCategoryDialog] =
    React.useState(false);

  // Update Category Dialog
  const handleOpenUpdateCategory = () => {
    setOpenUpdateCategoryDialog(true);
  };

  const handleCloseUpdateCategory = () => {
    setOpenUpdateCategoryDialog(false);
  };

  // Delete Category Dialog
  const handleOpenDeleteCategory = () => {
    setOpenDeleteCategoryDialog(true);
  };

  const handleCloseDeleteCategory = () => {
    setOpenDeleteCategoryDialog(false);
  };
  let { category } = useParams();
  const [userCategory, setUserCategory] = React.useState({
    category: "",
    categoryDescription: "",
    none: "",
  });

  React.useEffect(() => {
    category = formatCategory(category);
    let userCategoriesArr = [];
    categoryService
      .getCategories()
      .then((res) => {
        userCategoriesArr = res.data.data.data;
        userCategoriesArr.forEach((el) => {
          if (el.category === category) {
            setUserCategory({
              category: el.category,
              categoryDescription: el.categoryDescription,
            });
          } else {
            switch (category) {
              case "Today":
                setUserCategory({
                  category: "Today",
                  categoryDescription: "Tasks for Today",
                  none: "none",
                });
                break;
              case "Important":
                setUserCategory({
                  category: "Important",
                  categoryDescription: "Tasks Ranked As Important",
                  none: "none",
                });
                break;
              case "Planned":
                setUserCategory({
                  category: "Planned",
                  categoryDescription: "Tasks With A Scheduled Date",
                  none: "none",
                });
                break;
              case "Completed":
                setUserCategory({
                  category: "Completed",
                  categoryDescription: "Tasks Which Are Completed",
                  none: "none",
                });
                break;
              case "Other":
                setUserCategory({
                  category: "Other",
                  categoryDescription: "Unclassified Task",
                  none: "none",
                });
                break;
            }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ display: "flex", fontSize: "2rem" }}>
      {userCategory.categoryDescription}
      <Box sx={{ display: `${userCategory.none}` }}>
        <Tooltip title="Edit Category">
          <IconButton
            size="small"
            color="primary"
            onClick={handleOpenUpdateCategory}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Category">
          <IconButton
            size="small"
            color="error"
            onClick={handleOpenDeleteCategory}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {openUpdateCategoryDialog && (
        <UpdateCategoryDialog
          handleOpen={handleOpenUpdateCategory}
          handleClose={handleCloseUpdateCategory}
        />
      )}
      {openDeleteCategoryDialog && (
        <DeleteCategoryDialog
          handleOpen={handleOpenDeleteCategory}
          handleClose={handleCloseDeleteCategory}
        />
      )}
    </Box>
  );
};

export default CategoryCard;