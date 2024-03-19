import React from 'react';
import { Box, Typography } from '@mui/material';

const Asanasdescription = ({ title, info, items, imgSrc }) => {
  return (
    <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
      <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} color='black' fontSize='24px'>{title}</Typography>
      <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} color='black' fontSize='14px'>{title}</Typography>
      <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
        {info}
      </Typography>

      <Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
        {info}
      </Typography>
      <Typography color='black' fontSize='24px' paddingBottom='30px' sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>How to Practice?</Typography>
      <Typography color='black' fontSize='14px' paddingBottom='30px' sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }}>How to Practice?</Typography>

      <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px', paddingBottom: '50px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} variant="body1">{item}</Typography>
            <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} fontSize='12px'>{item}</Typography>
          </li>
        ))}
      </ul>

      <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} color='black' fontSize='24px' paddingBottom='30px'>Benefits</Typography>
      <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} color='black' fontSize='14px' paddingBottom='30px'>Benefits</Typography>

      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
        <img src={imgSrc} width='100%' height='50%'></img>
      </Box>


      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }}>
        <img src={imgSrc} width='350h' height='70%'></img>
      </Box>
    </Box>
  );
};

export default Asanasdescription;
