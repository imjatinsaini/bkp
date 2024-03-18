import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Bodycare = () => {
  return (
    <Box>
        <NewNavbar/>
      <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='86vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/shops/books/bodycare.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px' style={{ fontWeight: 600 }}>Coming Soon</Typography>
        <Typography color='white' fontSize='20px' >This section of the website is currently under construction.
          </Typography>
          <Typography color='white' fontSize='20px' >
          Sign up to get notified when it launches.</Typography>
          <Box width='50%' marginTop='3%'>

            </Box>
        </Box>
        </Box>


       
    </Box>

    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='25vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/shops/books/bodycare.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='20px' fontweight='bold' style={{ fontWeight: 600 }}>Coming Soon</Typography>
        <Typography color='white' fontSize='12px' >This section of the website is currently under construction.
          </Typography>
          <Typography color='white' fontSize='12px' >
          Sign up to get notified when it launches.</Typography>
          <Box width='50%' marginTop='3%'>

            </Box>
        </Box>
        </Box>


      
    </Box>
    {/* <Box>
        <img src='/images/pnf/pnf_end.png' width='100%' />
      </Box> */}
    <Footer/>
    </Box>
    

    

    
  )
}

export default Bodycare
