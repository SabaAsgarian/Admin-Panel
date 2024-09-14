"use client"
import React from 'react';
import myContext from '../myContext';
import { useContext } from 'react';




import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledImage = styled('img')({
  width: '40px',
  height: '40px',
  borderRadius: '50%', // Makes the image circular
});

export default function Txt() {
  const data = useContext(myContext);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography>{data.id} -  </Typography>
      <StyledImage sx={{ ml: 1.5 }} src= {data.img} alt="" />
      <Box sx={{ ml: 2 }}> {/* Margin left for spacing */}
        <Typography variant="body1">{data.fname} {data.lname}</Typography>
       
      </Box>
    </Box>
  );
}