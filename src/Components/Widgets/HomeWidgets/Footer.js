import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Twitter, Instagram, Facebook } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <Box bgcolor='#1e1e1e'>
            <Grid container paddingLeft='4%' paddingTop='2%' display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                <Grid item xs={3.3} marginRight='3.5%'>
                    <Box color='white' display='flex' flexDirection='column' alignItems='left'>
                        <Box display='flex' alignItems='center' marginBottom='3%'>
                            <Box sx={{ width: 58, height: 62 }} marginRight='2%' component="img" alt="Cart" src="/images/logo.png" />
                            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                        </Box>
                        <Typography fontWeight='100' fontSize='16px' marginBottom='7%'>Bhagwan Ka Prasad is a  religious e-commerce space, aiming to connect people with their faith by delivering Prasad to various temples across India. The platform offers a wide range of spiritual products, services, and travel experiences, fostering a deeper connection to spirituality.</Typography>
                        <Box display='flex' alignItems='center'>
                            <Typography fontWeight='bold' fontSize='20px'>Follow us</Typography>
                            <IconButton style={{ color: '#1da1f2', }}><Twitter /></IconButton>
                            <IconButton style={{ color: '#c33e86' }}><Instagram /></IconButton>
                            <IconButton style={{ color: '#1da1f2' }}><Facebook /></IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1.6}>
                    <Typography fontSize='20px' fontWeight='bold' color='white' marginBottom='5%'>Shop</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/shops/rudraksha' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='16px' fontWeight='100' color='white'>Rudraksha</Typography>
                        </NavLink>
                        <NavLink to='/shops/puja-samagri' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Puja Samagri</Typography>
                        </NavLink>
                        <NavLink to='/shops/yoga-store' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Yoga Store</Typography>
                        </NavLink>
                        <NavLink to='/shops/health-immunity' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Health & Immunity</Typography>
                        </NavLink>
                        <NavLink to='/shops/food-for-fast' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Food for Fast</Typography>
                        </NavLink>
                        <NavLink to='/shops/clothing' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Clothing</Typography>
                        </NavLink>
                        <NavLink to='/shops/body-care' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Body Care</Typography>
                        </NavLink>
                        <NavLink to='/shops/books' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Books</Typography>
                        </NavLink>
                        <NavLink to='/shops/spiritual-accessories' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Spiritual accessories</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={1.6}>
                    <Typography fontSize='20px' fontWeight='bold' color='white' marginBottom='5%'>Services</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/service/puja' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Puja</Typography>
                        </NavLink>
                        <NavLink to='/service/prasad' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Prasad</Typography>
                        </NavLink>
                        <NavLink to='/service/hawan' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Hawan</Typography>
                        </NavLink>
                        <NavLink to='/service/darshan' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Darshan</Typography>
                        </NavLink>
                        <NavLink to='/service/astrology' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Astrology</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={1.6}>
                    <Typography fontSize='20px' fontWeight='bold' color='white' marginBottom='5%'>Quick Links</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/about-us' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>About Us</Typography>
                        </NavLink>
                        <NavLink to='/return-refund' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Return & Refund</Typography>
                        </NavLink>
                        <NavLink to='/shipping-policy' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Shipping Policy</Typography>
                        </NavLink>
                        <NavLink to='/terms-condition' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Terms and Condition</Typography>
                        </NavLink>
                        <NavLink to='/privacy-policy' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Privacy & Policy</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={1.6}>
                    <Typography fontSize='20px' fontWeight='bold' color='white' marginBottom='5%'>Lifestyle</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/wellness/yoga' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Yoga</Typography>
                        </NavLink>
                        <NavLink to='/wellness/meditation' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Meditation</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={1.6}>
                    <Typography fontSize='20px' fontWeight='bold' color='white' marginBottom='5%'>Help</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start' justifyContent='start'>
                        <NavLink to='contact-us' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Contact Us</Typography>
                        </NavLink>
                        <NavLink to='/track-order' style={{ textDecoration: 'none', marginTop: '10%' }}>
                            <Typography fontSize='16px' color='white' fontWeight='100'>Track Order</Typography>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>

            <Grid container paddingLeft='4%' paddingTop='2%' display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid item xs={12} marginRight='3.5%'>
                    <Box color='white' display='flex' flexDirection='column' alignItems='left'>
                        <Box display='flex' alignItems='center' marginBottom='3%'>
                            <Box sx={{ width: 58, height: 62 }} marginRight='2%' component="img" alt="Cart" src="/images/logo.png" />
                            <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                        </Box>
                        <Typography fontWeight='100' fontSize='10px' marginBottom='5%'>Bhagwan Ka Prasad is a  religious e-commerce space, aiming to connect people with their faith by delivering Prasad to various temples across India. The platform offers a wide range of spiritual products, services, and travel experiences, fostering a deeper connection to spirituality.</Typography>
                        <Box display='flex' alignItems='center'>
                            <Typography fontWeight='bold' fontSize='12px'>Follow us</Typography>
                            <IconButton size='small' style={{ color: '#1da1f2' }}><Twitter /></IconButton>
                            <IconButton size='small' style={{ color: '#c33e86' }}><Instagram /></IconButton>
                            <IconButton size='small' style={{ color: '#1da1f2' }}><Facebook /></IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Typography fontSize='16px' fontWeight='bold' color='white' marginBottom='5%'>Shop</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/shops/rudraksha' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='10px' fontWeight='100' color='white'>Rudraksha</Typography>
                        </NavLink>
                        <NavLink to='/shops/puja-samagri' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Puja Samagri</Typography>
                        </NavLink>
                        <NavLink to='/shops/yoga-store' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Yoga Store</Typography>
                        </NavLink>
                        <NavLink to='/shops/health-immunity' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Health & Immunity</Typography>
                        </NavLink>
                        <NavLink to='/shops/food-for-fast' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Food for Fast</Typography>
                        </NavLink>
                        <NavLink to='/shops/clothing' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Clothing</Typography>
                        </NavLink>
                        <NavLink to='/shops/body-care' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Body Care</Typography>
                        </NavLink>
                        <NavLink to='/shops/books' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Books</Typography>
                        </NavLink>
                        <NavLink to='/shops/spiritual-accessories' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Spiritual accessories</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Typography fontSize='16px' fontWeight='bold' color='white' marginBottom='5%'>Services</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/service/puja' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Puja</Typography>
                        </NavLink>
                        <NavLink to='/service/prasad' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Prasad</Typography>
                        </NavLink>
                        <NavLink to='/service/hawan' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Hawan</Typography>
                        </NavLink>
                        <NavLink to='/service/darshan' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Darshan</Typography>
                        </NavLink>
                        <NavLink to='/service/astrology' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Astrology</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={5} marginTop='5%'>
                    <Typography fontSize='16px' fontWeight='bold' color='white' marginBottom='5%'>Quick Links</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/about-us' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>About Us</Typography>
                        </NavLink>
                        <NavLink to='/return-refund' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Return & Refund</Typography>
                        </NavLink>
                        <NavLink to='/shipping-policy' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Shipping Policy</Typography>
                        </NavLink>
                        <NavLink to='/terms-condition' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Terms and Condition</Typography>
                        </NavLink>
                        <NavLink to='/privacy-policy' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Privacy & Policy</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={5} marginTop='5%'>
                    <Typography fontSize='16px' fontWeight='bold' color='white' marginBottom='5%'>Lifestyle</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start'>
                        <NavLink to='/wellness/yoga' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Yoga</Typography>
                        </NavLink>
                        <NavLink to='/wellness/meditation' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Meditation</Typography>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={5} marginTop='5%'>
                    <Typography fontSize='16px' fontWeight='bold' color='white' marginBottom='5%'>Help</Typography>
                    <Box display='flex' flexDirection='column' alignItems='start' justifyContent='start'>
                        <NavLink to='contact-us' style={{ textDecoration: 'none' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Contact Us</Typography>
                        </NavLink>
                        <NavLink to='/track-order' style={{ textDecoration: 'none', marginTop: '5%' }}>
                            <Typography fontSize='10px' color='white' fontWeight='100'>Track Order</Typography>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
