import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Asanasdescription from '../../../Widgets/yogawidgets/asanasdescription'

const Sirasana = () => {
    const items = ['To practice Sirsasana, begin by kneeling on the mat and interlocking your fingers, creating a firm base for your forearms.',
     'Place the crown of your head on the mat, forming a triangle with your forearms and head.',
      'Lift your hips towards the ceiling, straightening your legs and coming into an inverted position.',
    'Balance your weight evenly between your forearms and head, engaging your core muscles to stabilize the pose.',
     'Hold the pose for a few breaths, gradually increasing the duration as you build strength and confidence.'];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc='images/yoga/asanasintroimages/sirasana.png' 
        title='Sirasana'
        subtitle1='“Sirsasana is a yoga pose where you balance on'
        subtitle2="your head, known as the “headstand.”"
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>
       <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Sirsasana: The King of Yoga Poses</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Sirsasana: The King of Yoga Poses</Typography>
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Sirsasana, also known as the Headstand pose, is considered the king of all yoga asanas. In this pose, the body is inverted, and the weight is supported on the forearms, while the crown of the head rests lightly on the ground
</Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
        Sirsasana, also known as the Headstand pose, is considered the king of all yoga asanas. In this pose, the body is inverted, and the weight is supported on the forearms, while the crown of the head rests lightly on the ground
</Typography>
<Typography color='black' fontSize='24px' paddingBottom='30px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>How to Practice?</Typography>
<Typography color='black' fontSize='14px' paddingBottom='30px' sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>How to Practice?</Typography>
   
<ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px', paddingBottom:'50px' }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} variant="body1">{item}</Typography>
              <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} fontSize='12px'>{item}</Typography>
            </li>
          ))}
        </ul>

        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px' paddingBottom='30px'>Benefits</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px' paddingBottom='30px'>Benefits</Typography>

        <Box sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        <img  src='images/yoga/asanasbenefits/sirasanabenefits.png' width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src='images/yoga/asanasbenefits/sirasanabenefits.png' width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
    </Box>
  )
}

export default Sirasana
