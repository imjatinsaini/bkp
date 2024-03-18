import { Box, Button, Paper, Typography, LinearProgress, Grid } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Donate = () => {

    // const [isNgo, setIsNgo] = useState(false)
    // const [isGaushala, setIsGaushala] = useState(false)
    // const [isFeedpoor, setIsFeedpoor] = useState(false)

    // let donate_value = 30;

    const [isDonate, setIsDonate] = useState(false);

    return (
        // <Box bgcolor='#093649' paddingTop='2%'>
        //     { /* For larger screens than md */}
        //     <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
        //         <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' width='39px' height='39px' />
        //         </Paper>
        //         <Typography color='white' fontSize='30px'>Donate Us To Help</Typography>
        //         <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' width='39px' height='39px' />
        //         </Paper>
        //     </Box>

        //     { /* For md and smaller screens */}
        //     <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
        //         <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' width='15px' height='15px' />
        //         </Paper>
        //         <Typography color='white' fontSize='12px' marginTop='4%'>Donate Us To Help</Typography>
        //         <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' width='15px' height='15px' />
        //         </Paper>
        //     </Box>

        //     {/*  For all screens */}
        //     <Box sx={{ width: '20%', border: 'none', borderTop: '5px solid white', marginBottom: '2%' }} mx='auto' />

        //     <Grid container marginTop='4%'>
        //         { /* For larger screens than md */}
        //         <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='5%' marginLeft='4%' >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_ngo.png' />
        //                     <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '36px' }}>NGO</Typography>
        //                         <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='3%'>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '10px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: isNgo ? 'white' : '#f24e1e', color: isNgo ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={()=>setIsNgo(true)} onMouseOut={()=>setIsNgo(false)}>Donate</Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>
        //         <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='5%' marginLeft='4%' >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_gaushala.png' />
        //                     <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '36px' }}>Gaushala</Typography>
        //                         <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='3%'>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '10px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: isGaushala ? 'white' : '#f24e1e', color: isGaushala ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={()=>setIsGaushala(true)} onMouseOut={()=>setIsGaushala(false)}>Donate</Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>
        //         <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='0%' marginLeft='4%' >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_feedpoor.png' />
        //                     <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '36px' }}>Feed poor</Typography>
        //                         <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='3%'>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '12px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '10px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: isFeedpoor ? 'white' : '#f24e1e', color: isFeedpoor ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={()=>setIsFeedpoor(true)} onMouseOut={()=>setIsFeedpoor(false)}>Donate</Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>


        //         { /* For md and smaller screens */}
        //         <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_ngo.png' width='100%' />
        //                     <Box paddingLeft='3%' paddingRight='3%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} marginBottom='2.5%' marginTop='2%'>NGO</Typography>
        //                         <Typography style={{ fontSize: '12px', opacity: '60%' }} marginBottom='2.5%'>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='2%'>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '5px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: 'none', borderRadius: '20px', marginTop: '3%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }}>
        //                             <Typography style={{ fontSize: '11px', fontWeight: '500' }} color='white'>Donate</Typography>
        //                         </Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>
        //         <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_gaushala.png' width='100%' />
        //                     <Box paddingLeft='3%' paddingRight='3%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} marginBottom='2.5%' marginTop='2%'>Gaushala</Typography>
        //                         <Typography style={{ fontSize: '12px', opacity: '60%' }} marginBottom='2.5%'>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='2%'>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '5px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: 'none', borderRadius: '20px', marginTop: '3%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }}>
        //                             <Typography style={{ fontSize: '11px', fontWeight: '500' }} color='white'>Donate</Typography>
        //                         </Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>
        //         <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
        //             <Box>
        //                 <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
        //                     <img src='/images/home/donate_feedpoor.png' width='100%' />
        //                     <Box paddingLeft='3%' paddingRight='3%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
        //                         <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} marginBottom='2.5%' marginTop='2%'>Feed poor</Typography>
        //                         <Typography style={{ fontSize: '12px', opacity: '60%' }} marginBottom='2.5%'>NGO stands for Non-Governmental Organization, a non-profit that independently addresses social, environmental, or humanitarian issues through voluntary efforts and advocacy.</Typography>
        //                         <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='2%'>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Raised: xxx</Typography>
        //                             <Typography style={{ fontSize: '10px', fontWeight: '500' }} color='#f24e1e'>Goal: xxx</Typography>
        //                         </Box>
        //                         <LinearProgress variant="determinate" value={donate_value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#f24e1e' } }} onMouseEnter={() => console.log(donate_value)} style={{ backgroundColor: 'grey', borderRadius: '20px', height: '5px' }} />
        //                         <Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: 'none', borderRadius: '20px', marginTop: '3%', float: 'right', width: '6rem', height: '2rem', textTransform: 'none' }}>
        //                             <Typography style={{ fontSize: '11px', fontWeight: '500' }} color='white'>Donate</Typography>
        //                         </Button>
        //                     </Box>
        //                 </Paper>
        //             </Box>
        //         </Grid>
        //     </Grid>

        //     { /* For larger screens than sm */}
        //     <Box display={{xs: 'none', sm: 'none', md: 'block'}}>
        //         <Paper variant='outlined' style={{ background: 'transparent', borderRadius: '20px',display: 'flex', justifyContent: 'flex-end', marginRight: '3%', marginTop: '2%', marginLeft: '85%', paddingBottom: '2%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' style={{ maxWidth: '50%', }} />
        //         </Paper>
        //     </Box>
        //     { /* For sm and smaller screens */}
        //     <Box display={{xs: 'block', sm: 'block', md: 'none'}}>
        //         <Paper variant='outlined' style={{ background: 'transparent', borderRadius: '20px',display: 'flex', justifyContent: 'flex-end', marginRight: '10%', marginLeft: '70%', paddingBottom: '3%', border: 'none' }}>
        //             <img src='/images/home/donate_sign.png' style={{ maxWidth: '50%', }} />
        //         </Paper>
        //     </Box>
        // </Box>
        <Box bgcolor='#093649'>
            <Grid container>
                <Grid item xs={12} marginTop='2%' marginBottom='3%'>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Box width='100%' justifyContent='center' gap='1%' display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                            <img src='/images/home/donate_sign.png' width='39px' height='39px' />
                            <Typography color='white' fontSize='30px'>Donate Us To Help</Typography>
                            <img src='/images/home/donate_sign.png' width='39px' height='39px' />
                        </Box>
                        <Box width='100%' justifyContent='center' gap='1%' display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                            <img src='/images/home/donate_sign.png' width='19px' height='19px' />
                            <Typography color='white' fontSize='15px'>Donate Us To Help</Typography>
                            <img src='/images/home/donate_sign.png' width='19px' height='19px' />
                        </Box>
                    </Box>
                    <Box sx={{ width: '10%', border: 'none', borderTop: '5px solid white' }} mx='auto' />
                </Grid>

                <Box display='flex'>

                    <Grid item xs={5} marginLeft='5%' marginRight='5%'>
                        <Box marginRight='15%'>
                            <Box marginBottom='3%' display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                                <Typography fontSize='32px' color='white'>
                                    "Elevate lives, spark change:
                                    <span style={{ color: '#f24e1e' }}>
                                        ‎ Donate today
                                    </span>
                                    ‎ and make a difference!"
                                </Typography>
                            </Box>
                            <Box marginBottom='3%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                                <Typography fontSize='24px' color='white'>
                                    "Elevate lives, spark change:
                                    <span style={{ color: '#f24e1e' }}>
                                        ‎ Donate today
                                    </span>
                                    ‎ and make a difference!"
                                </Typography>
                            </Box>
                            <Box marginBottom='3%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                                <Typography fontSize='12px' color='white'>
                                    "Elevate lives, spark change:
                                    <span style={{ color: '#f24e1e' }}>
                                        ‎ Donate today
                                    </span>
                                    ‎ and make a difference!"
                                </Typography>
                            </Box>
                            <Box marginBottom='5%' display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                                <Typography fontSize='14px' color='white'>
                                    Your donation matters! Help us make a difference in the lives of those we serve. Join us in our mission today. Thank you for your support!
                                </Typography>
                            </Box>
                            <Box marginBottom='5%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                                <Typography fontSize='12px' color='white'>
                                    Your donation matters! Help us make a difference in the lives of those we serve. Join us in our mission today. Thank you for your support!
                                </Typography>
                            </Box>
                            <Box marginBottom='5%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                                <Typography fontSize='6px' color='white'>
                                    Your donation matters! Help us make a difference in the lives of those we serve. Join us in our mission today. Thank you for your support!
                                </Typography>
                            </Box>

                            <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                                <NavLink to='/donationcomingsoon'>
                                    <Button style={{ backgroundColor: isDonate ? 'white' : '#f24e1e', color: isDonate ? '#f24e1e' : 'white', fontWeight: '500', textTransform: 'none', borderRadius: '20px', paddingLeft: '3%', paddingRight: '3%' }} onMouseOver={() => setIsDonate(true)} onMouseOut={() => setIsDonate(false)}>
                                        Donate Now
                                    </Button>
                                </NavLink>
                            </Box>
                            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} marginBottom='5%'>
                                <NavLink to='/donationcomingsoon'>
                                    <Button style={{ backgroundColor: '#f24e1e', color: 'white', fontWeight: '500', textTransform: 'none', borderRadius: '20px', paddingLeft: '1%', paddingRight: '1%', fontSize: '6px' }}>
                                        Donate Now
                                    </Button>
                                </NavLink>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5} marginBottom='2%'>
                        <img src='/images/home/donate_new.png' width='100%' />
                    </Grid>
                </Box>
            </Grid>

        </Box>

    )
}

