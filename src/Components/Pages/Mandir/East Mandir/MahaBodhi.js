import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Mahabodhi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/mahabodhi.png'
                  name='Mahabodhi Temple'
                  location=':Bodh Gaya'
                  state=':Bihar'
                  country=':India'
                  best_time=':October-March (Pleasant weather)'
                  languages=':Hindi, Magahi, Bhojpuri'
                  timing=':5:00 AM to 9:00 PM'
                  photography=':Allowed'
                  intro_1="Mahabodhi Temple, also known as the Great Awakening Temple, is a UNESCO World Heritage Site and one of the holiest Buddhist pilgrimage sites in the world. Located in Bodh Gaya, Bihar, India, it marks the place where Siddhartha Gautama attained enlightenment and became the Buddha, the founder of Buddhism. The temple complex is a magnificent example of early Indian Buddhist architecture and continues to be a significant center for Buddhist pilgrimage and spiritual practice."
                intro_2="The Mahabodhi Temple complex encompasses several structures, including the Mahabodhi Temple itself, the Bodhi tree, stupas (hemispherical structures), monasteries, and other religious monuments. It continues to be a place of immense significance for Buddhists worldwide, attracting pilgrims from various traditions to pay homage and seek spiritual solace."
                history_1="The Mahabodhi Temple boasts a rich and long history, with archaeological evidence suggesting Buddhist activity at the site dating back to the 6th century BCE. According to tradition, Siddhartha Gautama attained enlightenment under a Bodhi tree (Ficus religiosa) at this location." 
                
                
                history_2="Over the centuries, the Mahabodhi Temple complex witnessed additions and renovations by various rulers and dynasties. The present main temple structure dates back to the Gupta period (5th-6th centuries CE) and is considered one of the earliest surviving brick structures in eastern India."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Mahabodhi
