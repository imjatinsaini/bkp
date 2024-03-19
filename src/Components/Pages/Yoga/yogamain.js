import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'
import YogaCard from '../../Widgets/yogawidgets/yogacard/yogacard'



const Yogamain = () => {
  return (
    <Box>
        <NewNavbar/>

        <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='48vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/yoga/yogaimg.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px' style={{ fontWeight: 600 }}>Yoga</Typography>
           <img src='/images/yoga/yogatext.png' height='15%'></img>

        
          </Box>
            </Box>
         </Box>


         <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='11vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/yoga/yogaimg.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='12px' style={{ fontWeight: 600 }}>Yoga</Typography>
           <img src='/images/yoga/yogatext.png' height='5%'></img>

        
          </Box>
            </Box>
         </Box>

         <Box marginLeft='3%' marginRight='3%' marginTop='6%' marginBottom='5%'>
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='32px' >Hatha Asanas</Typography>
                

                <img src='/images/yoga/asanas/asanastext.png' height='37vh' width='22%'></img>
                
            </Box>
            <Box display={{ xs: 'flex', sm: 'flex', md: 'block', lg: 'none', xl: 'none' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='12px' >Hatha Asanas</Typography>
                

                <img src='/images/yoga/asanas/asanastext.png' height='10vh' width='22%'></img>
                
            </Box>
         <Grid container>
            <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard imageSrc='images/yoga/asanas/suryakriya.png' asanname='Surya Kriya (सूर्य क्रिया)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/sirasana' imageSrc='images/yoga/asanas/sirasana.png' asanname='Sirsasana (शीर्षासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/sarvangasana' imageSrc='images/yoga/asanas/sarvangasana.png' asanname='Sarvangasana (सर्वांगासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard imageSrc='images/yoga/asanas/halasana.png' asanname='Halasana (हलासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/matsyasana.png' asanname='Matsyasana (मत्स्यासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/Paschimottanasana.png' asanname='Paschimottanasana (पश्चिमोत्तानासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard imageSrc='images/yoga/asanas/bhujangasana.png' asanname='Bhujangasana (भुजंगासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/shalabhasana.png' asanname='Shalabhasana (शलभासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/dhanurasana.png' asanname='Dhanurasana (धनुरासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard imageSrc='images/yoga/asanas/Mayurasana.png' asanname='Mayurasana (मयूरासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/ardhamatsyendrasana.png' asanname='Ardha Matsyendrasana (अर्ध मत्स्येन्द्रासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard imageSrc='images/yoga/asanas/padahasthasana.png' asanname='Pada Hasthasan (पादहस्तासन)'></YogaCard>
                        </Grid>
                        
                    </Box>
        </Grid>
         </Box>
         

            <Footer/>
    </Box>
  )
}

export default Yogamain
