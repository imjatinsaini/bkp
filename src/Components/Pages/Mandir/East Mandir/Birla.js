import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Birla = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/east/birla.png'
                  name='Birla Mandir'
                  location=':Ashutosh Chowdhury Avenue, Ballygunge, Kolkata'
                  state=':West Bengal'
                  country=':India'
                  best_time=':October-March (Pleasant weather)'
                  languages=':Bengali, Hindi'
                  timing=':Morning: 5:30 AM to 11:00 AM, Evening: 4:30 PM to 9:00 PM'
                  photography=':Likely yes, but photography inside the sanctum sanctorum (inner shrine) might be restricted.'
                  intro_1="Built by the Birla family, an Indian industrialist family, the temple is dedicated to Lord Vishnu and his consort Lakshmi. The construction of the temple began in 1970 and was completed in 1996. It is an exemplary work of art and one of the finest architectural beauties of Kolkata."
                intro_2="The temple is built in the architectural style of Orissa temples and is made of white marble and sandstone. The temple complex is spread over 44 kathas of land and has a height of 160 feet. There are shrines dedicated to Lord Shiva, Parvati, Ganesha, and Hanuman inside the temple complex."
                history_1="The construction of the temple began in 1970. It took 26 years to complete the entire structure. The construction was supervised by the Sompuras" 
                
                
                history_2="On Wednesday, the 21st of February, 1996, the Pran Pratishta was done by Swami Chidanandaji Maharaj in the morning. Dr. Karan Singh inaugurated the temple the same day."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Birla
