import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const KalkaJi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/kalkaji.png'
                  name='Shri KalkaJi Temple'
                  location=': Nehru Place'
                  state=':Delhi'
                  country=':India'
                  best_time=':Throughout the year'
                  languages=':Hindi'
                  timing=':4 AM to 11:30 AM, 12 PM to 3 PM and 4 PM to 11:30 PM'
                  photography=':Not Allowed inside main sanctum'
                  intro_1="Shri Kalkaji Temple is a prominent Hindu temple dedicated to Goddess Kali, a powerful form of Durga, the divine feminine energy. Situated in Nehru Place, New Delhi, it is considered one of the oldest and most revered temples in the city. The temple attracts a large number of devotees throughout the year, particularly during Navratri, a nine-day festival celebrating the divine feminine."
                intro_2="Shri Kalkaji Temple holds a special place in the hearts of Delhi residents and devotees across India. It serves as a spiritual sanctuary, offering blessings and a sense of peace to those who visit."
                history_1="The exact date of the temple's construction is unclear, but estimates suggest it could be as old as 400 years.The oldest existing structures of the present temple complex are believed to have been constructed by the Marathas in the 18th century."  
                
                history_2="One legend associated with the temple suggests that the image of Goddess Kali worshipped here is self-manifested, adding to its sacred significance. Shri Kalkaji Temple holds a special place in the hearts of Delhi residents and devotees across India."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default KalkaJi
