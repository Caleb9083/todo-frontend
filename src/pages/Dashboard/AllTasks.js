import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { todos as todoService } from "../../services/todos";

// Generate Tasks Data
// const rows = [
//   createData(
//     0,
//     new Date().toDateString(),
//     "Today",
//     "Learn MySQL",
//     "Learn some basics of MySQL",
//     new Date().toDateString(),
//     `${true}`,
//     `${false}`
//   ),

// ];


export default function AllTasks() {
  const [seeAll, setSeeAll] = React.useState(false)
  
  function preventDefault(event) {
    event.preventDefault();
    setSeeAll(!seeAll)
  }
  
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    todoService
      .getTodos()
      .then((res) => {
        const todos = res.data.data.data;
        setRows(todos);
      })
      .catch((err) => console.log(err.response.data));
  }, []);
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
          {seeAll ? (
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{new Date(row.createdAt).toDateString()}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{new Date(row.dueDate).toDateString()}</TableCell>
                <TableCell>{`${row.important}`}</TableCell>
                <TableCell>{`${row.completed}`}</TableCell>
              </TableRow>
            ))
          ) : ( 
            rows.slice(0,5).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{new Date(row.createdAt).toDateString()}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{new Date(row.dueDate).toDateString()}</TableCell>
                <TableCell>{`${row.important}`}</TableCell>
                <TableCell>{`${row.completed}`}</TableCell>
              </TableRow>
            ))
          ) }
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {rows.length !== 0 && (seeAll?`See few tasks`: `See all tasks`) }
      </Link>
    </React.Fragment>
  );
}
