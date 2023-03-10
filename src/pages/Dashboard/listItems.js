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
import ListAltIcon from "@mui/icons-material/ListAlt";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href="/dashboard/my-day">
      <ListItemIcon>
        <LightModeIcon />
      </ListItemIcon>
      <ListItemText primary="My Day" />
    </ListItemButton>
    <ListItemButton href="/dashboard/important">
      <ListItemIcon>
        <StarBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Important" />
    </ListItemButton>
    <ListItemButton href="/dashboard/planned">
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <ListItemText primary="Planned" />
    </ListItemButton>
    <ListItemButton href="/dashboard/completed">
      <ListItemIcon>
        <TaskAltIcon />
      </ListItemIcon>
      <ListItemText primary="Completed" />
    </ListItemButton>
    <ListItemButton href="/dashboard/other">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Other" />
    </ListItemButton>
  </React.Fragment>
);

const myCategories = ["Current month", "Last quarter", "Last year"];

const MyCategory = (props) => {
  return (
    <ListItemButton
      href={`/dashboard/${props.categoryName}`.replace(" ", "-").toLowerCase()}
    >
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
