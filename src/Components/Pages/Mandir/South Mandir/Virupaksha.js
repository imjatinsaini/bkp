import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Virupaksha = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/virupaksha.png'
                  name='Virupaksha Temple'
                  location=':Hampi, Vijayanagara district'
                  state=':Karnataka'
                  country=':India'
                  best_time=':October to February (Pleasant weather)'
                  languages=':Kannada, Hindi, English'
                  timing=': 6:00 AM to 5:30 PM'
                  photography=':Allowed'
                  intro_1="The Virupaksha Temple, also known as the Pampapathi Temple, is a magnificent 7th-century Hindu temple dedicated to Lord Shiva.  Located on the south bank of the Tungabhadra River, it's one of the most prominent landmarks in Hampi, a UNESCO World Heritage Site known for its Vijayanagara Empire ruins."
                intro_2="The Virupaksha Temple is a must-visit for anyone exploring Hampi's rich history and architectural marvels.  A serene and spiritual atmosphere prevails within the temple complex, offering a glimpse into the vibrant Hindu culture.  Appropriate attire that covers shoulders and knees is recommended for entry."
                history_1="The origins of the Virupaksha Temple remain shrouded in some mystery.  Local legends suggest its existence predates the Vijayanagara Empire, with the temple complex undergoing significant expansion during the empire's reign (1336-1565 CE).  Lakkan Dandesha, a chieftain under King Deva Raya II, is credited with constructing the most prominent features, including the grand eastern gopuram (gateway tower) in the 15th century." 
                history_quote="ॐ रुद्राय रोगनशाय अगाच च राम ॐ नमः"
                
                history_2="The Virupaksha Temple holds immense significance for Shaivism, a prominent Hindu sect devoted to Lord Shiva.  It's believed to be one of the abodes of Lord Shiva, enshrined here as Virupaksha ('with a wondrous eye')."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Virupaksha
