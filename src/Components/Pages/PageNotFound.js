import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../Layout/NewNavbar'
import Footer from '../Widgets/HomeWidgets/Footer'

const PageNotFound = () => {
  return (
    <Box>
      <NewNavbar />
      <Box paddingTop='100px'></Box>
      <Box height='80vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/pnf/pnf_flower.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' border='1px solid red' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Typography color='white' fontSize='24px' style={{ textDecoration: 'underline' }}>Stay Tuned</Typography>
          <Typography color='white' fontSize='40px' >We're Coming Soon</Typography>
          <Box width='50%'>
            <Box display='flex' justifyContent='space-between'>
              <Typography fontSize='20px' color='black' >Working on something amazing...</Typography>
              <Typography fontSize='20px' color='black' fontWeight='500' >70%</Typography>
            </Box>
            <LinearProgress style={{ backgroundColor: 'white' }} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}></LinearProgress>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src='/images/pnf/pnf_end.png' width='100%' />
      </Box>
      <Footer />
    </Box>
  )
}

export default PageNotFound
