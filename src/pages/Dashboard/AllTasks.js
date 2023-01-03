import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// Generate Order Data
function createData(
  id,
  dateCreated,
  category,
  name,
  description,
  dueDate,
  important,
  completed
) {
  return {
    id,
    dateCreated,
    category,
    name,
    description,
    dueDate,
    important,
    completed,
  };
}

const rows = [
  createData(
    0,
    new Date().toDateString(),
    "Today",
    "Learn MySQL",
    "Learn some basics of MySQL",
    new Date().toDateString(),
    `${true}`,
    `${false}`
  ),
  createData(
    1,
    new Date().toDateString(),
    "Today",
    "Learn MySQL",
    "Learn some basics of MySQL",
    new Date().toDateString(),
    `${true}`,
    `${false}`
  ),
  createData(
    2,
    new Date().toDateString(),
    "Today",
    "Learn MySQL",
    "Learn some basics of MySQL",
    new Date().toDateString(),
    `${true}`,
    `${false}`
  ),
  createData(
    3,
    new Date().toDateString(),
    "Today",
    "Learn MySQL",
    "Learn some basics of MySQL",
    new Date().toDateString(),
    `${true}`,
    `${false}`
  ),
  createData(
    4,
    new Date().toDateString(),
    "Today",
    "Learn MySQL",
    "Learn some basics of MySQL",
    new Date().toDateString(),
    `${true}`,
    `${false}`
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function AllTasks() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        All Tasks
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Created</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Important</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.dateCreated}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.important}</TableCell>
              <TableCell>{row.completed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
