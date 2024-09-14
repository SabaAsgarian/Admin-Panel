"use client"
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, FormControl, Input, InputLabel, InputAdornment, TextField, Grid } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ResponsiveDrawer from '../ResponsiveDrawer'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
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
import Txt from '../txt2'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Link from 'next/link';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1a2035',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1a2035',
  }),
}));

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
const WhiteTextField = styled(TextField)({
  backgroundColor: '#a9dfd8',
  borderRadius: '4px',
  '& .MuiInputBase-input': {
    color: 'black', // Text color
  },
  '& .MuiInputLabel-root': {
    color: 'black', // Label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black', // Border color
    },
    '&:hover fieldset': {
      borderColor: 'black', // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // Focused border color
    },
  },
});
const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: '#a9dfd8',
  borderRadius: '4px',
  '& .MuiInputBase-input': {
    color: 'black', // Text color
  },
  '& .MuiInputLabel-root': {
    color: 'black', // Label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black', // Border color
    },
    '&:hover fieldset': {
      borderColor: 'black', // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // Focused border color
    },
  },
}));
const StyledButton = styled(Button)({
  backgroundColor: '#a9dfd8',
  color: 'black',
  '&:hover': {
    backgroundColor: '#8fcfc8',
  },
});

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


export default function Page() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    avatar: '',
    title: '',
    brand: '',
    price: '',
    color: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { avatar, title, brand, price, color, description } = formData;
    if (!avatar || !title || !brand || !price || !color || !description) {
      alert("Please fill all the fields");
      return;
    }

    const url = 'https://66c9c31959f4350f064d5d7d.mockapi.io/enShop';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          alert('New product added!');
          setFormData({ avatar: '', title: '', brand: '', price: '', color: '', description: '' }); // Reset form
          setOpen(false); // Close accordion after submission
          // Optionally, you can call a function to refresh the data in CollapsibleTable
        } else {
          throw new Error('Failed to add product');
        }
      })
      .catch(error => {
        alert('New product not added: ' + error.message);
      });
  };

  return (
    <ResponsiveDrawer>
      <h1> <ShoppingBagIcon />
        Products</h1>
      <Box sx={{ mt: 4 }}>
        <CollapsibleTable />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 5, fontWeight: 'bolder' }}>
        ADD New Product
        <ControlPointIcon
          sx={{ cursor: 'pointer', fontSize: '50px' }}
          onClick={() => setOpen(!open)} // Toggle accordion
        />
      </Box>
      <Accordion expanded={open}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Add Product Details</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="avatar"
                name="avatar"
                label="Image"
                value={formData.avatar}
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="title"
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="brand"
                name="brand"
                label="Brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="price"
                name="price"
                label="Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="color"
                name="color"
                label="Color"
                value={formData.color}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={6} xl={6}>
              <WhiteTextField
                id="description"
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <StyledButton sx={{mt:'5%'}} variant="contained" onClick={handleSubmit}>Submit</StyledButton>
        </AccordionDetails>
      </Accordion>
    </ResponsiveDrawer>
  );
}


function CollapsibleTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://66c9c31959f4350f064d5d7d.mockapi.io/enShop');
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
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>

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

  const handleDelete = () => {
    myDel(val.id); // Call the delete function with the user ID
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    fetch(`https://66c9c31959f4350f064d5d7d.mockapi.io/enShop/${val.id}`, {
      method: 'PUT', // Update existing product
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
              <WhiteTextField
                label="image"
                value={newData.avatar}
                onChange={(e) => setNewData({ ...newData, image: e.target.value })}
              />
              <WhiteTextField
                label="title"
                value={newData.title}
                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
              />
              <WhiteTextField
                label="brand"
                value={newData.brand}
                onChange={(e) => setNewData({ ...newData, brand: e.target.value })}
              />
              <WhiteTextField
                label="price"
                value={newData.price}
                onChange={(e) => setNewData({ ...newData, price: e.target.value })}
              />
              <WhiteTextField
                label="color"
                value={newData.color}
                onChange={(e) => setNewData({ ...newData, color: e.target.value })}
              />
              <WhiteTextField
                label="description"
                value={newData.description}
                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
              />

              <IconButton onClick={handleSave}>
                <EditNoteIcon />
              </IconButton>
            </Box>
          ) : (
            <Txt />
          )}
        </TableCell>
        <TableCell align="left"> {/* Empty Status Column */}
          {/* You can add status text here if needed */}
          {val.price}
        </TableCell>
        <TableCell align="left">{val.color}</TableCell>

        <TableCell align="center">
          <IconButton onClick={handleEditClick}>
            <EditNoteIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={handleDelete}> {/* Add delete icon functionality */}
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Detail:
              </Typography>
              <Typography variant="body2">description: {val.description}</Typography>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function loadPage() {
  fetch('https://66c9c31959f4350f064d5d7d.mockapi.io/enShop')
    .then(res => res.json())
    .then(data => {
      setData(data); // Assuming you have a state variable called data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
function myDel(itemId) {
  if (window.confirm('Are you sure you want to delete it?')) {
    fetch(`https://66c9c31959f4350f064d5d7d.mockapi.io/enShop/${itemId}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to delete');
      })
      .then(() => {
        alert('Deleted...!');
        loadPage(); // Call a function to reload the data
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
  }
}

