import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Kamakhya = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/kamakhya.png'
                  name='Kamakhya Temple'
                  location=':Nilachal Hills, Guwahati'
                  state=':Assam'
                  country=':India'
                  best_time=':September-February (Pleasant weather)'
                  languages=':Assamese, Hindi, English'
                  timing=':8:00 AM to 1:00 PM & 2:30 PM to 5:30 PM'
                  photography=':Not Allowed'
                  intro_1="Kamakhya Temple is one of the oldest and most revered centers of Tantric practices in India. Located atop the Nilachal Hills in Guwahati, Assam, it is dedicated to Goddess Kamakhya, a form of Parvati, the divine feminine energy. The temple is considered one of the 51 Shakti Peethas, significant pilgrimage sites associated with Shakti. The temple complex attracts thousands of devotees throughout the year, particularly during the Ambubachi Mela, an annual festival celebrating the menstruation of the Goddess."
                intro_2="Kamakhya Temple continues to be a vital pilgrimage site and a center for spiritual exploration.  It is a place of immense significance for Hindus, particularly those interested in Tantric traditions, attracting devotees from across India and beyond."
                history_1="Historical records and legends indicate the presence of a temple dedicated to a mother goddess at the location for centuries. Evidence suggests potential links to pre-Hindu fertility cults. The present temple structure dates back to the 8th-9th centuries CE. Over time, the temple complex has undergone renovations and additions by various rulers." 
                
                history_quote="ॐ नमो कामाख्या देव्यै अमुक मां वश्य कुरु स्वाहा ||"
                history_2="Kamakhya Temple holds a unique position within Hinduism as a center for Tantric practices. Tantra is a complex philosophical and spiritual tradition that emphasizes ritual, symbolism, and the harnessing of inner energy. The temple attracts devotees interested in exploring these practices. Ambubachi Mela is a significant festival associated with the temple. During this time, the temple remains closed for a few days, and rituals are observed to celebrate the menstruation cycle of the Goddess, symbolizing her creative power."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Kamakhya
