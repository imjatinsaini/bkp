import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const VaishnoDevi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/vaishno_devi.png'
                  name='Mata Vaishno Devi Temle'
                  location=':Katra town, Reasi district'
                  state=':Jammu & Kashmir'
                  country=':India'
                  best_time=':March-April (spring) and September-October (autumn)'
                  languages=':Hindi, Dogri, Punjabi'
                  timing=':Open 24x7'
                  photography=':Not Allowed'
                  intro_1="Shri Mata Vaishno Devi Temple is one of the holiest Hindu pilgrimage sites in India, dedicated to Goddess Vaishno Devi, a manifestation of Durga, the divine feminine energy. Nestled amidst the Trikuta hills in Katra town, Jammu and Kashmir, the temple attracts millions of devotees throughout the year, making it one of the most visited religious destinations in the world."
                intro_2="The temple complex has undergone significant development over time, with improved infrastructure to accommodate the large number of pilgrims. However, the core spiritual significance of the cave remains the primary focus for devotees who undertake the arduous trek to seek blessings from the Goddess."
                history_1="One popular legend narrates the story of three shepherds – Nundri, Champa, and Gaddi – who were divinely guided to a cave where they witnessed the manifestation of the Goddess. News of this discovery spread, leading to the establishment of the pilgrimage site."  
                history_quote='"ॐ श्री वैष्णवी नमः।"'
                history_2="Another story suggests that Mata Adi Shakti (primordial cosmic power) manifested as Mata Vaishnavi and established her abode in the cave, eventually becoming known as Vaishno Devi."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default VaishnoDevi
