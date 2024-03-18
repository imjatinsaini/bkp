import { Box, Typography } from '@mui/material'
import React from 'react'

const Asanasdescription = (title, info,) => {
    
  return (
    <Box marginLeft='17%' marginRight='17%' marginTop='6%' marginBottom='5%'>
    <Box sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography color='black' fontSize='24px'>{title}</Typography>
        <Typography variant="body1" paddingTop='24px' paddingBottom='70px'>
       {info}
</Typography>
<Typography color='black' fontSize='24px' paddingBottom='30px'>How to Practice?</Typography>

    </Box>
</Box>
  )
}

export default Asanasdescription
