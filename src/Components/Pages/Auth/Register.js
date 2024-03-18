import React, { useState } from 'react'
import { Box, Grid, TextField, Typography, IconButton, Button } from '@mui/material'
import './../../../Styles/Register.css'
import { NavLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();

  const register_user = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/register",
        {
          name: `${name}`,
          email: `${email}`,
          password: `${password}`,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      );

      if (res.status === 200) {
        console.log(res.data._id);

        // Temporary save the userId to check during otp verification
        const tempId = res.data._id;
        localStorage.setItem('tempId',tempId);
        
        navigate('/otp-verification');
      }

    } catch (e) {
      console.log("ERROR: SOMETING WENT WRONG");
    }
  }

  return (
    <Box>
      {/* For lg and xl */}
      <Grid container display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
        <Grid item md={6} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
          <Box height='100%' sx={{ backgroundImage: "url('/images/auth/register_image.png')", backgroundSize: 'cover', }}>
            <Box marginLeft='7%' marginRight='7%' border='1px solid transparent'>
              <Typography color='white' fontSize='32px' fontWeight='bold' marginTop='25%'>"Embark on a Spiritual Journey: Sign Up for Exclusive Online Prasad and Puja Services!"</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
          <Box display='flex' alignItems='center' marginLeft='5%' marginTop='1%'>
            <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography fontSize='40px'>Sign Up</Typography>
            <Typography fontSize='14px'>Enter your details below to create your account</Typography>
          </Box>
          <Box marginLeft='15%' marginRight='15%' marginTop='3%'>
            <Box>
              <TextField placeholder='Name' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={name} onChange={(event) => setName(event.target.value)}></TextField>
              <TextField placeholder='Email' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={email} onChange={(event) => setEmail(event.target.value)}></TextField>
              <TextField placeholder='Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
              <TextField placeholder='Confirm Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={confirm} onChange={(event) => setConfirm(event.target.value)}></TextField>
            </Box>
            <Box>
              <Box marginBottom='4%' marginTop='4%'>

                <Button onClick={register_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                  <Typography fontWeight='bold' color='white'>Sign Up</Typography>
                </Button>
              </Box>

              <Box marginBottom='4%' display='flex' alignItems='center'>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                <Typography>OR</Typography>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
              </Box>

              <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>
                <IconButton style={{ color: '#f24e1e', marginRight: '1%' }}>
                  <Google />
                </IconButton>
                <Typography color='black'>Sign Up with Google</Typography>
              </Button>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' marginTop='1%'>
              <Typography>Already have an account?</Typography>
              <IconButton>
                <NavLink to='/login' style={{ textDecoration: 'none' }}>
                  <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Log In</Typography>
                </NavLink>
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
            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' marginTop='3%' marginBottom='10%'>
            <Typography fontSize='40px'>Sign Up</Typography>
            <Typography fontSize='14px'>Enter your details below to create your account</Typography>
          </Box>
          <Box marginLeft='5%' marginRight='5%' marginTop='3%'>
            <Box>
              <TextField placeholder='Name' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={name} onChange={(event) => setName(event.target.value)}></TextField>
              <TextField placeholder='Email' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={email} onChange={(event) => setEmail(event.target.value)}></TextField>
              <TextField placeholder='Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
              <TextField placeholder='Confirm Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={confirm} onChange={(event) => setConfirm(event.target.value)}></TextField>
            </Box>
            <Box>
              <Box marginBottom='4%' marginTop='7%'>
                <Button onClick={register_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                  <Typography fontWeight='bold'>Sign Up</Typography>
                </Button>
              </Box>

              <Box marginBottom='4%' display='flex' alignItems='center'>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                <Typography>OR</Typography>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
              </Box>

              <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>
                <IconButton style={{ color: '#f24e1e', marginRight: '1%' }}>
                  <Google />
                </IconButton>
                <Typography color='black'>Sign Up with Google</Typography>
              </Button>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
              <Typography>Already have an account?</Typography>
              <NavLink to='/login'>
                <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Log In</Typography>
              </NavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* For md */}
      <Grid container display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
        <Grid item md={12} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
          <Box display='flex' alignItems='center' marginLeft='7%' paddingTop='7%'>
            <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%' marginBottom='10%'>
            <Typography fontSize='48px'>Sign Up</Typography>
            <Typography fontSize='20px'>Enter your details below to create your account</Typography>
          </Box>
          <Box marginLeft='7%' marginRight='7%' marginTop='3%'>
            <Box>
              <TextField placeholder='Name' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={name} onChange={(event) => setName(event.target.value)}></TextField>
              <TextField placeholder='Email' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={email} onChange={(event) => setEmail(event.target.value)}></TextField>
              <TextField placeholder='Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
              <TextField placeholder='Confirm Password' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={confirm} onChange={(event) => setConfirm(event.target.value)}></TextField>
            </Box>
            <Box>
              <Box marginBottom='4%' marginTop='7%'>
                <Button onClick={register_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                  <Typography fontWeight='bold'>Sign Up</Typography>
                </Button>
              </Box>

              <Box marginBottom='4%' display='flex' alignItems='center'>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                <Typography>OR</Typography>
                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
              </Box>

              <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>
                <IconButton style={{ color: '#f24e1e', marginRight: '1%' }}>
                  <Google />
                </IconButton>
                <Typography color='black'>Sign Up with Google</Typography>
              </Button>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
              <Typography>Already have an account?</Typography>
              <NavLink to='/login' style={{ textDecoration: 'none' }}>
                <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Log In</Typography>
              </NavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Register
