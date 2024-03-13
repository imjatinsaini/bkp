import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const BajreshwariDevi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/bajreshwari_devi.png'
                  name='Shri Bajreshwari Devi Temple'
                  location=':Kangra District'
                  state=':himachal Pradesh'
                  country=':India'
                  best_time=':March-April (spring) and September-October (autumn)'
                  languages=':Hindi'
                  timing=':6:00 AM to 12:00 PM  & 12:30 PM to 8:00 PM'
                  photography=':Allowed'
                  intro_1="Shri Bajreshwari Devi Temple, also known as Kangra Devi Mandir, is a revered Hindu pilgrimage site located in the Kangra town of Himachal Pradesh. It is one of the 51 Shakti Peethas, significant pilgrimage sites associated with the divine feminine energy Shakti. The temple is dedicated to Goddess Vajreshwari, a form of Durga, the powerful warrior goddess."
                intro_2="The temple has endured various challenges, including natural disasters and invasions. Despite this, it has remained a center of faith and devotion for Hindus, attracting pilgrims from across India.  The temple complex includes a golden dome shrine, intricate carvings, and other architectural features that reflect its rich history and cultural significance."
                history_1="Legends associate the temple with the Shakti Peethas. It is believed that the left breast of Sati, the consort of Lord Shiva, fell at this location, making it a sacred site for devotees."  
                history_quote='"ॐ ह्रीं नमो नगरकोट वाली माई, सर्व कार्य सिद्ध करणी, सर्व बाधा नाशिनी पल में चेटकी, पल में घातकी, मेरो काज |"'
                history_2="The temple held significant importance for the ruling dynasties of Kangra. Historical accounts mention renovations and patronage by various rulers throughout history."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default BajreshwariDevi
