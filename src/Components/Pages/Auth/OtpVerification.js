import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

const OtpVerification = () => {

    const navigate = useNavigate();

    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    // OTP Password to be send to API
    const [pin, setPin] = useState('');

    const tempId = localStorage.getItem('tempId');

    const handleChange = (index, event) => {
        // Allow only numbers
        const newChar = event.target.value.replace(/[^0-9]/g, '');

        const newOtp = [...otp];
        newOtp[index] = newChar; // Update with allowed number

        setOtp(newOtp);

        // Move focus to the next field if current field is full
        if (newChar.length === 1) {
            const nextIndex = index + 1;
            if (nextIndex < otp.length) {
                const nextField = document.getElementById(`otp-${nextIndex}`);
                nextField.focus();
            } else {
                // Remove focus if last field is full
                event.target.blur();
                setPin(newOtp.join(''));
            }
        }
    };

    const verify_user = async () => {
        try {

            const res = await axios.post(
                "http://localhost:8000/verify-otp",
                {
                    userId: tempId,
                    otp: pin
                },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                }
            );

            console.log(res);

            if (res.status === 200) {
                console.log("HErER");
                alert("Login to continue");

                //   Delete the tempId
                localStorage.removeItem('tempId');

                navigate('/login');
            }

        } catch (e) {
            console.log("ERROR: SOMETING WENT WRONG");
        }
    }

    return (

        <Box>
            {/* For lg and xl */}
            <Grid container display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <Grid item md={6} height='100vh'>
                    <Box height='100%' sx={{ backgroundImage: "url('/images/auth/otp_image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Box marginLeft='7%' marginRight='7%' border='1px solid transparent'>
                            <Typography color='white' fontSize='32px' fontWeight='bold' marginTop='80%'>
                                "Embark on a Spiritual Journey: Sign Up for Exclusive Online Prasad and Puja Services!"
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='5%' marginTop='5%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                        </NavLink>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%'>
                        <Typography fontSize='40px'>Email Verification</Typography>
                        <Typography fontSize='14px'>Please enter the 6-digit verification code that was sent to your email</Typography>
                    </Box>
                    <Box marginLeft='15%' marginRight='15%' marginTop='5%'>
                        <Box display="flex" gap="5%" marginLeft="5%" marginRight="5%" marginBottom="5%">
                            {otp.map((digit, index) => (
                                <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <TextField
                                        id={`otp-${index}`} // Add unique IDs for accessibility and focus handling
                                        value={digit}
                                        onChange={(event) => handleChange(index, event)}
                                        inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                                        sx={{
                                            "& .MuiInputBase-root": { borderBottom: "none", borderRadius: "12px" },
                                        }}

                                    />
                                </Box>
                            ))}
                        </Box>

                        <Box>
                            <Box marginBottom='4%'>
                                <Button onClick={verify_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Verify</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='3%'>
                            <Typography>Didn't recieve an email?</Typography>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Resend</Typography>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* For xs and sm */}
            <Grid container display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid item md={12} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='7%' paddingTop='7%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                        </NavLink>

                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%' marginLeft='10%' marginRight='10%'>
                        <Typography fontSize='40px'>Email Verification</Typography>
                        <Typography fontSize='14px' textAlign='center'>
                            Please enter the 6-digit verification code that was sent to your email
                        </Typography>
                    </Box>
                    <Box marginLeft='5%' marginRight='5%' marginTop='5%'>
                        <Box>
                            <Box display="flex" gap="5%" marginLeft="5%" marginRight="5%" marginBottom="5%">
                                {otp.map((digit, index) => (
                                    <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <TextField
                                            id={`otp-${index}`} // Add unique IDs for accessibility and focus handling
                                            value={digit}
                                            onChange={(event) => handleChange(index, event)}
                                            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                                            sx={{
                                                "& .MuiInputBase-root": { borderBottom: "none", borderRadius: "12px" },
                                            }}

                                        />
                                    </Box>
                                ))}
                            </Box>
                            <Box marginBottom='7%'>
                                <Button onClick={verify_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Verify</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
                            <Typography>Didn't recieve an email?</Typography>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Resend</Typography>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* For md */}
            <Grid container display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                <Grid item md={12} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='7%' paddingTop='7%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                        </NavLink>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%' marginBottom='10%'>
                        <Typography fontSize='48px'>Email Verification</Typography>
                        <Typography fontSize='20px'>
                            Please enter the 6-digit verification code that was sent to your email
                        </Typography>
                    </Box>
                    <Box marginLeft='8%' marginRight='8%' marginTop='5%'>
                        <Box>
                            <Box display="flex" gap="5%" marginLeft="5%" marginRight="5%" marginBottom="5%">
                                {otp.map((digit, index) => (
                                    <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <TextField
                                            id={`otp-${index}`} // Add unique IDs for accessibility and focus handling
                                            value={digit}
                                            onChange={(event) => handleChange(index, event)}
                                            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                                            sx={{
                                                "& .MuiInputBase-root": { borderBottom: "none", borderRadius: "20px" },
                                            }}

                                        />
                                    </Box>
                                ))}
                            </Box>
                            <Box marginBottom='7%'>
                                <Button onClick={verify_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Verify</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
                            <Typography>Didn't recieve an email?</Typography>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Resend</Typography>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default OtpVerification
