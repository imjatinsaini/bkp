import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Meenakshi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/meenakshi.png'
                  name='Meenakshi Temple'
                  location=':Southern bank of the Vaigai River, Madurai,'
                  state=':Tamil Nadu'
                  country=':India'
                  best_time=':October to February (Pleasant weather)'
                  languages=':Tamil, Hindi, English '
                  timing=': Generally 6:00 AM to 12:30 PM & 4:00 PM to 10:00 PM'
                  photography=':Allowed'
                  intro_1="The Meenakshi Temple, also known as the Meenakshi Amman Temple or Minakshi-Sundareshwarar Temple, is a historic Hindu temple complex in Madurai, Tamil Nadu.  Considered one of the most magnificent temples in India, it's a sprawling complex dedicated to Parvati, the goddess Parvati, and Sundareswarar, a form of Lord Shiva."
                intro_2="The Meenakshi Temple is a captivating spectacle, offering a glimpse into South India's rich cultural heritage and architectural mastery.  A visit to Madurai is incomplete without experiencing the temple's grandeur and spiritual significance.  Appropriate attire that covers shoulders and knees is recommended for entry."
                history_1="The origins of the Meenakshi Temple remain unclear,  but legends suggest its existence dates back thousands of years.  The temple complex underwent significant expansion and embellishment throughout various South Indian dynasties' rule, including the Pandya Empire, the Madurai Nayak dynasty, and the Tauluva dynasty.  The temple's iconic gopurams (gateway towers) are believed to have been constructed during the 16th-17th centuries." 
                history_quote="ओम उन्नी-थ्रियै च विद्महे, सुंठ्प प्रियायै च धीमही, तन्नो मिनाक्षी प्रचोदयात।।"
                
                history_2="The Meenakshi Temple exemplifies Dravidian architecture, renowned for its towering gopurams adorned with intricate carvings and sculptures depicting mythological scenes and deities.  The complex houses numerous shrines, halls, and corridors, each showcasing exquisite craftsmanship."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Meenakshi
