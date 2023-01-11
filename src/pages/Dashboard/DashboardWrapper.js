import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, SecondaryListItems } from "./listItems";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton";
import AddNewCategoryDialog from "../../components/AddNewCategoryDialog/AddNewCategoryDialog";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardWrapper(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [openAddNewCategoryDialog, setOpenAddNewCategoryDialog] =
    React.useState(false);
  const handleOpen = () => {
    setOpenAddNewCategoryDialog(true);
  };

  const handleClose = () => {
    setOpenAddNewCategoryDialog(false);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems />
            <Box sx={{ ml: "0.5rem" }}>
              {open ? (
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleOpen}
                >
                  Add New Category
                </Button>
              ) : (
                <Tooltip onClick={handleOpen} title="Add new category">
                  <IconButton color="primary" aria-label="delete">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </List>
        </Drawer>
        {props.children}
        {openAddNewCategoryDialog && (
          <AddNewCategoryDialog
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default DashboardWrapper;
