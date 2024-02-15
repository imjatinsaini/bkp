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

  const [menu, setMenu] = useState(false)
  const openMenu = Boolean(menu)

  const [userbox, setUserbox] = useState(false)
  const openUserbox = Boolean(userbox)

  const handleMenu = (event) => {
    setMenu(event.currentTarget)
  }

  const handleUserbox = (event) => {
    setUserbox(event.currentTarget)
  }

  const closeMenu = () => {
    setMenu(menu => !menu)
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
              <Button variant='text' className='navbox-btn' id='shops-btn' onClick={handleMenu} aria-controls={openMenu ? 'shops-menu' : undefined} aria-haspopup='true' aria-expanded={openMenu ? 'true' : undefined} >Mandir ⮟</Button>
              <Button variant='text' className='navbox-btn'>Our Services ⮟</Button>
              <Button variant='text' className='navbox-btn' id='shops-btn' onClick={handleMenu} aria-controls={openMenu ? 'shops-menu' : undefined} aria-haspopup='true' aria-expanded={openMenu ? 'true' : undefined} >Shops ⮟</Button>
              <Button variant='text' className='navbox-btn'>Sanatan Library ⮟</Button>
              <Button variant='text' className='navbox-btn'>Wellness Practice ⮟</Button>
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
            <Menu id='shops-menu' anchorEl={menu} open={openMenu} MenuListProps={{ "aria-labelledby": 'shops-btn', }} onClose={closeMenu} className='menu'>
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
            <Menu id='userbox-menu' anchorEl={userbox} open={openUserbox} MenuListProps={{ "aria-labelledby": 'user-btn', }} onClose={closeUserbox} className='menu'>
              <NavLink to="/login"><MenuItem className='menu-item' autoFocus={false}>Login</MenuItem></NavLink>
              <NavLink to="/create-account"><MenuItem className='menu-item'>Create Account</MenuItem></NavLink>
              <Box border='1px solid red' marginLeft='10%'>
                <Box>
                  Namaste 🙏
                  <Box sx={{ width: '100%', border: 'none', borderTop: '2px solid black', marginBottom: '2%' }} mx='auto' />
                </Box>
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
