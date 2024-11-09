"use client"
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import Link from 'next/link';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// Styled components
const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const WhiteTextField = styled(TextField)({
    backgroundColor: '#1d1e26',
    borderRadius: '4px',
    '& .MuiInputBase-input': {
        color: 'white', // Text color
    },
    '& .MuiInputLabel-root': {
        color: 'white', // Label color
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white', // Border color
        },
        '&:hover fieldset': {
            borderColor: 'white', // Hover border color
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white', // Focused border color
        },
    },
});

const StyledButton = styled(Button)({
    backgroundColor: '#a9dfd8',
    color: 'black',
    '&:hover': {
        backgroundColor: '#8fcfc8',
    },
});

export default function Signup() {
    const [showpass, setShowpass] = useState(true);
    const [showpass2, setShowpass2] = useState(true);
    const showic = useRef();
    const showic2 = useRef();

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            user: '',
            pass: '',
            repeat: ''
        },
        validationSchema: Yup.object({
            fname: Yup.string()
                .min(3, 'Must be 3 characters or More')
                .max(25, 'Must be 25 characters or less')
                .required(`What's your FirstName?`),
            lname: Yup.string()
                .min(3, 'Must be 3 characters or More')
                .max(25, 'Must be 25 characters or less')
                .required(`What's your Last Name?`),
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required(`What's your Email address?`),
            user: Yup.string()
                .min(3, 'Must be 3 characters or More')
                .matches(/[0-9]/, 'UserName must have a Number')
                .max(25, 'Must be 25 characters or less')
                .required(`What's your UserName?`),
            pass: Yup.string()
                .required(`Password is required!`)
                .min(8, 'Must be 8 characters long or More')
                .matches(/[0-9]/, 'Password must have a Number')
                .matches(/[A-Z]/, 'Password must have an uppercase char')
                .matches(/[a-z]/, 'Password must have a lowercase char')
                .matches(/[&#$@!*]/, 'Password must have a Symbol'),
            repeat: Yup.string()
                .required('Repeat The Password!')
                .oneOf([Yup.ref('pass'), null], 'Must match the password! '),
        }),
        onSubmit: values => {
            fetch('https://66b9e0c8fa763ff550f9f4a9.mockapi.io/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(task => {
                alert('Your registration was successful!!');
                window.location.href = '/';
            });
        },
    });

    const show = () => {
        if (showpass) {
            showic.current.children[0].style.display = 'flex';
            showic.current.children[1].style.display = 'none';
        } else {
            showic.current.children[0].style.display = 'none';
            showic.current.children[1].style.display = 'flex';
        }
        setShowpass(!showpass);
    };

    const myshow = () => {
        if (showpass2) {
            showic2.current.children[0].style.display = 'flex';
            showic2.current.children[1].style.display = 'none';
        } else {
            showic2.current.children[0].style.display = 'none';
            showic2.current.children[1].style.display = 'flex';
        }
        setShowpass2(!showpass2);
    };

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start'}}>
                <h1>Sign Up</h1>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
                <Box flexBasis="48%">
                    <label className='w-full' htmlFor="fname">First Name</label><br />
                    <WhiteTextField
                        id="fname"
                        name="fname"
                        type="text"
                        placeholder='Enter your First Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fname}
                        error={formik.touched.fname && Boolean(formik.errors.fname)}
                        helperText={formik.touched.fname && formik.errors.fname}
                    />
                </Box>
                <Box flexBasis="48%">
                    <label className='w-full' htmlFor="lname">Last Name</label><br />
                    <WhiteTextField
                        id="lname"
                        name="lname"
                        type="text"
                        placeholder='Enter your Last Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lname}
                        error={formik.touched.lname && Boolean(formik.errors.lname)}
                        helperText={formik.touched.lname && formik.errors.lname}
                    />
                </Box>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
                <Box flexBasis="48%">
                    <label className='w-full pt-[15px]' htmlFor="email">Email Address</label>
                    <WhiteTextField
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter Your Email'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box flexBasis="48%">
                    <label className='w-full pt-[15px]' htmlFor="user">User Name:</label><br />
                    <WhiteTextField
                        id="user"
                        name="user"
                        type="username"
                        placeholder='Enter Your UserName'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.user}
                        error={formik.touched.user && Boolean(formik.errors.user)}
                        helperText={formik.touched.user && formik.errors.user}
                    />
                </Box>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
                <Box flexBasis="48%">
                    <label className='w-full pt-[15px]' htmlFor="pass">Password</label>
                    <div className='w-full flex flex-wrap justify-between items-center'>
                        <WhiteTextField
                            id="pass"
                            name="pass"
                            type={showpass ? "password" : "text"}
                            placeholder='Enter Your Password'
                            autoComplete='off'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.pass}
                        />
                        <div onClick={show} ref={showic} className='w-[10%] relative flex justify-center cursor-pointer items-center'>
                            <span className='hidden justify-center items-center w-full'><VisibilityIcon /></span>
                            <span className='w-full flex justify-center items-center'><VisibilityOffIcon /></span>
                        </div>
                    </div>
                    {formik.touched.pass && formik.errors.pass ? (
                        <div className='w-full flex justify-start items-center'>
                            <p className='text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.pass}</p>
                        </div>
                    ) : null}
                </Box>
                <Box flexBasis="48%">
                    <label className='w-full pt-[15px]' htmlFor="repeat">Confirm Password</label>
                    <div className='w-full flex flex-wrap justify-between items-center'>
                        <WhiteTextField
                            id="repeat"
                            name="repeat"
                            type={showpass2 ? "password" : "text"}
                            placeholder='Repeat The Password'
                            autoComplete='off'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.repeat}
                        />
                        <div onClick={myshow} ref={showic2} className='w-[10%] relative flex justify-center cursor-pointer items-center'>
                            <span className='hidden justify-center items-center w-full'><VisibilityIcon /></span>
                            <span className='w-full flex justify-center items-center'><VisibilityOffIcon /></span>
                        </div>
                    </div>
                    {formik.touched.repeat && formik.errors.repeat ? (
                        <div className='w-full flex justify-start items-center'>
                            <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.repeat}</p>
                        </div>
                    ) : null}
                </Box>
            </Box>
            <StyledButton type="submit" variant="contained"  >
                Create Account
            </StyledButton>
            <Box sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                <h5>Already have an account?</h5>
                <TrendingFlatIcon/>
                <Link href='/'>
                <StyledButton >Sign In</StyledButton>
                </Link>
            </Box>
            
        </StyledForm>
    );
}
