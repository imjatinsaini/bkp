import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Brihadeeswara = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/airavatesvara.png'
                  name='Brihadeeswara temple'
                  location=':Thanjavur'
                  state=':Tamil Nadu'
                  country=':India'
                  best_time=':October to March (Pleasant weather)'
                  languages=':Tamil, English'
                  timing=': 6:30 AM to 12:30 PM & 4:00 PM to 8:00 PM'
                  photography=':Allowed'
                  intro_1="The Brihadeeswara Temple, also known as the Peruvudaiyar Kovil (Big Temple) and Rajarajesvaram, is a UNESCO World Heritage Site and one of the most prominent Hindu temples in India. Located in Thanjavur, Tamil Nadu, this architectural marvel is a masterpiece of Dravidian art and architecture, dedicated to Lord Shiva."
                intro_2="The Brihadeeswara Temple, along with the Gangaikonda Cholapuram Temple and the Airavatesvara Temple, is part of the 'Great Living Chola Temples' UNESCO World Heritage Site. These temples stand as a lasting legacy of the Chola era's architectural and artistic brilliance." 
                history_1="The Brihadeeswara Temple was built by emperor Raja Raja Chola I between 1003 and 1010 CE.  It stands as a symbol of the Chola dynasty's power and prosperity during that era. The temple's name, Rajarajesvaram, translates to 'Lord of Raja Raja,' commemorating the king's reign."
                history_quote="देवदेव महादेव नीलकंठ नमोस्तु ते। कुर्तमिच्छाम्यहं देव शिवरात्रिव्रतं तव।। तव प्रभावाद्धेवेश निर्विघ्नेन भवेदिति। कामाद्या: शत्रवो मां वै पीडां कुर्वन्तु नैव हि।।"
                
                history_2="The temple's most striking feature is the towering vimana (tower) above the sanctum sanctorum. This granite structure, estimated to weigh around 80 tons, stands at a staggering height of 216 feet (66 meters) - making it one of the tallest temples in South India."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Brihadeeswara
