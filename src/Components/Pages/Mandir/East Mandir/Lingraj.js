import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Lingaraj = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/lingraj.png'
                  name='Lingaraj Temple'
                  location=':Ekamra Kshetra, Bhubaneswar'
                  state=':Odisha'
                  country=':India'
                  best_time=':October-February (Pleasant weather)'
                  languages=':Odia, Hindi'
                  timing=':6:00 AM to 10:00 PM'
                  photography=':Not Allowed'
                  intro_1="Lingaraj Temple, also known as the Tribhubaneswar Temple, is one of the oldest and most prominent Hindu temples in Bhubaneswar, Odisha. It is dedicated to Shiva, the destroyer and regenerator god in the Hindu trinity. The temple stands as a magnificent example of Kalinga architecture, an architectural style that flourished in Odisha during the medieval period. Lingaraj Temple is a significant pilgrimage site and a major tourist attraction, drawing visitors with its intricate carvings, towering shikhara (spire), and rich historical significance."
                intro_2="Lingaraj Temple continues to be a revered pilgrimage site and a testament to the architectural and artistic heritage of Odisha. It attracts devotees and visitors seeking spiritual solace, cultural immersion, and a glimpse into the rich history of this ancient temple."
                history_1="The exact date of construction for the Lingaraj Temple remains uncertain, but estimates suggest it was built between the 6th and 11th centuries CE. Historical records attribute the construction of the temple to the Somavamsi dynasty, a powerful dynasty that ruled Odisha during the medieval period. King Jajati Kesari is considered the principal architect behind the temple's construction." 
                
                
                history_2="Lingaraj Temple holds immense significance for Shaivites (devotees of Shiva) and plays a vital role in the cultural and religious life of Odisha. It is part of a larger temple complex that includes various shrines dedicated to other deities."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Lingaraj
