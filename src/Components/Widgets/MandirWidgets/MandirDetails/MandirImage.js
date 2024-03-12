import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const MandirImage = ({
    image,
    name,
    location,
    state,
    country,
    best_time,
    languages,
    timing,
    photography,
    intro_1,
    intro_2,
    history_1,
    history_2,
    history_quote

}) => {
    return (
        <Grid container paddingTop='100px'>
            <Grid item md={3} marginRight='3%'>
                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                    <img src={image} width='100%' />
                </Paper>
            </Grid>
            <Grid item md={8}>
                <Box>
                    <Typography fontSize='24px' style={{ textDecoration: 'underline' }}>
                        {name}
                    </Typography>
                    <Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Location
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {location}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                State
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {state}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Country
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {country}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Best Season To Visit
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {best_time}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Languages
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {languages}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Temple Timing
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {timing}
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Photography
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                {photography}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Box marginTop='4%'>
                <Box>
                    <Typography style={{ fontSize: '20px', fontWeight: '500' }}>Introduction</Typography>
                </Box>
                <Box>
                    <Typography style={{ fontSize: '16px' }} marginTop='1%'>
                        <p>
                            {intro_1}
                        </p>
                        <p>
                            {intro_2}
                        </p>
                    </Typography>
                </Box>
            </Box>

            <Box marginTop='4%'>
                <Box>
                    <Typography style={{ fontSize: '20px', fontWeight: '500' }}>History</Typography>
                </Box>
                <Box>
                    <Typography style={{ fontSize: '16px' }} marginTop='1%'>
                        <p>
                            {history_1}
                        </p>
                        {history_quote!=='' && (<Box>
                            <p style={{ color: '#ff6505' }}>
                                {history_quote}
                            </p>
                        </Box>
                        )}
                        <p>
                            {history_2}
                        </p>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginTop: '3%', marginBottom: '2%' }} mx='auto' />
        </Grid >
    )
}

export default MandirImage
