import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Dakshineswar = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/dakshineswar_kali.png'
                  name='Dakshineswar Kali Temple'
                  location=':Dakshineswar, North Kolkata'
                  state=':West Bengal'
                  country=':India'
                  best_time=':October-March (Pleasant weather)'
                  languages=':Bengali, Hindi'
                  timing=':6:00 AM to 6:00 PM'
                  photography=':Not Allowed'
                  intro_1="Dakshineswar Kali Temple is a renowned Hindu temple dedicated to Goddess Kali, a powerful form of the divine feminine energy Shakti. Situated on the eastern banks of the Hooghly River in a suburb north of Kolkata, West Bengal, it is a significant pilgrimage site and a major tourist attraction. The temple complex houses various shrines and buildings, reflecting its rich history and spiritual importance."
                intro_2="Dakshineswar Kali Temple continues to be a vibrant center of faith and devotion. It attracts devotees from all walks of life, particularly during festivals like Durga Puja and Kali Puja, when the temple comes alive with special pujas (prayers) and celebrations. The temple's rich history, spiritual significance, and architectural beauty make it a must-visit destination for anyone interested in exploring Hinduism and Bengali culture."
                history_1="The construction of the Dakshineswar Kali Temple is attributed to Rani Rashmoni, a wealthy philanthropist, in the mid-19th century. Legend has it that Rani Rashmoni received a divine vision instructing her to build a temple dedicated to Kali." 
                history_quote="ॐ क्रीं क्रीं क्रीं हूँ हूँ ह्रीं ह्रीं दक्षिणे कालिके क्रीं क्रीं क्रीं हूँ हूँ ह्रीं ह्रीं स्वाहा॥"
                
                history_2="Rashmoni funded the construction of the grand temple complex, which included the main Kali temple, a Natmandir (performance hall), and various Shiva temples. The temple gained further prominence due to its association with Ramakrishna Paramahamsa, a 19th-century saint who spent a significant period of his spiritual life here. His wife, Sarada Devi, also resided here for some time."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Dakshineswar
