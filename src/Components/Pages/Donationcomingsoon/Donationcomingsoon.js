import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../Layout/NewNavbar'
import Footer from '../../Widgets/HomeWidgets/Footer'


const Donationcomingsoon = () => {
  return (
    <Box>
        <NewNavbar/>
      <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
             <Box height='86vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/donate/cow.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
             <Box position='absolute'  width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
               <Typography color='white' fontSize='38px'  style={{ fontWeight: 400, fontFamily : 'Poppins'}}>COMING SOON....</Typography>
               <Box  display='flex' flexDirection='row' justifyContent='center' alignItems='center' style={{ paddingTop:'10px'}}>
               <Typography color='white' fontSize='30px' >Small Efforts Make Big 
               </Typography>
                <Typography color='#FF6505' fontSize='30px' style={{ marginLeft: '7px' }}>
                Changes.</Typography>
               
                </Box>
     
             <Box  display='flex' flexDirection='column' justifyContent='center' alignItems='center' style={{paddingTop:'10px' }}>
             <Typography color='white' fontSize='18px' style={{fontFamily : 'Poppins'}}>
             The Indian cow has pivotal place in the social, economic, agriculture, medicine, and</Typography>

             <Typography color='white' fontSize='18px' style={{fontFamily : 'Poppins'}}>
             spiritual spheres of Indian civilization, It has played a key role in the economic </Typography>
     
             <Typography color='white' fontSize='18px' style={{fontFamily : 'Poppins'}}>
             development in India since ancient times. </Typography>
             </Box>
        
               <Box width='50%' marginTop='3%'>
     
            </Box>
             </Box>
        </Box>


       
      </Box>


      <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
             <Box height='25vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/donate/cow.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
             <Box position='absolute'  width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
               <Typography color='white' fontSize='20px'  style={{ fontWeight: 400, fontFamily : 'Poppins'}}>COMING SOON....</Typography>
               <Box  display='flex' flexDirection='row' justifyContent='center' alignItems='center' style={{ paddingTop:'10px'}}>
               <Typography color='white' fontSize='12px' >Small Efforts Make Big 
               </Typography>
                <Typography color='#FF6505' fontSize='12px' style={{ marginLeft: '7px' }}>
                Changes.</Typography>
               
                </Box>
     
             <Box  display='flex' flexDirection='column' justifyContent='center' alignItems='center' style={{paddingTop:'10px' }}>
             <Typography color='white' fontSize='10px'>
             The Indian cow has pivotal place in the social, economic, agriculture, medicine, and</Typography>

             <Typography color='white' fontSize='10px'>
             spiritual spheres of Indian civilization, It has played a key role in the economic </Typography>
     
             <Typography color='white' fontSize='10px'>
             development in India since ancient times. </Typography>
             </Box>
        
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

export default Donationcomingsoon
