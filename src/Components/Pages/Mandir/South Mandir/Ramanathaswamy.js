import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Ramanathaswamy = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/ramanathaswamy.png'
                  name='Ramanathaswamy Temple'
                  location=':Rameswaram island'
                  state=':Tamil Nadu'
                  country=':India'
                  best_time=':October to March (Pleasant weather)'
                  languages=':Tamil, Hindi, English '
                  timing=': 5:30 AM to 12:30 PM & 4:00 PM to 9:00 PM'
                  photography=':Not Allowed'
                  intro_1="The Ramanathaswamy Temple is a Hindu temple dedicated to Lord Shiva. It is located on Rameswaram island, off the coast of Tamil Nadu, India. The temple is considered to be one of the holiest places in Hinduism and is one of the twelve Jyotirlinga temples, where Shiva is worshipped as a luminous manifestation."
                intro_2="The temple complex is vast and houses numerous shrines, including the sanctum sanctorum with the Ramanathaswamy lingam, the Vishalakshi Amman shrine dedicated to Parvati, the consort of Shiva, and the 22 wells, considered to be sacred. The temple is known for its intricate carvings, expansive corridors, and its unique layout."
                history_1="The origins of the Ramanathaswamy Temple are shrouded in legend. According to Hindu mythology, the temple was established by Lord Rama, the prince of Ayodhya, before he crossed the bridge to Lanka (present-day Sri Lanka) to rescue his wife Sita from the demon king Ravana." 
                history_quote="ॐ तत्पुरुषाय विद्महे महादेवाय धीमहितन्नो रुद्रः प्रचोदयात्॥"
                
                history_2="Historical evidence suggests that the temple was built and expanded over several centuries. The Pandya Dynasty played a significant role in the temple's development during the 12th century. The magnificent corridors,  including the famed Hall of 1000 Pillars, were constructed by later rulers like the Sethupathi kings."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Ramanathaswamy
