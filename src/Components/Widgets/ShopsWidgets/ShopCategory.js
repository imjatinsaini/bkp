import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const ShopCategory = () => {
    return (
        <Box>

            {/* For lg and xl */}
            <Grid xs={12} marginRight='35%' marginLeft='35%' marginTop='3%' display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='48px' textAlign='center'>
                        Shop by category
                    </Typography>
                </Box>
                <Box>
                    <img src='/images/services/services_underline.png' height='auto' width='100%' />
                </Box>
            </Grid>
            {/* For md */}
            <Grid xs={12} marginRight='35%' marginLeft='35%' marginTop='3%' display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='32px' textAlign='center'>
                        Shop by category
                    </Typography>
                </Box>
                <Box>
                    <img src='/images/services/services_underline.png' height='auto' width='100%' />
                </Box>
            </Grid>
            {/* For xs and sm */}
            <Grid xs={12} marginRight='35%' marginLeft='35%' marginTop='3%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='13px' textAlign='center'>
                        Shop by category
                    </Typography>
                </Box>
                <Box>
                    <img src='/images/services/services_underline.png' height='auto' width='100%' />
                </Box>
            </Grid>

            <Grid container>
                <Box display='flex' marginBottom='1%'>
                    <Grid item xs={0.4}></Grid>
                    <Grid item xs={5.5}>
                        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' height='100%'>
                            <Box position='relative'>
                                <img src='/images/shops/shop_rudraksha.png' width='100%' />
                                <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='26px'>Rudraksha</Typography>
                                <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='20px'>Rudraksha</Typography>
                                <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='10px'>Rudraksha</Typography>
                            </Box>
                            <Box position='relative'>
                                <img src='/images/shops/shop_books.png' width='100%' />
                                <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='3%' fontSize='26px'>Books</Typography>
                                <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='3%' fontSize='20px'>Books</Typography>
                                <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='3%' fontSize='10px'>Books</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={0.2}></Grid>
                    <Grid item xs={5.5}>
                        <Box position='relative'>
                            <img src='/images/shops/shop_consecrated.png' width='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' top='8%' left='3%' fontSize='26px'>Temple and Consecrated</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' left='3%' fontSize='20px'>Temple and Consecrated</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' left='3%' fontSize='10px'>Temple and Consecrated</Typography>
                        </Box>
                    </Grid>
                </Box>

                <Box display='flex' width='100%' marginBottom='1%'>
                    <Grid item xs={0.4}></Grid>
                    <Grid item xs={2.9}>
                        <Box height='100%' position='relative'>
                            <img src='/images/shops/shop_health.png' width='100%' height='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='3%' fontSize='26px'>Health & Immunity</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='3%' fontSize='20px'>Health & Immunity</Typography>
                            <Box position='absolute' bottom='10%' right='3%' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                                <Typography color='white' fontWeight='500' fontSize='10px'>Health &</Typography>
                                <Typography color='white' fontWeight='500' fontSize='10px'>Immunity</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={0.2}></Grid>
                    <Grid item xs={5}>
                        <Box height='100%' position='relative'>
                            <img src='/images/shops/shop_yoga.png' width='100%' height='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='5%' fontSize='26px'>Yoga Store</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='5%' fontSize='20px'>Yoga Store</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' right='5%' fontSize='10px'>Yoga Store</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0.2}></Grid>
                    <Grid item xs={2.9}>
                        <Box height='100%' position='relative'>
                            <img src='/images/shops/shop_fast.png' width='100%' height='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' top='8%' right='3%' fontSize='26px'>Fasting Foods</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' right='3%' fontSize='20px'>Fasting Foods</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' right='3%' fontSize='10px'>Fasting Foods</Typography>
                        </Box>
                    </Grid>
                </Box>

                <Box display='flex' marginBottom='1%'>
                    <Grid item xs={0.4}></Grid>
                    <Grid item xs={5.5}>
                        <Box height='100%' position='relative'>
                            <img src='/images/shops/shop_spiritual.png' width='100%' height='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='26px'>Spiritual Accessories</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='20px'>Spiritual Accessories</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' bottom='10%' left='3%' fontSize='10px'>Spiritual Accessories</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0.2}></Grid>
                    <Grid item xs={5.5}>
                        <Box height='100%' position='relative'>
                            <img src='/images/shops/shop_clothing.png' width='100%' height='100%' />
                            <Typography display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} position='absolute' color='white' fontWeight='500' top='8%' right='3%' fontSize='26px'>Clothing</Typography>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' right='3%' fontSize='20px'>Clothing</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} position='absolute' color='white' fontWeight='500' top='10%' right='3%' fontSize='10px'>Clothing</Typography>
                        </Box>
                    </Grid>
                </Box>

            </Grid>


            <Box bgcolor='#f9bf94' width='100%' marginTop='3%' marginBottom='1%'>
                <Box display='flex' marginLeft='10%' marginRight='10%' paddingTop='2%' paddingBottom='2%'>
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%'>
                            <img src='/images/shops/shop_authentic.png' width='100%' />
                        </Box>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} textAlign='center' fontWeight='500'>100% Authentic</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} textAlign='center' fontWeight='500' fontSize='8px'>100% Authentic</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%'>
                            <img src='/images/shops/shop_local.png' width='100%' />
                        </Box>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} textAlign='center' fontWeight='500'>Locally Sourced</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} textAlign='center' fontWeight='500' fontSize='8px'>Locally Sourced</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%'>
                            <img src='/images/shops/shop_traditional.png' width='100%' />
                        </Box>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} textAlign='center' fontWeight='500'>Traditional Citizenship</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} textAlign='center' fontWeight='500' fontSize='8px'>Craftsmanship</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%'>
                            <img src='/images/shops/shop_eco.png' width='100%' />
                        </Box>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} textAlign='center' fontWeight='500'>Eco Friendly Product</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} textAlign='center' fontWeight='500' fontSize='8px'>Eco Friendly</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ShopCategory
