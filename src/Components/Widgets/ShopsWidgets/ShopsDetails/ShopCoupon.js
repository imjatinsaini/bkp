import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const ShopCoupon = () => {
    return (
        <Box marginTop='5%'>
            <Box bgcolor='#093649'>

                <Grid container display='flex' alignItems='center' justifyContent='space-between' >
                    <Grid item xs={0} />
                    <Grid item xs={2.8}>
                        <Box marginBottom='5%' marginTop='5%' width='80%'>
                            <img src='/images/shops/shop_coupon.png' width='100%' />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex' justifyContent='start' alignItems='flex-start'>
                            <Box>
                                <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='32px' fontWeight='500' color='#ffffff'>
                                    FLAT
                                </Typography>
                                <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='24px' fontWeight='500' color='#ffffff'>
                                    FLAT
                                </Typography>
                                <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='14px' fontWeight='500' color='#ffffff'>
                                    FLAT
                                </Typography>
                            </Box>
                            <Box display='flex'>
                                <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='64px' fontWeight='500' color='#e98607'>
                                    20%
                                </Typography>
                                <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='48px' fontWeight='500' color='#e98607'>
                                    20%
                                </Typography>
                                <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='20px' fontWeight='500' color='#e98607'>
                                    20%
                                </Typography>

                                <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='64px' fontWeight='500' color='#e98607'>
                                    OFF
                                </Typography>
                                <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='48px' fontWeight='500' color='#e98607'>
                                    OFF
                                </Typography>
                                <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='20px' fontWeight='500' color='#e98607'>
                                    OFF
                                </Typography>
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='20px' fontWeight='500' color='#ffffff'>
                                On your first order.
                            </Typography>
                            <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='16px' fontWeight='500' color='#ffffff'>
                                On your first order.
                            </Typography>
                            <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='10px' fontWeight='500' color='#ffffff'>
                                On your first order.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box width='50%' display='flex' justifyContent='center' marginBottom='1%'>
                            <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='24px' color='#ffffff'>
                                USE CODE
                            </Typography>
                            <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='16px' color='#ffffff'>
                                USE CODE
                            </Typography>
                            <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='8px' color='#ffffff'>
                                USE CODE
                            </Typography>
                        </Box>
                        <Box border='1px dashed white' sx={{borderWidth: '3px'}} borderRadius='10px'  width='50%' display='flex' justifyContent='center'>
                            <Typography display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}} fontSize='48px' color='#ffffff' style={{userSelect: 'text'}}>
                                BKP20
                            </Typography>
                            <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}} fontSize='32px' color='#ffffff' style={{userSelect: 'text'}}>
                                BKP20
                            </Typography>
                            <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} fontSize='10px' color='#ffffff' style={{userSelect: 'text'}}>
                                BKP20
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ShopCoupon
