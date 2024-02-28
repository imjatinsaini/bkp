import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from './../HomeWidgets/Footer'
import { NavLink } from 'react-router-dom'

const ShopEnd = () => {
    return (
        <Box>
            <ShopHead />
            <Grid container marginBottom='2%'>
                <Grid item xs={0.4}></Grid>
                <Grid item xs={3}>
                    <ShopCard />
                </Grid>
                <Grid item xs={1.1}></Grid>
                <Grid item xs={3}>
                    <ShopCard />
                </Grid>
                <Grid item xs={1.1}></Grid>
                <Grid item xs={3}>
                    <ShopCard />
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}

const ShopCard = () => {

    const [isBuy, setIsBuy] = useState(false)
    const [isCart, setIsCart] = useState(false)

    return (
        <Box>
            <NavLink to='/shop-buddha' style={{ textDecoration: 'none' }}>
                <Box position='relative'>
                    <img src='/images/shops/shop_buddha.png' width='100%' />
                    <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                        <NavLink to='/buy-now' style={{ textDecoration: 'none' }}>
                            <Button style={{ position: 'absolute', left: '10%', width: '80%', bottom: '30%', backgroundColor: isBuy ? 'transparent' : 'rgba(242, 78, 30, 0.7)', border: isBuy ? '2px solid #f24e1e' : 'none', color: 'white', fontWeight: '500', textTransform: 'none' }} onMouseOver={() => setIsBuy(true)} onMouseOut={() => setIsBuy(false)}>
                                Buy Now
                            </Button>
                        </NavLink>
                        <NavLink to='/add-to-cart' style={{ textDecoration: 'none' }}>
                            <Button style={{ textDecoration: 'underline', position: 'absolute', left: '10%', width: '80%', bottom: '15%', backgroundColor: isCart ? 'transparent' : 'rgba(233, 134, 7, 0.7)', border: isCart ? '2px solid #e98607' : 'none', color: 'white', fontWeight: '500', textTransform: 'none' }} onMouseOver={() => setIsCart(true)} onMouseOut={() => setIsCart(false)}>
                                Add to Cart
                            </Button>
                        </NavLink>
                    </Box>
                </Box>
                <Box border='1px solid rgba(0,0,0,0.4)' borderTop='none' borderRadius='0px 0px 5px 5px' display='flex' flexDirection='column' alignItems='center'>
                    <Box marginLeft='10%' marginRight='10%'>
                        <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} textAlign='center' fontWeight='500' fontSize='20px' color='black'>Rudraksha Panchmukhi Authentic (8mm)</Typography>
                        <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} textAlign='center' fontWeight='500' fontSize='8px' color='black'>Rudraksha Panchmukhi Authentic (8mm)</Typography>
                    </Box>
                    <Box>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                            <Rating defaultValue={3.5} precision={0.5} readOnly />
                        </Box>
                        <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                            <Rating defaultValue={3.5} precision={0.5} style={{ fontSize: '10px' }} readOnly />
                        </Box>
                    </Box>
                    <Box display='flex'>
                        <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                            <Typography style={{ color: '#000', opacity: '70%' }} fontSize='25px' textAlign='center'>₹</Typography>
                            <Typography fontWeight='500' fontSize='32px' textAlign='center' color='black'>400</Typography>
                        </Box>
                        <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                            <Typography style={{ color: '#000', opacity: '70%' }} fontSize='8px' textAlign='center'>₹</Typography>
                            <Typography fontWeight='500' fontSize='12px' textAlign='center' color='black'>400</Typography>
                        </Box>
                    </Box>
                </Box>
            </NavLink>
        </Box>
    )
}

const ShopHead = () => {
    return (
        <Box marginRight='35%' marginLeft='35%' marginTop='5%' marginBottom='3%'>
            {/* For lg and xl */}
            <Grid xs={12} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='48px' textAlign='center'>
                        Best Seller
                    </Typography>
                </Box>
            </Grid>
            {/* For md */}
            <Grid xs={12} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='32px' textAlign='center'>
                        Best Seller
                    </Typography>
                </Box>
            </Grid>
            {/* For xs and sm */}
            <Grid xs={12} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='20px' textAlign='center'>
                        Best Seller
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}

export default ShopEnd
