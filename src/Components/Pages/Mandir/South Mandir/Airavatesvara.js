import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Airavatesvara = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/airavatesvara.png'
                  name='Airavatesvara Temple'
                  location=':Darasuram, Thanjavur'
                  state=':Tamil Nadu'
                  country=':India'
                  best_time=':October to March (Pleasant weather)'
                  languages=':Tamil, Hindi, English '
                  timing=': 6:30 AM to 12:30 PM & 4:00 PM to 8:00 PM'
                  photography=':Allowed'
                  intro_1="The Airavatesvara Temple is a majestic Hindu temple dedicated to Lord Shiva. It is located in Darasuram, a neighborhood in the city of Kumbakonam, Tamil Nadu, India. This architectural marvel is part of the “Great Living Chola Temples” - a UNESCO World Heritage Site that includes two other magnificent temples - the Brihadeeswara Temple at Thanjavur and the Gangaikondacholisvaram Temple at Gangaikonda Cholapuram."
                intro_2="The Airavatesvara Temple, with its rich history and captivating architecture, is a treasure trove for art enthusiasts, history buffs, and anyone seeking a spiritual experience."
                history_1="The Airavatesvara Temple was constructed during the reign of Chola emperor Rajaraja II in the 12th century CE. The temple derives its name from Airavata, the white elephant, the divine vehicle of Lord Indra. Legend narrates that Airavata, cursed with discoloration, regained his pearly white skin after bathing in the temple's sacred tank." 
                history_quote="नागेंद्रहाराय त्रिलोचनाय भस्मांग रागाय महेश्वराय। नित्याय शुद्धाय दिगंबराय तस्मै नकाराय नमः शिवाय।"
                
                history_2="The Airavatesvara Temple stands as a testament to the exquisite craftsmanship of the Chola era. Dravidian architecture dominates the temple’s structure, characterized by intricate carvings, sculptures, and a towering vimana (tower) above the sanctum sanctorum."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Airavatesvara
