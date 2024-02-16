import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Twitter, Instagram, Facebook } from '@mui/icons-material'
import React from 'react'

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
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='100' color='white'>Rudraksha</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Puja Samagri</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Yoga Store</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Health & Immunity</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Food for Fast</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Clothing</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Body Care</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Books</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Spiritual accessories</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Services</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Puja</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Prasad</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Hawan</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Darshan</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Astrology</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Quick Links</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>About Us</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Return & Refund</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Shipping Policy</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Terms and Condition</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Privacy & Policy</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Lifestyle</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Yoga</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Meditation</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white' marginLeft='4%'>Quick Links</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Contact Us</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' color='white' fontWeight='100'>Track Order</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
