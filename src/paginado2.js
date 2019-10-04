import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import axios from 'axios';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [rows,setRows] = React.useState([]);
  const [count,setCount] = React.useState(0);

  React.useEffect(() => {
    getPaginatedTasks();
  },[]);

  const getPaginatedTasks = () => {
    axios.get('/ws/rest/tasks/paginated', 
    { params: { PageSize: rowsPerPage, page: page +1 }})
    .then(res => {
    setRows(res.data.tasks);
    setCount(res.data.count);
    })
    .catch(err => {
    console.log(err);
    });    
  }

  const handleChangePage = (event, newPage) => {
    axios.get('/ws/rest/tasks/paginated', 
    { params: { PageSize: rowsPerPage, page: page+1 }})
    .then(res => {
    setRows(res.data.tasks);
    })
    .catch(err => {
    console.log(err);
    });   
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    axios.get('/ws/rest/tasks/paginated', 
    { params: { PageSize: rowsPerPage}})
    .then(res => {
    setRows(res.data.tasks);
    })
    .catch(err => {
    console.log(err);
    });   
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

