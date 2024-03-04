import { Box, Button, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

const ShopCard = () => {

    const [isCart, setIsCart] = useState(false)
    const [isImage, setIsImage] = useState('contrast(80%)')

    return (
        <Box>
            <Box>
                <Box>
                    <img src='/images/shops/card/card_rudraksha.png' width='100%' style={{ filter: isImage }} onMouseOver={() => setIsImage('contrast(110%)')} onMouseOut={() => setIsImage('contrast(80%)')} />
                </Box>
                <Box marginTop='3%' sx={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: '5px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
                    <Box marginLeft='10%' marginRight='10%'>
                        <Typography textAlign='center' display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                            Rudraksha Panchmukhi Authentic (8mm)
                        </Typography>
                        <Typography textAlign='center' display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='7px'>
                            Rudraksha Panchmukhi Authentic (8mm)
                        </Typography>
                    </Box>
                    <Box marginLeft='10%' marginRight='10%' marginTop='3%'>
                        <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} alignItems='center' justifyContent='space-between'>
                            <Typography fontSize='20px' fontWeight='500'>
                                ₹ 400
                            </Typography>
                            <Rating defaultValue={3.5} precision={0.5} readOnly />
                        </Box>
                        <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' }} alignItems='center' justifyContent='space-between'>
                            <Typography fontSize='16px' fontWeight='500'>
                                ₹ 400
                            </Typography>
                            <Rating defaultValue={3.5} precision={0.5} style={{ fontSize: '16px' }} readOnly />
                        </Box>
                        <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent='space-between'>
                            <Typography fontSize='7px' fontWeight='500'>
                                ₹ 400
                            </Typography>
                            <Rating defaultValue={3.5} precision={0.5} style={{ fontSize: '7px' }} readOnly />
                        </Box>
                    </Box>
                    <Box marginTop='3%'>
                        <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} justifyContent='center'>

                            <Button style={{ width: '80%', backgroundColor: isCart ? 'transparent' : '#eea94f', border: isCart ? '2px solid #eea94f' : 'none', fontWeight: '500', textTransform: 'none', marginBottom: '5%', }} onMouseOver={() => setIsCart(true)} onMouseOut={() => setIsCart(false)}>
                                <Typography color={isCart ? '#eea94f' : 'white'}>
                                    Add to Cart
                                </Typography>
                            </Button>

                        </Box>

                        <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent='center'>

                            <Button size='small' style={{ width: '80%', backgroundColor: isCart ? 'transparent' : '#eea94f', border: isCart ? '2px solid #eea94f' : 'none', fontWeight: '500', textTransform: 'none', marginBottom: '5%', }} onMouseOver={() => setIsCart(true)} onMouseOut={() => setIsCart(false)}>
                                <Typography color={isCart ? '#eea94f' : 'white'} fontSize='5px'>
                                    Add to Cart
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ShopCard
