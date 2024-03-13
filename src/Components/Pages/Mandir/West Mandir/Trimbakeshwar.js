import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Trimbakeshwar = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/trimbakeshwar.png'
                  name='Shree Trimbakeshwar Temple'
                  location=':Brahmagiri Mountains'
                  state=':Maharashtra'
                  country=':India'
                  best_time=':Throughout the year'
                  languages=':Marathi, Hindi, English'
                  timing=': 5:30 AM to 9:00 PM & Rudrabhishek Timings(7:00 AM to 8:30 AM)'
                  photography=':Generally Not Allowed'
                  intro_1="he Trimbakeshwar temple is situated 30 km from Nasik, near the Brahmagiri mountains from which the Godavari flows. It is revered as one of the 12 jyotirlingas of the Lord Shiva and also as the source of the Godavari."
                intro_2="The amazing feature of the jyotirlinga here is that it has three faces, embodying Lord Vishnu, Lord Brahma and Lord Shiva. Due to excessive use of water, the lingam has started to erode. This erosion is said to signify the eroding nature of today's human society."
                history_1="According to legend, there was a famine that lasted 24 years and people were dying of hunger. However, Varun, the god of Rains, was pleased by Sage Gautama and hence arranged rainfall every day only in Gautam’s ashram in Trimbakeshwar." 
                history_quote="ॐ त्र्यंबकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनात् मृत्योर्मुक्षीय मामृतात्"
                
                history_2="The exact date of construction is unknown, some believe the temple existed well before the 18th century. Legends associate the site with Lord Shiva himself.  The Trimbakeshwar Temple is named after the sacred Trimbak Tirtha, the source of the Godavari River. According to the Shiva Purana, Lord Shiva himself released the holy river Ganga (known as Godavari in this region) to purify the land."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Trimbakeshwar
