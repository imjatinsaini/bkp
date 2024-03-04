import { Search } from '@mui/icons-material'
import { Box, Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const MandirIntro = ({ mandir_type, mandir_image }) => {
    return (
        <Box>
            <MandirImage mandir_type={mandir_type} mandir_image={mandir_image} />
            <MandirSearch />
        </Box>
    )
}

const MandirImage = ({ mandir_type, mandir_image }) => {
    return (
        <Box paddingTop='100px' bgcolor='#f8f7f4'>
            {/* For lg and xl */}
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} sx={{ height: '90vh' }}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: mandir_image, backgroundPosition: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='96px' color='white'>{mandir_type}</Typography>
                    <Box sx={{ width: '28%', border: 'none', borderTop: '5px solid #f8f7f4', marginBottom: '2%' }} mx='auto' />
                </Paper>
            </Box>
            {/* For md*/}
            <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} sx={{ height: '35vh' }}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: mandir_image, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='76px' color='white'>{mandir_type}</Typography>
                    <Box sx={{ width: '28%', border: 'none', borderTop: '5px solid #f8f7f4', marginBottom: '2%' }} mx='auto' />
                </Paper>
            </Box>
            {/* For xs and sm */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{ height: '20vh' }}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: mandir_image, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='32px' color='white'>{mandir_type}</Typography>
                    <Box sx={{ width: '35%', border: 'none', borderTop: '3px solid #f8f7f4', marginBottom: '2%' }} mx='auto' />
                </Paper>
            </Box>
        </Box>
    )
}

const MandirSearch = () => {
    return (
        <Box>
            {/* For lg and xl */}
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} sx={{ height: '60vh' }}>
                <Paper sx={{ backgroundImage: "url('/images/mandir/mandir_search.png')", backgroundSize: 'cover', height: '100%', backgroundPosition: 'center' }}>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingTop='5%'>
                        <Box>
                            <Typography fontSize='32px' fontWeight='500'>Search your mandir here?</Typography>
                        </Box>
                        <Box marginTop='2%' width='40%'>
                            <TextField placeholder='Type mandir name here' fullWidth='true' InputProps={{ startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>), endAdornment: (<InputAdornment position='end'><img src='/images/home/search_icon_trailing.png' alt='trailing icon' width='35px' height='35px' /></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='search-field'></TextField>
                        </Box>
                        <Box marginTop='3%'>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            {/* For md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }} sx={{ height: '23vh' }}>
                <Paper sx={{ backgroundImage: "url('/images/mandir/mandir_search.png')", backgroundSize: 'cover', height: '100%', backgroundPosition: 'center' }}>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingTop='5%'>
                        <Box>
                            <Typography fontSize='25px' fontWeight='500'>Search your mandir here?</Typography>
                        </Box>
                        <Box marginTop='2%' width='40%'>
                            <TextField placeholder='Type mandir name here' fullWidth='true' InputProps={{ startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>), endAdornment: (<InputAdornment position='end'><img src='/images/home/search_icon_trailing.png' alt='trailing icon' width='35px' height='35px' /></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='search-field'></TextField>
                        </Box>
                        <Box marginTop='4%'>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px', marginRight: '10px' }}>Shri Banke Bihari Prasad</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            {/* For xs and sm */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} sx={{ height: '25vh' }}>
                <Paper sx={{ backgroundImage: "url('/images/mandir/mandir_search.png')", backgroundSize: 'cover', height: '100%', backgroundPosition: 'center' }}>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' paddingTop='5%'>
                        <Box>
                            <Typography fontSize='16px' fontWeight='500'>Search your mandir here?</Typography>
                        </Box>
                        <Box marginTop='2%' width='80%'>
                            <TextField placeholder='Type mandir name here' fullWidth='true' style={{}} InputProps={{ startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>), endAdornment: (<InputAdornment position='end'><img src='/images/home/search_icon_trailing.png' alt='trailing icon' width='35px' height='35px' /></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='search-field'></TextField>
                        </Box>
                        <Box marginTop='6%' marginRight='2%' marginLeft='2%' display='inline-flex'>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px' }}>
                                <Typography fontWeight='bold' fontSize='10px'>Shri Banke Bihari Prasad</Typography>
                            </Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px' }}>
                                <Typography fontWeight='bold' fontSize='10px'>Shri Banke Bihari Prasad</Typography>
                            </Button>
                            <Button variant='outlined' style={{ backgroundColor: 'transparent', opacity: '76%', color: '#000', border: '1px solid black', borderRadius: '20px' }}>
                                <Typography fontWeight='bold' fontSize='10px'>Shri Banke Bihari Prasad</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default MandirIntro
