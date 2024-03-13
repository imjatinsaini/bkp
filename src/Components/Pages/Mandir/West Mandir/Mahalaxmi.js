import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Mahalaxmi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/mahalaxmi.png'
                  name='Shree Mahalaxmi Temple'
                  location=':Kolhapur'
                  state=':Maharashtra'
                  country=':India'
                  best_time=':Throughout the year'
                  languages=':Hindi, English'
                  timing=': 5:00 AM to 8:00 PM'
                  photography=':Generally Not Allowed'
                  intro_1="The Mahalakshmi Temple in Kolhapur, Maharashtra, is a revered Hindu pilgrimage site dedicated to Goddess Lakshmi, the consort of Lord Vishnu.  The Mahalakshmi Temple holds a unique place among Hindu pilgrimage sites. It's one of the three revered Shakti Peethas, locations associated with the fallen body parts of Sati, the consort of Lord Shiva. Here, the right hand of Sati is believed to be enshrined, imbuing the temple with immense spiritual significance."
                intro_2="Legends weave a rich tapestry around the temple's origin. One popular story recounts how Sage Bhrigu, one of the seven sages, angered Lord Vishnu by not greeting him properly.  Seeking solace, Bhrigu came to Kolhapur, where Goddess Mahalakshmi is said to have manifested, establishing her presence here."
                history_1="The Mahalakshmi Temple in Kolhapur, Maharashtra, boasts a rich history dating back to the 7th century AD. Construction is believed to have begun around this time, though some evidence suggests the temple site might have been revered even earlier." 
                history_quote="ऊँ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ऊँ महालक्ष्मी नमः:।"
                
                history_2="The temple thrived under the patronage of various dynasties. The Chalukyas, with their characteristic architectural style, left a lasting mark. The Shilaharas, Yadavas, and later, the Marathas, all contributed to the temple's expansion and beautification."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Mahalaxmi
