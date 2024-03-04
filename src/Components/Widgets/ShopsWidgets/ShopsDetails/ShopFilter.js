import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const ShopFilter = () => {

    return (
        <Box>
            <Box display='flex' marginTop='5%'>
                <Typography fontSize='20px' style={{ textDecoration: 'underline' }}>15 result found for ‎ </Typography>
                <Typography fontSize='20px' color='#b36a3e' style={{ textDecoration: 'underline' }}>"Rudraksha"</Typography>
            </Box>
            <Grid container marginTop='2%' marginBottom='2%'>
                <Grid item xs={1.6}>
                    <Box>
                        <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} fontSize='20px' fontWeight='500'>Category</Typography>
                        <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='8px' fontWeight='500'>Category</Typography>
                    </Box>
                </Grid>
                <Grid item xs={10.4}>
                    <Box>
                        <SelectCategory text='All' />
                        <SelectCategory text='Ek Mukhi' />
                        <SelectCategory text='Do Mukhi' />
                        <SelectCategory text='Teen Mukhi' />
                        <SelectCategory text='Char Mukhi' />
                        <SelectCategory text='Panch Mukhi' />
                        <SelectCategory text='Chah Mukhi' />
                        <SelectCategory text='Saat Mukhi' />
                        <SelectCategory text='Aath Mukhi' />
                        <SelectCategory text='Nau Mukhi' />
                        <SelectCategory text='Das Mukhi' />
                        <SelectCategory text='Gyarah Mukhi' />
                        <SelectCategory text='Barah Mukhi' />
                    </Box>
                </Grid>
            </Grid>

            <Box>
                <Grid container>

                    <Grid item xs={1.6}>
                        <Box>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} fontSize='20px' fontWeight='500'>Price</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='8px' fontWeight='500'>Price</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10.4}>
                        <Box>
                            <SelectPrice text='Rs. 0 - Rs. 300' />
                            <SelectPrice text='Rs. 300 - Rs. 600' />
                            <SelectPrice text='Rs. 600 - Rs. 1000+' />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginBottom: '2%', marginTop: '2%' }} mx='auto' />

        </Box>
    )
}

const SelectPrice = ({ text }) => {

    const [isPrice, setIsPrice] = useState(false)

    return (
        <Button variant='text' style={{ border: isPrice ? 'none' : '1px solid black', backgroundColor: isPrice ? '#f24e1e' : 'transparent', textTransform: 'none', borderRadius: '10px', marginRight: '2%', marginBottom: '2%', marginBottom: '1%' }} onClick={() => setIsPrice(!isPrice)}>
            <Typography color={isPrice ? 'white' : 'black'} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                {text}
            </Typography>
            <Typography color={isPrice ? 'white' : 'black'} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='8px'>
                {text}
            </Typography>
        </Button>
    )
}

const SelectCategory = ({ text }) => {

    const [isCategory, setIsCategory] = useState(false)

    return (
        <Button variant='text' style={{ border: isCategory ? 'none' : '1px solid black', backgroundColor: isCategory ? '#f24e1e' : 'transparent', textTransform: 'none', borderRadius: '10px', marginRight: '2%', marginBottom: '2%', marginBottom: '1%' }} onClick={() => setIsCategory(!isCategory)}>
            <Typography color={isCategory ? 'white' : 'black'} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                {text}
            </Typography>
            <Typography color={isCategory ? 'white' : 'black'} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='8px'>
                {text}
            </Typography>
        </Button>
    )
}

export default ShopFilter
