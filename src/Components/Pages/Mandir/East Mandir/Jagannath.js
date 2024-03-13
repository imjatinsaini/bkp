import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Jagannath = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/jagannath.png'
                  name='Jagannath Puri'
                  location=':Puri'
                  state=':Odisha'
                  country=':India'
                  best_time=':October-February (Pleasant weather)'
                  languages=':Odia, Hindi'
                  timing=':5:00 AM to 11:00 PM'
                  photography=':Generally Allowed'
                  intro_1="Jagannath Temple, also known as the Puri Temple, is one of the holiest Hindu pilgrimage sites in India. Located in the coastal town of Puri, Odisha, it is considered one of the Char Dham (four sacred abodes) revered by Hindus. The temple is dedicated to Lord Jagannath, a manifestation of Lord Vishnu, and is renowned for its annual Rath Yatra (chariot festival), a spectacular and vibrant cultural event that attracts thousands of devotees every year."
                intro_2="The Jagannath Temple continues to be a vital center of faith and cultural heritage for Hindus in India and around the world. It serves as a place of pilgrimage, spiritual practice, and celebration, attracting devotees with its rich history, unique traditions, and magnificent architecture."
                history_1="Historical evidence suggests the presence of a temple at the site as early as the 2nd century BCE. One popular legend attributes the construction of the main temple to King Indradyumna of Avanti in the 2nd or 3rd century CE. The legend narrates how the divine image of Lord Jagannath was miraculously discovered and subsequently enshrined in the temple." 
                
                history_quote="नीलांचल निवासाय नित्याय परमात्मने। बलभद्र सुभद्राभ्याम् जगन्नाथाय ते नमः।।"
                history_2="The annual Rath Yatra (chariot festival) is a central tradition associated with the temple. During this festival, the three deities – Jagannath, Balabhadra (his brother), and Subhadra (his sister) – are taken in colorful procession on huge chariots to Gundicha Mata Temple, signifying their annual journey to their maternal aunt's house. This vibrant and elaborate festival attracts massive crowds and is a major cultural and religious event in Odisha."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Jagannath
