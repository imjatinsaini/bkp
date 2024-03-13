import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const NainaDevi = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/naina_devi.png'
                  name='Shri Naina Devi'
                  location=':Bilaspur'
                  state=':Himachal Pradesh'
                  country=':India'
                  best_time=':March-April(Chaitra Navratre)'
                  languages=':Hindi'
                  timing=':6:00 AM to 10:00 PM'
                  photography=':Generally Allowed'
                  intro_1='Shri Naina Devi Temple is a revered Hindu pilgrimage site and one of the 51 Shakti Peethas, sacred places associated with the divine feminine energy Shakti. It is situated on a hilltop in the Bilaspur district of Himachal Pradesh, bordering Punjab. The temple attracts a large number of devotees throughout the year, especially during the holy festivals of Navratri (nine nights dedicated to Durga) and Shravan Ashtami (eighth day of the Hindu lunar month Shravan).'
                
                history_1="Legend has it that Sati, the consort of Lord Shiva, immolated herself in protest against her father Daksha's yagna (fire sacrifice), where she was not given due respect. Enraged by his wife's death, Shiva performed the cosmic Tandava dance, carrying her body throughout the universe. To calm him down and prevent further destruction, Lord Vishnu used his Sudarshana Chakra to dismember Sati's body. The various parts of her body fell on different locations on Earth, becoming revered as Shakti Peethas."  
                history_quote='"सारा जहां है जिसकी शरण में,नमन है उस माँ के चरण में ।"'
                  history_2="According to the legend associated with Shri Naina Devi Temple, Sati's eyes fell at this location, giving rise to the name 'Naina' which means 'eyes' in Hindi. The temple enshrines the holy Shakti Peetha associated with her eyes."
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default NainaDevi
