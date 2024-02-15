import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Toolbar, Typography, Drawer, IconButton, Menu, MenuItem } from '@mui/material'
import {MenuOutlined, KeyboardArrowDown} from '@mui/icons-material'
import styled from '@emotion/styled'
import './../../Styles/Register.css'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  // justifyContent: 'space-between',
  backgroundColor: '#f8f7f4'
})

// const NavBox=styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: '20px',
//   alignItems: 'center',
// }))

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

const Register = () => {

  const [sidebar, setSidebar] = useState(false)

  const [menu,setMenu] =useState(false)
  const openMenu=Boolean(menu)

  const handleMenu = (event)=>{
    setMenu(event.currentTarget)
  } 

  const closeMenu = ()=>{
    setMenu(menu=>!menu)
  }

  return (
    <AppBar position='static' style={{boxShadow: 'none'}}>
      <StyledToolbar style={{height: '90px'}}>
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
              <Button variant='text' className='navbox-btn'>Shops</Button>
              <Button variant='text' className='navbox-btn'>Our Services</Button>
              <Button variant='text' className='navbox-btn'>Special Travel Guide</Button>
              <Button variant='text' className='navbox-btn'>Wellness Practice</Button>
              <Button variant='text' className='navbox-btn'>Blogs</Button>
              <Button variant='text' className='navbox-btn'>Donate</Button>
            </Box>
          </Drawer>
        </>
        <LogoBox className='nav-logo-box'>
          <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
          <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
        </LogoBox>
        <NavBox className='navbox' sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
          <Button variant='text' className='navbox-btn'>Home</Button>
          <Button variant='text' className='navbox-btn' id='shops-btn' onClick={handleMenu} aria-controls={openMenu ? 'resources-menu': undefined} aria-haspopup='true' aria-expanded={openMenu ? 'true' : undefined} >Shops ⮟</Button>
          <Button variant='text' className='navbox-btn'>Our Services ⮟</Button>
          <Button variant='text' className='navbox-btn'>Special Travel Guide</Button>
          <Button variant='text' className='navbox-btn'>Wellness Practice ⮟</Button>
          <Button variant='text' className='navbox-btn'>Blogs</Button>
          <Button variant='text' className='navbox-btn'>Donate</Button>
        </NavBox>
        <UserBox className='nav-userbox' >
          <Box sx={{ width: 30, height: 30 }} component="img" alt="Cart" src="/images/icons/cart.png" />
          <Avatar sx={{ width: 30, height: 30 }} src='/images/icons/profile.png' />
        </UserBox>
        <Menu id='shops-menu' anchorEl={menu} open={openMenu} MenuListProps={{"aria-labelledby": 'shops-btn',}} onClose={closeMenu} className='menu'>
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
      </StyledToolbar>
    </AppBar>
  )
}

export default Register
