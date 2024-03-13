import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Shanidev = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/shani_dev.png'
                  name='Shani Dev'
                  location=':Shingnapur , Ahmednagar District'
                  state=':Maharashtra'
                  country=':India'
                  best_time=':September to November'
                  languages=':Marathi, Hindi'
                  timing=': 5:00 AM to 10:00 PM'
                  photography=':Not Allowed'
                  intro_1="The popular temple of Shani, the Hindu god of the planet (graha) Saturn is situated in Shingnapur village of Ahmednagar district, Maharashtra.Hence got its name Shani Shingnapur Temple. The place is visited by devotees coming in to pay respect to the Mighty Lord Shanidev."
                intro_2="Shingnapur is famous for the fact that no house in the village has doors, only door frames. Villagers believe that the temple is a “jagrut devasthan” (Alive temple), meaning that the god here is very powerful. They believe that god Shani punishes anyone attempting theft. The deity here is “Swayambhu” (Sanskrit: self-evolved deity) that is self-emerged from earth in form of black but imposing stone."
                history_1="Though no one knows the exact period, it is believed that the Swayambhu Shanaishwara statue was found from times immemorial by shepherds of the then local hamlet. It is believed to be in existence at least since Kali yuga." 
                history_quote="ॐ शं शनैश्चराय नमः॥"
                
                history_2="When the Shepherd touched the stone with a pointed rod, the stone started bleeding. The shepherds were astounded. Soon the whole village gathered around to watch the miracle. On that night Lord Shanaishwara appeared in the dream of the most devoted and pious of the shepherds. He told the shepherd that he is “Shanaishwara”. He also told that the unique looking black stone is his swayambhu form."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Shanidev