export default Donate





























// import { Box, Typography } from '@mui/material'
// import React from 'react'
// import NewNavbar from '../../Layout/NewNavbar'
// import Footer from '../../Widgets/HomeWidgets/Footer'


// const Donationcomingsoon = () => {
//   return (
//     <Box>
//         <NewNavbar/>
//       <Box paddingTop='100px'></Box>
//         <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
//         <Box height='86vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/donate/cow.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
//         <Box position='absolute' gap width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
//           <Typography color='white' fontSize='38px'  style={{ fontWeight: 400}}>COMING SOON...</Typography>
//           <Typography color='white' fontSize='30px' >Small Efforts Make Big Changes 
//              </Typography>

//              <Typography color='white' fontSize='20px'>
//          The Indian cow has pivotal place in the social, economic, agriculture, medicine, and</Typography>

//           <Typography color='white' fontSize='20px'>
//           spiritual spheres of Indian civilization, It has played a key role in the economic </Typography>

//           <Typography color='white' fontSize='20px'>
//           development in India since ancient times. </Typography>

        
//           <Box width='50%' marginTop='3%'>

//             </Box>
//         </Box>
//         </Box>


       
//     </Box>

//     <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
//         <Box height='25vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/shops/books/cow.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
//         <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
//         <Typography color='white' fontSize='20px' fontweight='bold' style={{ fontWeight: 600 }}>Coming Soon</Typography>
//         <Typography color='white' fontSize='12px' >This section of the website is currently under construction.
//           </Typography>
//           <Typography color='white' fontSize='12px' >
//           Sign up to get notified when it launches.</Typography>
//           <Box width='50%' marginTop='3%'>

//             </Box>
//         </Box>
//         </Box>


      
//     </Box>
//     {/* <Box>
//         <img src='/images/pnf/pnf_end.png' width='100%' />
//       </Box> */}
//     <Footer/>
//     </Box>
    

    

    
//   )
// }

// export default Donationcomingsoon
