import { Box, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewNavbar from '../Layout/NewNavbar'
import Footer from '../Widgets/HomeWidgets/Footer'

const PageNotFound = () => {
  return (
    <Box>
      <NewNavbar />
      <Box paddingTop='100px'></Box>
      <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='80vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/pnf/pnf_flower.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Typography color='white' fontSize='24px' style={{ textDecoration: 'underline' }}>Stay Tuned</Typography>
            <Typography color='white' fontSize='40px' >We're Coming Soon</Typography>
            <Box width='50%' marginTop='3%'>
              <Box display='flex' justifyContent='space-between'>
                <Typography fontSize='20px' color='black' >Working on something amazing...</Typography>
                <Typography fontSize='20px' color='black' fontWeight='500' >
                  <CountUp start={0} end={69} duration={10000} />%
                </Typography>
              </Box>
              <LinearProgress style={{ backgroundColor: 'white' }} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}></LinearProgress>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='50vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/pnf/pnf_flower.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Typography color='white' fontSize='16px' style={{ textDecoration: 'underline' }}>Stay Tuned</Typography>
            <Typography color='white' fontSize='32px' >We're Coming Soon</Typography>
            <Box width='70%' marginTop='5%'>
              <Box display='flex' justifyContent='space-between'>
                <Typography fontSize='12px' color='black' >Working on something amazing...</Typography>
                <Typography fontSize='12px' color='black' fontWeight='500' >
                  <CountUp start={0} end={69} duration={10000} />%
                </Typography>
              </Box>
              <LinearProgress style={{ backgroundColor: 'white' }} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}></LinearProgress>
            </Box>
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

const CountUp = ({ start, end, duration }) => {
  const [count, setCount] = useState(start)
  const step = Math.ceil((end - start) / (duration / 1000))

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount(prevCount => Math.min(prevCount + step, end))
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [count, end, duration])
  return <span>{count}</span>
}

export default PageNotFound
