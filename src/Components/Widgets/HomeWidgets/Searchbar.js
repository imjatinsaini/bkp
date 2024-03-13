import React from 'react'
import './../../../Styles/Searchbar.css'
import { Box, Button, TextField, Grid, Paper, Typography, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
    return (
        <Box style={{ backgroundImage: "url('/images/home/search_background.png')", backgroundSize: 'cover' , marginTop: '20px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', paddingBottom: '20px', }} children={
            <Grid container>
                { /* For larger screens than md */ }
                <Grid item md={6} display={{xs: 'none', sm: 'none', md: 'none', lg:'inline-flex'}}>
                    <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                        <img src='/images/home/search_image.png' alt='search' style={{ width: '90%', paddingLeft: '8%', paddingTop: '7%', paddingBottom: '7%' }} />
                    </Paper>
                </Grid>
                <Grid item md={6} display={{xs: 'none', sm: 'none', md: 'none', lg: 'inline-flex'}} container justifyContent='center'>
                    <Grid item xs={10} md={10} container alignContent='end' justifyContent='center'>
                        <Typography align='center' fontSize='32px' fontWeight='500'>What are you looking for?</Typography>
                    </Grid>
                    <Grid item  md={10} container alignContent='center' justifyContent='center'>
                        <TextField placeholder='Search' fullWidth='true' InputProps={{ startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>), endAdornment: (<InputAdornment position='end'><img src='/images/home/search_icon_trailing.png' alt='trailing icon' width='35px' height='35px' /></InputAdornment>) }} sx={{border: 'none',"& fieldset": { border: 'none' },}} className='search-field'></TextField>
                    </Grid>
                    <Grid item display={{ xs: 'none', sm: 'none', md: 'none', lg: 'center' }} md={10} container justifyContent='center'>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Rudraksha</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Kurta</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Shiva</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Dhoti</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Ganesh</Button>
                    </Grid>
                </Grid>

                { /* For sm and xs screens */ }
                <Grid item xs={12} display={{xs: 'inline-flex', sm: 'inline-flex', md: 'inline-flex', lg: 'none'}}>
                    {/* <Paper variant='outlined' style={{ background: 'transparent', border: 'none', paddingLeft: '10px' }}>
                        <img src='/images/home/search_image.png' alt='search' style={{ width: '100%' }} />
                    </Paper> */}
                </Grid>
                <Grid item display={{xs: 'inline-flex', sm: 'inline-flex', md: 'inline-flex', lg: 'none'}} container justifyContent='center'>
                    <Grid item xs={10} md={10} container alignContent='end' justifyContent='center' marginTop='5%'>
                        <Typography variant='h6' align='center'>What are you looking for?</Typography>
                    </Grid>
                    <Grid item  md={10} container alignContent='center' justifyContent='center' marginTop='3%' marginRight='5%' marginLeft='5%'>
                        <TextField placeholder='Search' fullWidth='true' InputProps={{ startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>), endAdornment: (<InputAdornment position='end'><img src='/images/home/search_icon_trailing.png' alt='trailing icon' width='35px' height='35px' /></InputAdornment>) }} sx={{border: 'none',"& fieldset": { border: 'none' },}} className='search-field'></TextField>
                    </Grid>
                    <Grid item display={{ xs: 'inline-flex', sm: 'inline', md: 'inline-flex', lg: 'none' }} md={10} container justifyContent='center' marginTop='5%' marginRight='5%' marginLeft='5%'>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px', marginTop: '2%' }}>Rudraksha</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px', marginTop: '2%' }}>Kurta</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px', marginTop: '2%' }}>Shiva</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px', marginTop: '2%' }}>Dhoti</Button>
                        <Button variant='outlined' style={{ backgroundColor: '#ffffff', opacity: '76%', color: '#000', border: 'none', borderRadius: '20px', marginRight: '10px', marginTop: '2%' }}>Ganesh</Button>
                    </Grid>
                </Grid>
            </Grid>
        }>
        </Box>
    )
}

export default Searchbar
