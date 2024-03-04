import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Twitter, Instagram, Facebook } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <Box bgcolor='#1e1e1e'>
            <Grid container paddingLeft='4%' paddingTop='2%'>
                <Grid item md={3.3} marginRight='3.5%'>
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
                <Grid item md={1.6}>
                    <Box paddingLeft='0%'>

                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Shop</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <NavLink to='/shops/rudraksha'>
                                <IconButton>
                                    <Typography fontSize='16px' fontWeight='100' color='white'>Rudraksha</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/puja-samagri'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Puja Samagri</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/yoga-store'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Yoga Store</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/health-immunity'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Health & Immunity</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/food-for-fast'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Food for Fast</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/clothing'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Clothing</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/body-care'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Body Care</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/books'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Books</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shops/spiritual-accessories'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Spiritual accessories</Typography>
                                </IconButton>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Services</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <NavLink to='/service/puja'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Puja</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/service/prasad'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Prasad</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/service/hawan'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Hawan</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/service/darshan'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Darshan</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/service/astrology'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Astrology</Typography>
                                </IconButton>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Quick Links</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <NavLink to='/about-us'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>About Us</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/return-refund'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Return & Refund</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/shipping-policy'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Shipping Policy</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/terms-condition'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Terms and Condition</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/privacy-policy'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Privacy & Policy</Typography>
                                </IconButton>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Lifestyle</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <NavLink to='/wellness/yoga'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Yoga</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/wellness/meditation'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Meditation</Typography>
                                </IconButton>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Help</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <NavLink to='contact-us'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Contact Us</Typography>
                                </IconButton>
                            </NavLink>
                            <NavLink to='/track-order'>
                                <IconButton>
                                    <Typography fontSize='16px' color='white' fontWeight='100'>Track Order</Typography>
                                </IconButton>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
