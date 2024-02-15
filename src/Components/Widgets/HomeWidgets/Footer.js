import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Twitter, Instagram, Facebook } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    return (
        <Box bgcolor='#1e1e1e'>
            <Grid container paddingLeft='4%' paddingTop='5%'>
                <Grid item md={3} marginRight='3.5%'>
                    <Box color='white'>
                        <Box display='flex'>
                        <Typography fontWeight='bold' fontSize='26px' marginRight='2%' color='#f24e1e'>"</Typography>
                            <Typography fontWeight='bold' fontSize='24px'>Bhagwan Ka Prasad</Typography>
                            <Typography fontWeight='bold' fontSize='26px' marginLeft='2%' color='#f24e1e'>"</Typography>
                        </Box>
                        <Typography fontWeight='500' fontSize='12px' marginBottom='7%'>(Divine Deliveries, Connecting Souls)</Typography>
                        <Typography fontWeight='500' fontSize='16px' marginBottom='7%'>Bhagwan Ka Prasad is a  religious e-commerce space, aiming to connect people with their faith by delivering Prasad to various temples across India. The platform offers a wide range of spiritual products, services, and travel experiences, fostering a deeper connection to spirituality.</Typography>
                        <Box display='flex' alignItems='center' >
                            <Typography fontWeight='bold' fontSize='20px'>Follow us</Typography>
                            <IconButton style={{ color: '#1da1f2', marginLeft: '3%' }}><Twitter /></IconButton>
                            <IconButton style={{ color: '#c33e86' }}><Instagram /></IconButton>
                            <IconButton style={{ color: '#1da1f2' }}><Facebook /></IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>

                        <Typography fontSize='20px' fontWeight='bold' color='white'>Shop</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Rudraksha</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Puja Samagri</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Yoga Store</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Health & Immunity</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Food for Fast</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Clothing</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Body Care</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Books</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Spiritual accessories</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white'>Services</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Puja</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Prasad</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Hawan</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Darshan</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Astrology</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white'>Quick Links</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>About Us</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Return & Refund</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Shipping Policy</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Terms and Condition</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Privacy & Policy</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white'>Lifestyle</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Yoga</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Meditation</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1.6}>
                    <Box paddingLeft='5%'>
                        <Typography fontSize='20px' fontWeight='bold' color='white'>Quick Links</Typography>
                        <Box display='flex' flexDirection='column' alignItems='start'>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Contact Us</Typography>
                            </IconButton>
                            <IconButton>
                                <Typography fontSize='16px' fontWeight='500' color='white'>Track Order</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
