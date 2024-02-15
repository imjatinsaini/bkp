import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Toolbar, Typography, Drawer, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import styled from '@emotion/styled'
import './../../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  // justifyContent: 'space-between',
  backgroundColor: '#f8f7f4'
})


const LogoBox = styled(Box)({
  display: 'flex',
})

const NavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

const UserBox = styled(Box)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
})

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)

  const [mandir, setMandir] = useState(false)
  const openMandir = Boolean(mandir)

  const [services, setServices] = useState(false)
  const openServices = Boolean(services)

  const [shops, setShops] = useState(false)
  const openShops = Boolean(shops)

  const [library, setLibrary] = useState(false)
  const openLibrary = Boolean(library)

  const [wellness, setWellness] = useState(false)
  const openWellness = Boolean(wellness)

  const [userbox, setUserbox] = useState(false)
  const openUserbox = Boolean(userbox)


  const handleMandir = (event) => {
    setMandir(event.currentTarget)
  }

  const handleServices = (event) => {
    setServices(event.currentTarget)
  }

  const handleLibrary = (event) => {
    setLibrary(event.currentTarget)
  }

  const handleWellness = (event) => {
    setWellness(event.currentTarget)
  }

  const handleShops = (event) => {
    setShops(event.currentTarget)
  }

  const handleUserbox = (event) => {
    setUserbox(event.currentTarget)
  }

  const closeMandir = () => {
    setMandir(mandir => !mandir)
  }

  const closeServices = () => {
    setServices(services => !services)
  }

  const closeShops = () => {
    setShops(shops => !shops)
  }

  const closeLibrary = () => {
    setLibrary(library => !library)
  }

  const closeWellnes = () => {
    setWellness(wellness => !wellness)
  }

  const closeUserbox = () => {
    setUserbox(userbox => !userbox)
  }

  return (
    <>

      <AppBar position='static' style={{ boxShadow: 'none' }}>
        <StyledToolbar style={{ height: '90px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {/* <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
          Bhagwan ka prasad
        </Typography>
        <Pets sx={{display: {xs:'block', sm:'none'}}}/> */}
          <>
            <IconButton className='nav-menu-icon' sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' } }} size='small' onClick={() => setSidebar(true)}>
              <MenuOutlined />
            </IconButton>
            <Drawer anchor='left' open={sidebar} onClose={() => setSidebar(false)}>
              <Box width='250px' textAlign='center' role='presentation' display='grid'>
                <Typography variant='h6' component='div'>SidePanel</Typography>
                <Button variant='text' className='navbox-btn'>Home</Button>
                <Button variant='text' className='navbox-btn'>Mandir</Button>
                <Button variant='text' className='navbox-btn'>Our Services</Button>
                <Button variant='text' className='navbox-btn'>Special Travel Guide</Button>
                <Button variant='text' className='navbox-btn'>Wellness Practice</Button>
                <Button variant='text' className='navbox-btn'>Blogs</Button>
                <Button variant='text' className='navbox-btn'>Donate</Button>
              </Box>
            </Drawer>
          </>
          <Box display='flex' alignItems='center'>
            <LogoBox className='nav-logo-box'>
              <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
              <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
            </LogoBox>
            <NavBox className='navbox' sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
              <Button variant='text' className='navbox-btn'>Home</Button>
              <Button variant='text' className='navbox-btn' id='mandir-btn' onClick={handleMandir} aria-controls={openMandir ? 'mandir-menu' : undefined} aria-haspopup='true' aria-expanded={openMandir ? 'true' : undefined} >Mandir ⮟</Button>
              <Button variant='text' className='navbox-btn' onClick={handleServices} aria-controls={openServices ? 'services-menu' : undefined} aria-haspopup='true' aria-expanded={openServices ? 'true' : undefined} >Our Services ⮟</Button>
              <Button variant='text' className='navbox-btn' id='shops-btn' onClick={handleShops} aria-controls={openShops ? 'shops-menu' : undefined} aria-haspopup='true' aria-expanded={openShops ? 'true' : undefined} >Shops ⮟</Button>
              <Button variant='text' className='navbox-btn' onClick={handleLibrary} aria-controls={openLibrary ? 'library-menu' : undefined} aria-haspopup='true' aria-expanded={openLibrary ? 'true' : undefined} >Sanatan Library ⮟</Button>
              <Button variant='text' className='navbox-btn' onClick={handleWellness} aria-controls={openWellness ? 'mandir-menu' : undefined} aria-haspopup='true' aria-expanded={openWellness ? 'true' : undefined} >Wellness Practice ⮟</Button>
              <Button variant='text' className='navbox-btn'>Blogs</Button>
              <Button variant='text' className='navbox-btn'>Donate</Button>
            </NavBox>
            <UserBox className='nav-userbox' >
              <Box sx={{ width: 30, height: 30 }} component="img" alt="Cart" src="/images/icons/cart.png" />
              {/* <Avatar sx={{ width: 30, height: 30 }} src='/images/icons/profile.png' /> */}
              <IconButton variant='text' className='navbox-btn' id='user-btn' onClick={handleUserbox} aria-controls={openUserbox ? 'userbox-menu' : undefined} aria-haspopup='true' aria-expanded={openUserbox ? 'true' : undefined} >
                <Avatar sx={{ width: 30, height: 30 }} src='/images/icons/profile.png' />
              </IconButton  >
            </UserBox>

            {/* MANDIR MENU */}
            <Menu id='mandir-menu' anchorEl={mandir} open={openMandir} MenuListProps={{ "aria-labelledby": 'mandir-btn', }} onClose={closeMandir} className='menu'>
              <MenuItem className='menu-item' autoFocus={false}>North India</MenuItem>
              <MenuItem className='menu-item'>West India</MenuItem>
              <MenuItem className='menu-item'>East India</MenuItem>
              <MenuItem className='menu-item'>South India</MenuItem>
            </Menu>

            {/* SERVICES MENU */}
            <Menu id='services-menu' anchorEl={services} open={openServices} MenuListProps={{ "aria-labelledby": 'services-btn', }} onClose={closeServices} className='menu'>
              <MenuItem className='menu-item' autoFocus={false}>Puja</MenuItem>
              <MenuItem className='menu-item'>Prasad</MenuItem>
              <MenuItem className='menu-item'>Hawan</MenuItem>
              <MenuItem className='menu-item'>Darashan</MenuItem>
              <MenuItem className='menu-item'>Astrology</MenuItem>
              <MenuItem className='menu-item'>Brahman Bhoj</MenuItem>
              <MenuItem className='menu-item'>Pandit Ji Request</MenuItem>
              <MenuItem className='menu-item'>Special Travel Guide</MenuItem>
            </Menu>

            {/* SHOPS MENU */}
            <Menu id='shops-menu' anchorEl={shops} open={openShops} MenuListProps={{ "aria-labelledby": 'shops-btn', }} onClose={closeShops} className='menu'>
              <MenuItem className='menu-item' autoFocus={false}>Books</MenuItem>
              <MenuItem className='menu-item'>Body Care</MenuItem>
              <MenuItem className='menu-item'>Clothing</MenuItem>
              <MenuItem className='menu-item'>Food for Fast</MenuItem>
              <MenuItem className='menu-item'>Health & Immunity</MenuItem>
              <MenuItem className='menu-item'>Puja Samagri</MenuItem>
              <MenuItem className='menu-item'>Rudraksha</MenuItem>
              <MenuItem className='menu-item'>Spiritual Accessories</MenuItem>
              <MenuItem className='menu-item'>Yoga Store</MenuItem>
            </Menu>

            {/* LIBRARY MENU */}
            <Menu id='library-menu' anchorEl={library} open={openLibrary} MenuListProps={{ "aria-labelledby": 'library-btn', }} onClose={closeLibrary} className='menu'>
              <MenuItem className='menu-item' autoFocus={false}>Ved Pujan Upnishd</MenuItem>
              <MenuItem className='menu-item'>Audio</MenuItem>
              <MenuItem className='menu-item'>Video</MenuItem>
            </Menu>

            {/* WELLNESS MENU */}
            <Menu id='wellness-menu' anchorEl={wellness} open={openWellness} MenuListProps={{ "aria-labelledby": 'wellness-btn', }} onClose={closeWellnes} className='menu'>
              <MenuItem className='menu-item' autoFocus={false}>Yoga</MenuItem>
              <MenuItem className='menu-item'>Meditation</MenuItem>
            </Menu>

            {/* USER BOX MENU */}
            <Menu id='userbox-menu' anchorEl={userbox} open={openUserbox} MenuListProps={{ "aria-labelledby": 'user-btn', }} onClose={closeUserbox} className='menu' style={{ marginRight: '1%', marginLeft: '7%' }}>
              <Box marginLeft='5%' >
                <Box>
                  <Typography fontSize='16px' fontWeight='500' color='#f24e1e'>Namaste 🙏</Typography>
                  <Box sx={{ width: '100%', border: 'none', borderTop: '2px solid black', marginBottom: '2%' }} mx='auto' />
                </Box>
                <Typography fontSize='12px'>To access your account and manage order</Typography>
                <Box marginTop='3%' marginBottom='3%'>
                  <NavLink to='/login'>
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
          </Box>
        </StyledToolbar>
      </AppBar>
    </>

    // <>
    //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //         <div className="container-fluid">
    //             <Link to="/" className="navbar-brand">
    //                 <img src="/images/logo.png" alt="Logo" className="logo" />
    //                 भगवान का प्रसाद
    //             </Link>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                     <li className="nav-item space-between">
    //                         <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
    //                     </li>
    //                     <li className="nav-item dropdown space-between">
    //                         <NavLink to="/shops" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    //                             Shops
    //                         </NavLink>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <NavLink to="/books" className="dropdown-item">Books</NavLink>
    //                             <NavLink to="/body-care" className="dropdown-item">Body Care</NavLink>
    //                             <NavLink to="/clothing" className="dropdown-item">Clothing</NavLink>
    //                             <NavLink to="/food-for-fast" className="dropdown-item">Food for Fast</NavLink>
    //                             <NavLink to="/health-immunity" className="dropdown-item">Health & Immunity</NavLink>
    //                             <NavLink to="/puja-samagri" className="dropdown-item">Puja Samagri</NavLink>
    //                             <NavLink to="/rudraksha" className="dropdown-item">Rudraksha</NavLink>
    //                             <NavLink to="/spiritual accessories" className="dropdown-item">Spiritual Accessories</NavLink>
    //                             <NavLink to="/yoga-store" className="dropdown-item">Yoga Store</NavLink>
    //                         </div>
    //                     </li>
    //                     <li className="nav-item dropdown space-between">
    //                         <NavLink to="/category" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    //                             Our Services
    //                         </NavLink>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <NavLink to="/category-1" className="dropdown-item">Books</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Body Care</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Clothing</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Food for Fast</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Health & Immunity</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Puja Samagri</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Rudraksha</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Spiritual Accessories</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Yoga Score</NavLink>
    //                         </div>
    //                     </li>
    //                     <li className="nav-item space-between">
    //                         <NavLink to="/special-travel-guide" className="nav-link">Special Travel Guide</NavLink>
    //                     </li>
    //                     <li className="nav-item dropdown space-between">
    //                         <NavLink to="/wellness-practice" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    //                             Wellness Practice
    //                         </NavLink>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <NavLink to="/category-1" className="dropdown-item">Books</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Body Care</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Clothing</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Food for Fast</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Health & Immunity</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Puja Samagri</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Rudraksha</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Spiritual Accessories</NavLink>
    //                             <NavLink to="/category" className="dropdown-item">Yoga Score</NavLink>
    //                         </div>
    //                     </li>
    //                     <li className="nav-item space-between">
    //                         <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
    //                     </li>
    //                     <li className="nav-item space-between">
    //                         <NavLink to="/donate" className="nav-link">Donate</NavLink>
    //                     </li>
    //                 </ul>
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item">
    //                         <NavLink to="/cart" className="nav-link">
    //                             <img src='/images/icons/cart.png' alt="Cart" className="cart-icon" />
    //                         </NavLink>
    //                     </li>
    //                     <li className="nav-item dropdown option-2 space-between">
    //                         <NavLink to="/profile" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    //                             <img src='/images/icons/profile.png' className='profile-icon' alt="Profile" />
    //                         </NavLink>
    //                         <div className="dropdown-menu option-2" aria-labelledby="navbarDropdown">
    //                             <NavLink to="/create-account" className="dropdown-item">Create Account</NavLink>
    //                             <NavLink to="/login" className="dropdown-item">Login</NavLink>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // </>
  )
}

export default Navbar
