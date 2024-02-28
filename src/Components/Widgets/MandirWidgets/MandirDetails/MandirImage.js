import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const MandirImage = () => {
    return (
        <Grid container paddingTop='100px'>
            <Grid item md={3} marginRight='3%'>
                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                    <img src='/images/mandir/north/banke_bihari_vrindavan.png' width='100%' />
                </Paper>
            </Grid>
            <Grid item md={8}>
                <Box>
                    <Typography fontSize='24px' style={{textDecoration: 'underline'}}>
                        Sh Banke Bihari Prasad Vrindavan (Vrindavan, Uttar Pradesh)
                    </Typography>
                    <Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Location
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : Vrindavan, Mathura
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                State
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : Uttar Pradesh
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Country
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : India
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Best Season To Visit
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : All
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Languages
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : Hindi
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Temple Timing
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : 7:00 AM to 8:00 PM
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography style={{ color: '#e98607', fontWeight: '500' }}>
                                Photography
                            </Typography>
                            <Typography marginLeft='0.5%'>
                                : Not Allowed
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Box marginTop='4%'>
                <Box>
                    <Typography style={{fontSize: '20px', fontWeight: '500'}}>Introduction</Typography>
                </Box>
                <Box>
                    <Typography style={{fontSize: '16px'}} marginTop='1%'>
                        <p>
                        Shree Banke Bihari or Bankey Bihari Mandir atVrindavan in Mathura district is one of the holiest temples of Lord Krishan inIndia. The idol is much older and was originally worshipped at Nidhivana till1863. The idol of Lord Krishna stands in Tribhanga pose. The literally meaningof Tribhanga is breaks at three places or bends at three places in the body-atthe neck, waist and knee making a perfect “S” shape. The Tribhanga posture ofidol is considered as the most graceful of all types.
                        </p>
                        <p>
                        The style of celebrating every festival in the templeis unique. Bankey Bihari Ji is worshipped and looked after as a child. Thedeity is dressed up and offered Bhog according to the season. Unlike othertemples, there are no bells or conch in the temple as Bankey Bihari Ji does notlike the sound of bells or conch. You can hear only one sound that is chant of ‘radhanaam’. Soon a devotee enters in the temple; he forgets his all anxieties and feelsan ecstasy of joy. Thakur Ji is said tobe very kind hearted. He destroys all problems of His devotees and blesses themwith divine grace.
                        </p>
                    </Typography>
                </Box>
            </Box>

            <Box marginTop='4%'>
                <Box>
                    <Typography style={{fontSize: '20px', fontWeight: '500'}}>History</Typography>
                </Box>
                <Box>
                    <Typography style={{fontSize: '16px'}} marginTop='1%'>
                        <p>
                        As per scripture,this temple of Shree Bankey Bihari Ji was constructed by Swami Haridas (LalitaSakhi in Dvapara Yuga), a guru of singing legend Tansen. One day pupils ofSwami Haridas requested him to sing a verse. On their request Swami Haridassang the verse in Nidhivan-
                        </p>
                        <p style={{color: '#ff6505'}}>
                        "माई री सहज जोरी प्रगट भाई जू रंग की गौर स्याम घन दामिनीजैसेन। प्रथम हं आहुति अब हं अगेन हुन रहिहै न तरिहै तैसैं।। अंग अंगकी उजरै सुघरै चतुराई सुंदरता अइसैं।। श्री हरिदास के स्वामी श्यामाकुंजबिहारी सम वैस वैसैं।"
                        </p>
                        <p>
                        The scripture says that on singing the verse the Celestial couple Shyama Shyam (Radha Krishna) appeared before Swami Haridas andhis disciples. On the request of Shri Swami Haridas Ji and his pupils thecouple merged into one and the idol of Shree Bankey Bihari Ji appeared there. The same idol was established in Nidhivan.
                        </p>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '100%', border: 'none', borderTop: '1px solid black', marginTop: '3%', marginBottom: '2%' }} mx='auto' />
        </Grid>
    )
}

export default MandirImage
