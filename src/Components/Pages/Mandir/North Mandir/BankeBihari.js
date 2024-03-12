import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const BankeBihari = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/north/banke_bihari_vrindavan.png'
                  name='Sh Banke Bihari Prasad Vrindavan (Vrindavan, Uttar Pradesh)'
                  location='Vrindavan, Mathura'
                  state='Uttar Pradesh'
                  country='India'
                  best_time='All'
                  languages='Hindi'
                  timing='7:00 AM to 8:00 PM'
                  photography='Not Allowed'
                  intro_1='Shree Banke Bihari or Bankey Bihari Mandir atVrindavan in Mathura district is one of the holiest temples of Lord Krishan inIndia. The idol is much older and was originally worshipped at Nidhivana till1863. The idol of Lord Krishna stands in Tribhanga pose. The literally meaningof Tribhanga is breaks at three places or bends at three places in the body-atthe neck, waist and knee making a perfect “S” shape. The Tribhanga posture ofidol is considered as the most graceful of all types.'
                  intro_2='The style of celebrating every festival in the templeis unique. Bankey Bihari Ji is worshipped and looked after as a child. Thedeity is dressed up and offered Bhog according to the season. Unlike othertemples, there are no bells or conch in the temple as Bankey Bihari Ji does notlike the sound of bells or conch. You can hear only one sound that is chant of ‘radhanaam’. Soon a devotee enters in the temple; he forgets his all anxieties and feelsan ecstasy of joy. Thakur Ji is said tobe very kind hearted. He destroys all problems of His devotees and blesses themwith divine grace.'
                  history_1='As per scripture,this temple of Shree Bankey Bihari Ji was constructed by Swami Haridas (LalitaSakhi in Dvapara Yuga), a guru of singing legend Tansen. One day pupils ofSwami Haridas requested him to sing a verse. On their request Swami Haridassang the verse in Nidhivan-'
                  history_quote='"माई री सहज जोरी प्रगट भाई जू रंग की गौर स्याम घन दामिनीजैसेन। प्रथम हं आहुति अब हं अगेन हुन रहिहै न तरिहै तैसैं।। अंग अंगकी उजरै सुघरै चतुराई सुंदरता अइसैं।। श्री हरिदास के स्वामी श्यामाकुंजबिहारी सम वैस वैसैं।"'
                  history_2='The scripture says that on singing the verse the Celestial couple Shyama Shyam (Radha Krishna) appeared before Swami Haridas andhis disciples. On the request of Shri Swami Haridas Ji and his pupils thecouple merged into one and the idol of Shree Bankey Bihari Ji appeared there. The same idol was established in Nidhivan.'
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default BankeBihari
