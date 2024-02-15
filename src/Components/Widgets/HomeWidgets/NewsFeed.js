import { ArrowForward, FavoriteBorder, IosShare, Visibility } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, {useState} from 'react'

const NewsFeed = () => {

    const [isPongal, setIsPongal] = useState(false)
    const [isBtn, setIsBtn] = useState(false)

    return (
        <Box bgcolor='#f8f7f4'>
            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%' marginTop='2%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='13px' height='16px' />
                </Paper>
                <Typography color='black' fontSize='24px' marginTop='1%'>BLOG</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='13px' height='16px' />
                </Paper>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%' marginTop='3%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginRight: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='11px' height='13px' />
                </Paper>
                <Typography color='black' fontSize='18px' marginTop='1%'>BLOG</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginLeft: '1.5%', border: 'none' }}>
                    <img src='/images/home/services_sign.png' width='11px' height='13px' />
                </Paper>
            </Box>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='32%' marginRight='32%'>
                <Typography color='black' fontSize='35px' marginTop='2.5%' textAlign='center'>News Feed</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                <Typography color='black' fontSize='15px' marginTop='2.5%' fontWeight='500' textAlign='center'>News Feed</Typography>
            </Box>

            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '7%', border: 'none', borderTop: '5px solid #f24e1e', marginBottom: '2%' }} mx='auto' />
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid #f24e1e', marginBottom: '2%' }} mx='auto' />

            <Grid container marginTop='4%'>
                { /* For larger screens than md */}
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='5%' marginLeft='4%' >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                        <img src= {isPongal ? '/images/home/news_pongal_hover.png': '/images/home/news_pongal.png' } width='100%' onMouseOver={()=>setIsPongal(true)} onMouseOut={()=>setIsPongal(false)} />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '36px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='5%' marginLeft='4%' >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                            <img src='/images/home/news_pongal.png' />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '36px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='0%' marginLeft='4%' >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                            <img src='/images/home/news_pongal.png' />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '36px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                { /* For md and smaller screens */}
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                            <img src='/images/home/news_pongal.png' width='100%' />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '20px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                            <img src='/images/home/news_pongal.png' width='100%' />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '20px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='8%' marginLeft='4%' marginBottom='4%'  >
                    <Box>
                        <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                            <img src='/images/home/news_pongal.png' width='100%' />
                            <Box paddingLeft='4.5%' paddingRight='4.5%' bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px'>
                                <Typography style={{ fontSize: '20px' }}>What to do on Pongal?</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: '500', opacity: '70%' }}>Pongal is a popular harvest festival celebrated in the southern Indian state of Tamil Nadu. It is a time for expressing gratitude to the sun god for a bountiful harvest. Here are some traditional activities.....................read more.</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='start' marginTop='3%'>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton disabled style={{ color: '#1aa11f' }}> <Visibility /> </IconButton>
                                        <Typography style={{ color: '#1aa11f' }}> 547 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#ff0000' }}> <FavoriteBorder /> </IconButton>
                                        <Typography style={{ color: '#ff0000' }}> 345 </Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyItems='center'>
                                        <IconButton style={{ color: '#022150' }}> <IosShare /> </IconButton>
                                        <Typography style={{ color: '#022150' }}> 47 </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            { /* For larger screens than md */}
            <Box display={{xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}} justifyContent='center' marginTop='3%' paddingBottom='2%'>
            <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: isBtn ? '#f24e1e' : 'transparent', color: isBtn ? 'white' : '#f24e1e', border: '1px solid #f24e1e', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none', boxShadow: isBtn ? '0px 2px 2px 2px rgba(0,0,0,0.15)' : 'none' }} onMouseOver={()=>setIsBtn(true)} onMouseOut={()=>setIsBtn(false)}>Read More</Button>
            </Box> 
            { /* For larger screens than md */}
            <Box display={{xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}} justifyContent='center' marginTop='3%' paddingBottom='5%'>
                <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: '#f24e1e', border: '1px solid #f24e1e', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }}>Read more</Button>
            </Box>           
            
        </Box>
    )
}

export default NewsFeed
