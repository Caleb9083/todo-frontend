import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LightModeIcon from "@mui/icons-material/LightMode";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LightModeIcon />
      </ListItemIcon>
      <ListItemText primary="My Day" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StarBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Important" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <ListItemText primary="Planned" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TaskAltIcon />
      </ListItemIcon>
      <ListItemText primary="Completed" />
    </ListItemButton>
  </React.Fragment>
);

const myCategories = ["Current month", "Last quarter", "Last year"];

const MyCategory = (props) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={props.categoryName} />
    </ListItemButton>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      My Categories
    </ListSubheader>
    {myCategories.map((el) => {
      return <MyCategory categoryName={el} />;
    })}
  </React.Fragment>
);
