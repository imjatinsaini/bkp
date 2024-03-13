import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const MansaDevi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/mansa_devi.png'
                  name='Mata Mansa Devi Temple'
                  location=':Panchkula District'
                  state=':Haryana'
                  country=':India'
                  best_time=':Throughout the year. October-March is considered pleasant.'
                  languages=':Hindi, Punjabi'
                  timing=': Summer (4:00 AM to 10:00PM) & Winter (5:00 AM to 9:00 PM)'
                  photography=':Generally Allowed'
                  intro_1="Mata Mansa Devi Temple is a prominent Hindu temple dedicated to Goddess Mansa Devi, a form of Shakti, the divine feminine energy. It is situated in the foothills of the Shivalik hills, near the city of Chandigarh, in the Panchkula district of Haryana. The temple complex is spread over 100 acres, offering a serene and spiritual experience to devotees."
                intro_2="The temple has gained significant popularity over time, attracting devotees from nearby regions and across India. It is particularly revered during Navratri, a nine-day festival celebrating the divine feminine. During this period, the temple witnesses a large influx of pilgrims, creating a vibrant and spiritual atmosphere."
                history_1="The exact origin of the temple remains unclear. However, historical records point to its existence for centuries. Legends associate the temple with various figures.

                One legend suggests that Mansa Devi, a snake goddess associated with wishes and blessings, resides here. Devotees worship her for prosperity, health, and protection from snakebites. This association may have its roots in ancient reverence for serpents as symbols of fertility and renewal.
                Another legend attributes the construction of the present main temple to Maharaja Gopal Singh of Mani Majra in the early 19th century."  
                history_quote='"॥ ॐ ह्रीं श्रीं क्लीं एं मनसा दैव्ये स्वाहा॥"'
                history_2="Mansa is regarded as the sister of the Nāga (serpent) Vasuki. She is also believed to be the daughter of Lord Shiva in his human incarnate. The term Mansa means wish and it is believed that the goddess fulfils all the wishes of a sincere devotee."
                //   history_2="According to the legend associated with Shri Naina Devi Temple, Sati's eyes fell at this location, giving rise to the name 'Naina' which means 'eyes' in Hindi. The temple enshrines the holy Shakti Peetha associated with her eyes."
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default MansaDevi
