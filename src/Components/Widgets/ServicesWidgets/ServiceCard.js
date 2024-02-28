import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const ServiceCard = ({ service_name, service_details, service_image, left }) => {

    const [pujaSchedule, setPujaSchedule] = useState(false)

    return (
        <Box>
            {/* For md and larger screens */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                <Grid container xs={12}>
                    {left === true && (<Box marginLeft='5%' marginRight='5%' marginTop='3%' width='100%' borderRadius='100px / 100px' display='flex' alignItems='center' padding='1%' sx={{ background: 'linear-gradient(to right, #ff7c2a 1%, #e95807 1%, #ff6505 1% ,#ff7c2a 1%, #ffffff)' }}>
                        <Grid item xs={1.5}>
                            <Avatar sx={{ width: '100%', height: 'auto' }} src={service_image}>
                            </Avatar>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={10} display='flex' flexDirection='column' alignItems='start'>
                            <Grid item xs={12}>
                                <Typography fontWeight='500'>{service_name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography overflow={false}>{service_details}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='outlined' style={{ backgroundColor: pujaSchedule ? 'transparent' : '#f24e1e', color: pujaSchedule ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={() => setPujaSchedule(true)} onMouseOut={() => setPujaSchedule(false)}>Schedule</Button>
                            </Grid>
                        </Grid>
                    </Box>)}
                    {left === false && (<Box marginLeft='5%' marginRight='5%' marginTop='3%' width='100%' borderRadius='100px / 100px' display='flex' alignItems='center' padding='1%' sx={{ background: 'linear-gradient(to left, #ff7c2a 1%, #e95807 1%, #ff6505 1% ,#ff7c2a 1%, #ffffff)' }}>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={10} display='flex' flexDirection='column' alignItems='start'>
                            <Grid item xs={12}>
                                <Typography fontWeight='500'>{service_name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography overflow={false}>{service_details}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='outlined' style={{ backgroundColor: pujaSchedule ? 'transparent' : '#f24e1e', color: pujaSchedule ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={() => setPujaSchedule(true)} onMouseOut={() => setPujaSchedule(false)}>Schedule</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar sx={{ width: '100%', height: 'auto' }} src={service_image}>
                            </Avatar>
                        </Grid>
                    </Box>)}
                </Grid>
            </Box>

            {/* For sm and xs */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid container xs={12}>
                    {left === true && (<Box marginLeft='5%' marginRight='5%' marginTop='3%' width='100%' borderRadius='100px / 100px' display='flex' alignItems='center' padding='1%' sx={{ background: 'linear-gradient(to right, #ff7c2a 1%, #e95807 1%, #ff6505 1% ,#ff7c2a 1%, #ffffff)' }}>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={10} display='flex' flexDirection='column' alignItems='start' marginLeft='2%'>
                            <Grid item xs={12} marginTop='1%'>
                                <Typography fontWeight='500' fontSize='12px'>{service_name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography overflow={false} fontSize='8px'>{service_details}</Typography>
                            </Grid>
                            <Grid item xs={12} marginBottom='1%'>
                                <Button variant='outlined' style={{ backgroundColor: pujaSchedule ? 'transparent' : '#f24e1e', color: pujaSchedule ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', width: '4rem', height: '1rem', fontSize: '10px', textTransform: 'none' }} onMouseOver={() => setPujaSchedule(true)} onMouseOut={() => setPujaSchedule(false)}>Schedule</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar sx={{ width: '100%', height: 'auto' }} src={service_image}>
                            </Avatar>
                        </Grid>
                    </Box>)}
                    {left === false && (<Box marginLeft='5%' marginRight='5%' marginTop='3%' width='100%' borderRadius='100px / 100px' display='flex' alignItems='center' padding='1%' sx={{ background: 'linear-gradient(to left, #ff7c2a 1%, #e95807 1%, #ff6505 1% ,#ff7c2a 1%, #ffffff)' }}>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={10} display='flex' flexDirection='column' alignItems='start' marginLeft='2%'>
                            <Grid item xs={12} marginTop='1%'>
                                <Typography fontWeight='500' fontSize='12px'>{service_name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography overflow={false} fontSize='8px'>{service_details}</Typography>
                            </Grid>
                            <Grid item xs={12} marginBottom='1%'>
                                <Button variant='outlined' style={{ backgroundColor: pujaSchedule ? 'transparent' : '#f24e1e', color: pujaSchedule ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', width: '4rem', height: '1rem', fontSize: '10px', textTransform: 'none' }} onMouseOver={() => setPujaSchedule(true)} onMouseOut={() => setPujaSchedule(false)}>Schedule</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar sx={{ width: '100%', height: 'auto' }} src={service_image}>
                            </Avatar>
                        </Grid>
                    </Box>)}
                </Grid>
            </Box>

        </Box>
    )
}

export default ServiceCard
