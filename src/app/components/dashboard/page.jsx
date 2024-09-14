"use client"
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box,TextField, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import ResponsiveDrawer from '../ResponsiveDrawer'
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import EditNoteIcon from '@mui/icons-material/EditNote';
import myContext from '@/app/myContext';
import StackedAreas from '../StackedAreas'
import Txt from '../txt'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BasicStack from './../BasicStack' 
import SellIcon from '@mui/icons-material/Sell';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1a2035',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  transition: '0.3s ease',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1a2035',
  }),
  '&:hover': {
    backgroundColor: '#2b3558', // Change background color on hover
    color: 'white', // Optional: Change text color on hover
    transform: 'scale(1.1)',
  },
}));

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}



export default function Dashboard() {
  return (
    <ResponsiveDrawer>
       <h1> <DashboardIcon/>
        Dashboard</h1>
     <ResponsiveStack />
     <Box sx={{ mt: 4, mb: 4 }}>
     <StackedAreas />
     </Box>
      <Box sx={{ mt: 4 }}> {/* Add margin-top for spacing */}
        <CollapsibleTable />
      </Box>
      <BasicStack /> 
    </ResponsiveDrawer>
  );
}

function ResponsiveStack() {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stack
          direction={{  xs: 'column', sm: 'column', md: 'column', lg: 'row' }} // Column for xs, row for sm and above
          spacing={{ xs: 1, sm: 2, md: 4 }} // Adjust spacing based on screen size
        >
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', sm: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBoxIcon sx={{ fontSize: 40 }} />
              <Box sx={{ ml: 1, textAlign: 'center' ,}}>
                <Typography variant="h6">Users</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>4500</Typography>
              </Box>
            </Box>
          </Item>

          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', sm: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HowToRegIcon sx={{ fontSize: 40 }} />
              <Box sx={{ ml: 1, textAlign: 'left' }}>
                <Typography variant="h6">Subscribers</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>3000</Typography>
              </Box>
            </Box>
          </Item>

          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', sm: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SellIcon sx={{ fontSize: 40 }} />
              <Box sx={{ ml: 1, textAlign: 'left' }}>
                <Typography variant="h6">Sales</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2000</Typography>
              </Box>
            </Box>
          </Item>

          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', sm: '100%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
              <Box sx={{ ml: 1, textAlign: 'left' }}>
                <Typography variant="h6">Orders</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2002</Typography>
              </Box>
            </Box>
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
function CollapsibleTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://66b9e0c8fa763ff550f9f4a9.mockapi.io/users');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Fetch data only once when the component mounts
  
  const handleChange = (event, value) => {
    setPage(value); // Update the current page
  };

  // Calculate the start and end index for slicing the data
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage); // Slice the data for the current page

  return (
    <>
      <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
        <Table aria-label="collapsible table" sx={{ tableLayout: 'auto', width: '100%' ,overflowX: 'auto'}}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((val) => (
              <myContext.Provider value={val} key={'post' + val.id}>
                <Row val={val} />
              </myContext.Provider>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(data.length / rowsPerPage)} // Calculate total pages
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            sx={{ color: 'black' }} 
          />
        )}
      />
    </>
  );
}



function Row({ val }) {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState({ ...val }); // Initialize with current data

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    fetch('https://66b9e0c8fa763ff550f9f4a9.mockapi.io/users/' + val.id, {
      method: 'PUT', // Update existing user
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(() => {
        alert('Updated successfully!');
        setIsEditing(false); // Close the edit mode
      })
      .catch((error) => {
        alert('Update failed: ' + error.message);
      });
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {isEditing ? (
            <Box>
              <TextField
                label="First Name"
                value={newData.fname}
                onChange={(e) => setNewData({ ...newData, fname: e.target.value })}
              />
              <TextField
                label="Last Name"
                value={newData.lname}
                onChange={(e) => setNewData({ ...newData, lname: e.target.value })}
              />
              <TextField
                label="Status"
                value={newData.status}
                onChange={(e) => setNewData({ ...newData, status: e.target.value })}
              />
              <TextField
                label="Email"
                value={newData.email}
                onChange={(e) => setNewData({ ...newData, email: e.target.value })}
              />
              <TextField
                label="city"
                value={newData.city}
                onChange={(e) => setNewData({ ...newData, city: e.target.value })}
              />
              <TextField
                label="street"
                value={newData.street}
                onChange={(e) => setNewData({ ...newData, street: e.target.value })}
              />
              <TextField
                label="Mobile"
                value={newData.mobile}
                onChange={(e) => setNewData({ ...newData, mobile: e.target.value })}
              />
              <IconButton onClick={handleSave}>
                <EditNoteIcon />
              </IconButton>
            </Box>
          ) : (
            <Txt />
          )}
        </TableCell>
        <TableCell align="center"> {/* Empty Status Column */}
          {/* You can add status text here if needed */}
          {val.status}
        </TableCell>
        <TableCell align="left">{val.email}</TableCell>
        <TableCell align="left">{val.city},{val.street}</TableCell>
        <TableCell align="left">{val.mobile}</TableCell>
        <TableCell align="center">
          {val.id === 0 ? null : ( // Do not render edit icon for ID 1
            <IconButton onClick={handleEditClick}>
              <EditNoteIcon />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Detail:
              </Typography>
              <Typography variant="body2">User: {val.user}</Typography>
              <Typography variant="body2">Password: {val.pass}</Typography>
              <Typography variant="body2">Age: {val.age}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
