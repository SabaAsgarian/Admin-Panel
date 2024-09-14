"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Alert, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';
import signupImg from './components/img/signup.png'
import Image from 'next/image';
import signinImg from './components/img/signin.png'
import Signin from './components/signin'


export default function Home() {
  const { register, handleSubmit } = useForm();
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
    router.push('../components/dashboard');
  };

  return (
    <Container maxWidth='xl' sx={{ backgroundColor: '#a9dfd8',  minHeight: '100vh',maxHeight:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container className='container' maxWidth="xl" sx={{ backgroundColor: '#21222d', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' ,boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',color:'white'}}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'transparent', color: 'white' }}>
      <Typography component="h1" variant="h5" sx={{ color: 'white', mb: 3 }}>

      </Typography>
     
   <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
    <Image src={signinImg} alt="signup" priority style={{width:'50%',height:'50%'}} />
    <Signin /> {/* Use the imported signup component */}
   </Box>
    </Box>
      </Container>
    </Container>
  );
}