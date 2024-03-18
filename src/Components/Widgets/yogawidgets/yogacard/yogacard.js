import { Box, Button, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const YogaCard = ({asanname, imageSrc, to}) => {

    return (
        <NavLink to={to} style={{textDecoration:'none'}}>
            <Box>
            <Box sx={{border: '1px solid rgba(0,0,0,0.3)', borderRadius: '5px'}}>
                <Box marginLeft='5%' marginRight='5%' marginTop='3%' >
                    <img src={imageSrc} width='100%' backgroundSize='cover' />
                </Box>
                <Box marginTop='3%' sx={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: '5px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
                    <Box marginLeft='20%' marginRight='10%'>
                        <Typography textAlign='center' sx={{ 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis' 
        }} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }} fontSize='20px' color='black'>
                        {asanname}
                        </Typography>
                        <Typography textAlign='center' sx={{ 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis' 
        }} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} fontSize='9px' color='black'>
                        {asanname}
                        </Typography>
                    </Box>
                    
                    
                </Box>
            </Box>
        </Box>
        </NavLink>
        
    )
}

export default YogaCard
