import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const JwalaJi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/jwala_ji.png'
                  name='Maa Jwala Ji'
                  location=':Jwalamukhi Town, Kangra District'
                  state=':Himachal Pradesh'
                  country=':India'
                  best_time=':March-April (spring) and September-October (autumn)'
                  languages=':Hindi'
                  timing=':5:00 AM to 11:00 PM'
                  photography=':Not Allowed inside sanctum where the eternal flames reside'
                  intro_1="Maa Jwala Ji Temple, also known as the Jwalamukhi Temple, is a revered Hindu pilgrimage site located in the Jwalamukhi town of Kangra district, Himachal Pradesh. It is one of the 51 Shakti Peethas, significant pilgrimage sites associated with the divine feminine energy Shakti. The temple is unique for its natural gas flames that emerge from the rock bed within the sanctum sanctorum, considered to be the manifestation of the Goddess Jwalamukhi."
                intro_2="Over the centuries, Maa Jwala Ji Temple has become a prominent pilgrimage destination, attracting devotees from all walks of life. The sight of the natural flames and the temple's spiritual aura create a unique and awe-inspiring experience for visitors."
                history_1="A prominent legend associates the temple with the Shakti Peethas. It is believed that the tongue of Sati, the consort of Lord Shiva, fell at this location, giving rise to the eternal flames that are worshipped as the Goddess Jwalamukhi." 
                history_quote="ॐ ह्रीं ज्वाला देव्यै फट |"
                
                history_2="Another legend narrates the story of Raja Bhumi Chand Katoch, the then ruler of Kangra, who dreamt of the sacred flames and subsequently ordered the construction of a temple at the site."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default JwalaJi
