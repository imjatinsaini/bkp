import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../../Styles/Mandir.css'

const MandirEnd = () => {
    return (
        <Box bgcolor='#ba5a19' position='relative'>
            {/* <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
                </svg>
            </div> */}


            <Grid container paddingTop='0px'>
                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Paper variant='outlined' style={{ background: 'transparent', marginRight: '1.5%', border: 'none' }}>
                            <img src='/images/mandir/mandir_icon.png' width='13px' height='16px' />
                        </Paper>
                        <Typography color='black' fontSize='24px' marginTop='1%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>Discover Sacred Sites Beyond Borders</Typography>
                        <Typography color='black' fontSize='12px' marginTop='1%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>Discover Sacred Sites Beyond Borders</Typography>
                        <Paper variant='outlined' style={{ background: 'transparent', marginLeft: '1.5%', border: 'none' }}>
                            <img src='/images/mandir/mandir_icon.png' width='13px' height='16px' />
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography color='white' fontSize='36px' marginTop='1%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>Explore Temples in Other Regions</Typography>
                        <Typography color='white' fontSize='18px' marginTop='1%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>Explore Temples in Other Regions</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Box sx={{ width: '20%', border: 'none', borderTop: '5px solid #f8f7f4' }} mx='auto' />
                    </Box>
                </Grid>
            </Grid>

            <ChangeMandir />

        </Box>
    )
}

const ChangeMandir = () => {
    return (
        <Box>
            <Box marginLeft='5%' marginRight='5%' paddingBottom='2%'>
                <Grid container marginTop='4%' justifyContent='space-between'>
                    { /* For md and larger screens */}
                    <Grid item md={2.5} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <NavLink to='/east-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/east_india.png' width='100%' />
                                    <Typography style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>East India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item md={2.5} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
                        <NavLink to='/west-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/west_india.png' width='100%' />
                                    <Typography style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>West India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item md={2.5} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
                        <NavLink to='/north-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/north_india.png' width='100%' />
                                    <Typography style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>North India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item md={2.5} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
                        <NavLink to='/south-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/south_india.png' width='100%' />
                                    <Typography style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>South India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>


                    { /* For md and smaller screens */}
                    <Grid item xs={12} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
                        <NavLink to='/east-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/east_india.png' width='100%' />
                                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>East India</Typography>
                                    <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} style={{ width: '100%', position: 'absolute', fontSize: '20px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>East India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                        <NavLink to='/west-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/west_india.png' width='100%' />
                                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>West India</Typography>
                                    <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} style={{ width: '100%', position: 'absolute', fontSize: '20px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>West India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
                        <NavLink to='/north-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/north_india.png' width='100%' />
                                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>North India</Typography>
                                    <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} style={{ width: '100%', position: 'absolute', fontSize: '20px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>North India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                        <NavLink to='/south-mandir'>
                            <Button style={{ textTransform: 'none' }}>
                                <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px', position: 'relative' }}>
                                    <img src='/images/mandir/south_india.png' width='100%' />
                                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ width: '100%', position: 'absolute', fontSize: '30px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>South India</Typography>
                                    <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} style={{ width: '100%', position: 'absolute', fontSize: '20px', fontWeight: '500', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>South India</Typography>
                                </Paper>
                            </Button>
                        </NavLink>
                    </Grid>

                </Grid>
            </Box >
        </Box>
    )
}

export default MandirEnd
