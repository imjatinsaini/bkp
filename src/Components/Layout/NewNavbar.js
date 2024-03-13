import { Avatar, Box, Button, Drawer, Grid, IconButton, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './../../Styles/NewNavbar.css'
import { MenuOutlined, Close, KeyboardArrowDown } from '@mui/icons-material'

const NewNavbar = () => {

    const [userbox, setUserbox] = useState(false)
    const openUserbox = Boolean(userbox)

    const [sidebar, setSidebar] = useState(false)

    const handleUserbox = (event) => {
        setUserbox(event.currentTarget)
    }

    const closeUserbox = () => {
        setUserbox(userbox => !userbox)
    }

    return (
        <Box boxShadow='0px 2px 4px rgba(0, 0, 0, 0.5)' bgcolor='#f8f7f4' position='fixed' height='90px' display='flex' alignItems='center' width='100%' zIndex='1000'>
            {/* For lg and xl */}
            <Grid container display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <Grid item md={2}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <NavLink to='/' style={{ textDecoration: 'none' }}><Typography className='nav-logo-text'>भगवान का प्रसाद</Typography></NavLink>
                    </Box>
                </Grid>
                <Grid item md={9}>
                    <Box height='100%' display='flex' justifyContent='start' alignItems='center'>
                        <Box display='flex' alignItems='center'>
                            <Box position='relative' display='inline-block'>
                                <NavLink to='/'>
                                    <Button variant='text' className='nav-btn'>
                                        Home
                                    </Button>
                                </NavLink>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <Button variant='text' className='nav-btn'>
                                    <NavLink to='/north-mandir' className='nav-btn'>Mandir ⮟</NavLink>
                                    <Box className='nav-hover'>
                                        <NavLink to='/north-mandir'>North India</NavLink>
                                        <NavLink to='/west-mandir'>West India</NavLink>
                                        <NavLink to='/east-mandir'>East India</NavLink>
                                        <NavLink to='/south-mandir'>South India</NavLink>
                                    </Box>
                                </Button>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <Button variant='text' className='nav-btn'>
                                    <NavLink to='/our-services' className='nav-btn'>Our Services ⮟</NavLink>
                                    <Box className='nav-hover'>
                                        <NavLink to='/service/puja'>Puja</NavLink>
                                        <NavLink to='/service/prasad'>Prasad</NavLink>
                                        <NavLink to='/service/hawan'>Hawan</NavLink>
                                        <NavLink to='/service/darashan'>Darashan</NavLink>
                                        <NavLink to='/service/astrology'>Astrology</NavLink>
                                        <NavLink to='/service/brahman-bhoj'>Brahman Bhoj</NavLink>
                                        <NavLink to='/service/pandit-ji-request'>Pandir Ji Request</NavLink>
                                        <NavLink to='/service/special-travel-guide'>Special Travel Guide</NavLink>
                                    </Box>
                                </Button>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <Button variant='text' className='nav-btn'>
                                    <NavLink to='/shops' className='nav-btn'>Shops ⮟</NavLink>
                                    <Box className='nav-hover'>
                                        <NavLink to='/shops/books'>Books</NavLink>
                                        <NavLink to='/shops/body-care'>Body Care</NavLink>
                                        <NavLink to='/shops/clothing'>Clothing</NavLink>
                                        <NavLink to='/shops/food-for-fast'>Food for Fast</NavLink>
                                        <NavLink to='/shops/health-immunity'>Health & Immunity</NavLink>
                                        <NavLink to='/shops/puja-samagri'>Puja Samagri</NavLink>
                                        <NavLink to='/shops/rudraksha'>Rudraksha</NavLink>
                                        <NavLink to='/shops/spiritual-accessories'>Spiritual Accessories</NavLink>
                                        <NavLink to='/shops/yoga-store'>Yoga Store</NavLink>
                                    </Box>
                                </Button>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <Button variant='text' className='nav-btn'>
                                    Sanatan Library ⮟
                                    <Box className='nav-hover'>
                                        <NavLink to='/library/ved-puran-upanishad'>Ved Puran Upanishad</NavLink>
                                        <NavLink to='/library/audio'>Audio</NavLink>
                                        <NavLink to='/library/video'>Video</NavLink>
                                    </Box>
                                </Button>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <Button variant='text' className='nav-btn'>
                                    Wellness Practice ⮟
                                    <Box className='nav-hover'>
                                        <NavLink to='/wellness/yoga'>Yoga</NavLink>
                                        <NavLink to='/wellness/meditation'>Meditation</NavLink>
                                    </Box>
                                </Button>
                            </Box>
                            <Box position='relative' display='inline-block'>
                                <NavLink to='/blogs'>
                                    <Button variant='text' className='nav-btn'>
                                        Blogs
                                    </Button>
                                </NavLink>
                            </Box><Box position='relative' display='inline-block'>
                                <NavLink to='/donate'>
                                    <Button variant='text' className='nav-btn'>
                                        Donate
                                    </Button>
                                </NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={1}>
                    <Box display='flex' height='100%' justifyContent='start' alignItems='center'>
                        <NavLink to='/cart'>
                            <IconButton style={{ marginRight: '5%' }}>
                                <Box sx={{ width: 30, height: 30 }} component="img" alt="Cart" src="/images/icons/cart.png" />
                            </IconButton>
                        </NavLink>
                        <IconButton variant='text' className='navbox-btn' id='user-btn' onClick={handleUserbox} aria-controls={openUserbox ? 'userbox-menu' : undefined} aria-haspopup='true' aria-expanded={openUserbox ? 'true' : undefined} >
                            <Avatar sx={{ width: 30, height: 30 }} src='/images/icons/profile.png' />
                        </IconButton  >
                    </Box>
                    <Menu id='userbox-menu' anchorEl={userbox} open={openUserbox} MenuListProps={{ "aria-labelledby": 'user-btn', }} onClose={closeUserbox} className='menu' style={{ marginRight: '1%', marginLeft: '7%' }}>
                        <Box marginLeft='5%' >
                            <Box>
                                <Typography fontSize='16px' fontWeight='500' color='#f24e1e'>Namaste 🙏</Typography>
                                <Box sx={{ width: '100%', border: 'none', borderTop: '2px solid black', marginBottom: '2%' }} mx='auto' />
                            </Box>
                            <Typography fontSize='12px'>To access your account and manage order</Typography>
                            <Box marginTop='3%' marginBottom='3%'>
                                <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                    <Button style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '10px' }}>LOGIN / SIGN UP</Button>
                                </NavLink>
                            </Box>
                            <Typography fontSize='12px' >
                                By Logging In/Signing up. I agree to the
                                <span style={{ color: '#f24e1e' }}> TERMS OF USE </span>
                                &
                                <span style={{ color: '#f24e1e' }}> PRIVACY POLICY </span>
                            </Typography>
                        </Box>
                    </Menu>
                </Grid>
            </Grid>

            {/* For md*/}
            <Grid container display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
                <Grid item md={2} sm={2} xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton onClick={() => setSidebar(true)}>
                        <MenuOutlined />
                    </IconButton>
                    <Drawer anchor='left' open={sidebar} onClose={() => setSidebar(false)} style={{ width: '100%' }}>
                        <Box width='100vw' role='presentation' display='grid'>
                            <Box display='flex' justifyContent='space-between' paddingTop='5%' paddingLeft='5%' paddingRight='5%' paddingBottom='5%' boxShadow='0px 4px 8px rgba(0,0,0,0.3)'>
                                <Box bgcolor='#f24e1e' borderRadius='10px'>
                                    <NavLink to='/login'>
                                        <Button style={{ color: 'white', textTransform: 'none' }}>

                                            Login/ Signup
                                        </Button>
                                    </NavLink>
                                </Box>
                                <Box>
                                    <IconButton onClick={() => setSidebar(false)}>
                                        <Close />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box marginLeft='5%' marginTop='5%' marginRight='5%'>
                                <Box position='relative' display='inline-block'>
                                    <NavLink to='/'>
                                        <Button className='nav-btn'>
                                            Home
                                        </Button>
                                    </NavLink>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box display='flex'>
                                    <Box position='relative' display='inline-block'>
                                        <Button className='nav-btn'>
                                            <NavLink to='/north-mandir' className='nav-btn'>Mandir</NavLink>
                                        </Button>
                                    </Box>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/our-services' className='nav-btn'>Our Services</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/shops' className='nav-btn'>Shops</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/sanatan-library' className='nav-btn'>Sanatan Library</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/wellness-practice' className='nav-btn'>Wellness Practice</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/blogs' className='nav-btn'>Blogs</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                                <Box>
                                    <Button variant='text' className='nav-btn'>
                                        <NavLink to='/donate' className='nav-btn'>Donate</NavLink>
                                    </Button>
                                </Box>
                                <Box marginLeft='3%'>
                                    <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%' }} mx='auto' />
                                </Box>

                            </Box>
                        </Box>
                    </Drawer>
                </Grid>
                <Grid item md={8} sm={8} xs={8}>
                    <Box display='flex' justifyContent='start' alignItems='center' >
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <NavLink to='/' style={{ textDecoration: 'none' }}><Typography className='nav-logo-text'>भगवान का प्रसाद</Typography></NavLink>
                    </Box>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                    <Box display='flex' height='100%' justifyContent='end' alignItems='center'>
                        <IconButton style={{ marginRight: '5%' }}>
                            <Box sx={{ width: 30, height: 30 }} component="img" alt="Cart" src="/images/icons/cart.png" />
                        </IconButton>
                        <IconButton variant='text' className='navbox-btn' id='user-btn' onClick={handleUserbox} aria-controls={openUserbox ? 'userbox-menu' : undefined} aria-haspopup='true' aria-expanded={openUserbox ? 'true' : undefined} >
                            <Avatar sx={{ width: 30, height: 30 }} src='/images/icons/profile.png' />
                        </IconButton  >
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )

}

export default NewNavbar
