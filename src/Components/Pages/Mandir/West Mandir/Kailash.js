import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Kailash = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/kailash.png'
                  name='kailash Temple'
                  location=':Aurangabad'
                  state=':Maharashtra'
                  country=':India'
                  best_time=':December'
                  languages=':Hindi, English , Marathi'
                  timing=':9:00 AM to 5:00 PM'
                  photography=':Not Allowed'
                  intro_1="Kailash Temple is located near the village of Ellora which is 30 km from Aurangabad. This temple is considered as one among the most astonishing buildings in the history of architecture. This temple is one of the largest 34 excavations at Ellora, which took almost a century. The Kailash Temple is dedicated to Lord Shiva and the idol here is 109 feet wide by 164 feet long."
                intro_2="Kailash Temple consists of a number of images of deities, animals, and other mythical creatures from the puranas in a very much unique manner that leaves one in rapturous delight. Entire panels here are carved showing scenes from the Mahabharata and the Ramayana."
                history_1="The Kailasa Temple in Maharashtra boasts a fascinating history, though the exact year construction began remains shrouded in mystery. Believed to be commissioned by Rashtrakuta king Krishna I sometime in the mid-8th century AD, the temple holds the distinction of being carved from a single massive rock." 
                history_quote="ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्॥"
                
                history_2="Scholars believe this involved meticulously excavating enormous trenches around a central rock mass, leaving it isolated like a giant sculpture. Legends whisper of a queen's vow to build the temple upon King Krishna I's recovery from illness, hinting at the deep faith that fueled its creation."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Kailash
