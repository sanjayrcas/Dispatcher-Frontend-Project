import * as React from 'react';
import './style/Table.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit'; 
import { InputAdornment, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'address', label: 'Address' },
  { id: 'city', label: 'City' },
  { id: 'state', label: 'State' },
  { id: 'edit', label: 'Edit', align: 'start' },
];

function createData(firstName, lastName, address, city, state) {
  return { firstName, lastName, address, city, state };
}

const rows = [
  createData('John', 'Doe', '123 Main St', 'New York', 'NY'),
  createData('Jane', 'Smith', '456 Elm St', 'Los Angeles', 'CA'),
  createData('Sam', 'Brown', '789 Oak St', 'Chicago', 'IL'),
  createData('Alice', 'Johnson', '101 Maple St', 'Houston', 'TX'),
  createData('Bob', 'Williams', '202 Pine St', 'Phoenix', 'AZ'),
  createData('John', 'Doe', '123 Main St', 'New York', 'NY'),
  createData('Jane', 'Smith', '456 Elm St', 'Los Angeles', 'CA'),
  createData('Sam', 'Brown', '789 Oak St', 'Chicago', 'IL'),
  createData('Sanjay', 'G', '101 Maple St', 'Houston', 'TX'),
  createData('Alice', 'Johnson', '101 Maple St', 'Houston', 'TX'),
  createData('Bob', 'Williams', '202 Pine St', 'Phoenix', 'AZ'),
  createData('John', 'Doe', '123 Main St', 'New York', 'NY'),
  createData('Sanjay', 'G', '101 Maple St', 'Houston', 'TX'),
  createData('Jane', 'Smith', '456 Elm St', 'Los Angeles', 'CA'),
  createData('Sam', 'Brown', '789 Oak St', 'Chicago', 'IL'),
  createData('Alice', 'Johnson', '101 Maple St', 'Houston', 'TX'),
  createData('Bob', 'Williams', '202 Pine St', 'Phoenix', 'AZ'),
  createData('John', 'Doe', '123 Main St', 'New York', 'NY'),
  createData('Jane', 'Smith', '456 Elm St', 'Los Angeles', 'CA'),
  createData('Sam', 'Brown', '789 Oak St', 'Chicago', 'IL'),
  createData('Alice', 'Johnson', '101 Maple St', 'Houston', 'TX'),
  createData('Sanjay', 'G', '101 Maple St', 'Houston', 'TX'),
  createData('Bob', 'Williams', '202 Pine St', 'Phoenix', 'AZ'),
];

export default function TableData({ funnelFilter, setFunnelFilter, rowHeight, searchQuery }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showSearch, setShowSearch] = React.useState(false);
  const [dropdownFilterQuery, setDropdownFilterQuery] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
  });

  const dropdownFilteredRows = rows.filter((row) => {
    return Object.keys(dropdownFilterQuery).every((key) =>
      dropdownFilterQuery[key] === '' || row[key].toLowerCase().includes(dropdownFilterQuery[key].toLowerCase())
    );
  });

  const filteredRows = rows.filter((row) =>
    row.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayRows = funnelFilter ? dropdownFilteredRows : filteredRows;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseDropdownFilter = (columnId) => {
    const updatedFilter = { ...dropdownFilterQuery, [columnId]: '' };
    setDropdownFilterQuery(updatedFilter);
    if (Object.values(updatedFilter).every((value) => value === '')) {
      setFunnelFilter(false);
    }
  };

  const hideColumn = (columnId) =>{

  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="table-cell-column"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                  {column.id && (
                    <div className="dropdown d-inline">
                      <button
                        className="table-list-top-options btn border-0 rounded-circle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ⁝
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">Clear Sort</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">Sort by {column.label} ascending</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">Sort by {column.label} descending</Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button className="dropdown-item">Clear Filter</button>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={() => setFunnelFilter(true)}>Filter by {column.label}</button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={hideColumn}>Hide {column.label} column</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Show all columns</button>
                        </li>
                      </ul>
                    </div>
                  )}
                  {(funnelFilter || dropdownFilterQuery[column.id]) && column.id && (
                    <div className="textfieldUnder-tableHeading-container">
                      <TextField
                        hiddenLabel
                        id={`filter-${column.id}`}
                        className="MuiInputBase-input"
                        placeholder={`Filter by ${column.label}`}
                        variant="filled"
                        size="small"
                        value={dropdownFilterQuery[column.id] || ''}
                        onChange={(e) =>
                          setDropdownFilterQuery((prev) => ({
                            ...prev,
                            [column.id]: e.target.value,
                          }))
                        }
                        autoFocus
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <CloseIcon
                                className="input-close-icon"
                                onClick={() => handleCloseDropdownFilter(column.id)}
                                style={{ cursor: 'pointer' }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {displayRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow
                className="table-body-row"
                hover
                role="checkbox"
                tabIndex={-1}
                key={`${row.firstName}-${row.lastName}-${index}`}
                sx={{ height: `${rowHeight}px` }}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      className="table-body-tablecell"
                      key={column.id}
                      align={column.align}
                      sx={{ padding: '5px 10px' }}
                    >
                      {column.id === 'edit' ? (
                        <Button variant="contained" color="primary" size="small" sx={{ minWidth: '10px', padding: '2px 5px' }}>
                          <EditIcon fontSize="small" />
                        </Button>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={displayRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
