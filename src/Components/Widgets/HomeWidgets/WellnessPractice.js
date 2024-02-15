import React, {useState} from 'react'
import { Box, Grid, Typography, Paper, Avatar, Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

const WellnessPractice = () => {

    const [isBtn,setIsBtn] = useState(false)

    return (
        <Box bgcolor='#ba5a19'>
            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='32%' marginRight='32%' paddingTop='1%'>
                <Typography color='#f8f7f4' fontSize='35px' marginTop='2.5%' textAlign='center'>Wellness Practice</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%' paddingTop='3%'>
                <Typography color='#f8f7f4' fontSize='15px' marginTop='2.5%' fontWeight='500' textAlign='center'>Wellness Practice</Typography>
            </Box>

            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '8%', border: 'none', borderTop: '5px solid white', marginBottom: '3%' }} mx='auto' />
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid white', marginBottom: '5%' }} mx='auto' />

            { /* For larger screens than md */}
            <Grid paddingBottom='2%' container display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
                <Grid item md={5} marginLeft='3%' marginBottom='5%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_1.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5} marginLeft='3%' marginTop='10%'>
                    <Box>
                        <Box>
                            <Typography color='white' fontSize='16px' fontWeight='500'>IMPROVE PHYSICAL HEALTH</Typography>
                            <Typography color='black' fontSize='48px'>Experience, Balance, Strength, and Serenity</Typography>
                            <Typography color='black' fontSize='20px'>Our classes are designed to challenge and inspire you while ensuring a safe and supportive atmosphere for all.</Typography>
                            <Box marginTop='3%'>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Increase Flexibility</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Enhance Strength</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Get Better Posture</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={5.8} marginLeft='3%'>
                    <Box>
                        <Box marginTop='20%'>
                            <Typography color='white' fontSize='16px' fontWeight='500'>MENTAL WELL-BEING</Typography>
                            <Typography color='black' fontSize='48px'>Find Harmony in Body and Mind</Typography>
                            <Typography color='black' fontSize='20px'>Yoga enhances physical well-being through improved flexibility and strength, while meditation fosters mental and emotional health by reducing stress, improving concentration, and enhancing sleep. Together, they contribute to overall holistic well-being, promoting physical fitness and mental clarity.</Typography>
                            <Box marginTop='5%'>
                                <Box display='flex' justifyContent='start' marginTop='3%' paddingBottom='2%'>
                                <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: isBtn ? 'white' : 'transparent', color: isBtn ? '#f24e1e' : 'white', border: '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none', boxShadow: isBtn ? '0px 2px 2px 2px rgba(0,0,0,0.15)' : 'none' }} onMouseOver={()=>setIsBtn(true)} onMouseOut={()=>setIsBtn(false)}>Get Started Now</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5} marginLeft='3%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_2.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            { /* For sm and smaller screens */}
            <Grid paddingBottom='5%' container display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}>
                <Grid item md={3} marginLeft='5%' marginRight='5%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_1.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} marginLeft='5%' marginRight='5%' marginTop='3%'>
                    <Box>
                        <Box>
                            <Typography color='white' fontSize='16px' fontWeight='500'>IMPROVE PHYSICAL HEALTH</Typography>
                            <Typography color='black' fontSize='32px'>Experience, Balance, Strength, and Serenity</Typography>
                            <Typography color='black' fontSize='18px'>Our classes are designed to challenge and inspire you while ensuring a safe and supportive atmosphere for all.</Typography>
                            <Box marginTop='3%'>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Increase Flexibility</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Enhance Strength</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='20px'>Get Better Posture</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={3} marginLeft='5%' marginRight='5%' marginTop='10%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_2.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} marginLeft='5%' marginRight='5%' marginTop='3%'>
                    <Box>
                        <Box>
                            <Typography color='white' fontSize='16px' fontWeight='500'>MENTAL WELL-BEING</Typography>
                            <Typography color='black' fontSize='32px'>Find Harmony in Body and Mind</Typography>
                            <Typography color='black' fontSize='18px'>Yoga enhances physical well-being through improved flexibility and strength, while meditation fosters mental and emotional health by reducing stress, improving concentration, and enhancing sleep. Together, they contribute to overall holistic well-being, promoting physical fitness and mental clarity.</Typography>
                            <Box marginTop='5%'>
                                <Box display='flex' justifyContent='start' marginTop='3%' paddingBottom='2%'>
                                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }}>Get Started Now</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* For md screens (Ipad Pro and Surface Pro) */}
            <Grid paddingBottom='3%' container display={{xs: 'none', sm: 'none', md: 'flex', lg: 'none' }}>
                <Grid item md={5} marginLeft='3%' marginBottom='5%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_1.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5} marginLeft='3%' marginTop='5%'>
                    <Box>
                        <Box>
                            <Typography color='white' fontSize='16px' fontWeight='500'>IMPROVE PHYSICAL HEALTH</Typography>
                            <Typography color='black' fontSize='32px'>Experience, Balance, Strength, and Serenity</Typography>
                            <Typography color='black' fontSize='18px'>Our classes are designed to challenge and inspire you while ensuring a safe and supportive atmosphere for all.</Typography>
                            <Box marginTop='3%'>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='18px'>Increase Flexibility</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='18px'>Enhance Strength</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' marginLeft='2%'>
                                    <Avatar sx={{ backgroundColor: '#000', color: '#000', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                    <Typography color='black' fontSize='18px'>Get Better Posture</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={5.8} marginLeft='3%' marginTop='8%'>
                    <Box>
                        <Box>
                            <Typography color='white' fontSize='16px' fontWeight='500'>MENTAL WELL-BEING</Typography>
                            <Typography color='black' fontSize='32px'>Find Harmony in Body and Mind</Typography>
                            <Typography color='black' fontSize='18px'>Yoga enhances physical well-being through improved flexibility and strength, while meditation fosters mental and emotional health by reducing stress, improving concentration, and enhancing sleep. Together, they contribute to overall holistic well-being, promoting physical fitness and mental clarity.</Typography>
                            <Box marginTop='5%'>
                                <Box display='flex' justifyContent='start' marginTop='3%' paddingBottom='2%'>
                                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }}>Get Started Now</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5} marginLeft='3%'>
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <img src='/images/home/wellness_yoga_2.png' width='100%' />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default WellnessPractice
