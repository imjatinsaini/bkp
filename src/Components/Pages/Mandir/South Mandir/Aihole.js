import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Aihole = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/south/aihole_pattadakal.png'
                  name='Aihole and Pattadakal'
                  location=':Bagalkot district'
                  state=':Karnataka'
                  country=':India'
                  best_time=':October to March (Pleasant weather)'
                  languages=':kannada, Hindi'
                  timing=': 9:00 AM to 5:30 PM'
                  photography=':Allowed'
                  intro_1="Aihole and Pattadakal are two historically significant neighboring towns in Karnataka, India, located along the Malaprabha River. Renowned for their exquisite temples, these places offer a glimpse into the architectural legacy of the Chalukya dynasty (6th-12th centuries CE)."
                intro_2="Aihole and Pattadakal offer a captivating journey through the architectural heritage of the Chalukya dynasty.  These sites stand as open-air museums, showcasing the artistic brilliance and craftsmanship of this bygone era.  The intricate carvings, diverse styles, and historical significance make them a must-visit for anyone interested in Indian art, history, and architecture." 
                history_1="Aihole flourished as a prominent religious and artistic center during the Chalukya rule. The architectural styles of the temples here exhibit a unique fusion of influences, incorporating elements from both North Indian Nagara and South Indian Dravidian traditions. These temples date back to a period between the 6th and 12th centuries CE."
                history_quote="नित्याय शुद्धाय दिगंबराय तस्मे न काराय नमः शिवायः ॥ मंदारपुष्प बहुपुष्प सुपूजिताय तस्मे म काराय नमः शिवायः ॥"
                
                history_2="Pattadakal, serving as the coronation center for the Chalukya rulers between the 7th and 8th centuries CE, played a crucial role in the dynasty's history. The remarkably preserved monuments here showcase the evolution of Chalukya art and architecture. The early structures here lean towards the northern influences, while later ones incorporate more Dravidian elements, reflecting a fascinating artistic transition."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Aihole
