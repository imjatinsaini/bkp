import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Dwarkadhish = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/dwarkadhish.png'
                  name='Dwarkadhish Temple'
                  location=':Devbhoomi Dwarka'
                  state=':Gujarat'
                  country=':India'
                  best_time=':November to February'
                  languages=':Gujarati, Hindi'
                  timing=':7:00 AM to 12:30 PM & 5:00 PM to 9:00PM'
                  photography=':Not Allowed'
                  intro_1="The Dwarkadhish Temple, also known as Jagat Mandir, is dedicated to Lord Krishna who is referred to as “Dwarkadhish” which means “King of Dwarka”. Ornate, exquisite and majestic, Dwarkadhish Gujarat is one of the most imposing five- storied structures of Hindu architecture in Gujarat on the confluence of river Gomti and Arabian sea."
                intro_2="The Dwarkadhish Temple, also known as Jagat Mandir, is dedicated to Lord Krishna who is referred to as “Dwarkadhish” which means “King of Dwarka”. It is situated in Dwarka, Gujarat. It is a Pushtimarg temple, hence it follows the guidelines and rituals created by Shree Vallabhacharya and Shree Vitheleshnathji."
                history_1="Dwarka has a past which dates back to the Mahabharata era. It is said that, due to fear of the attack by Jarasangh and Kaalayvan on Mathura, Shri Krishna and Yadavas left Mathura and arrived at the coast of Saurashtra. They later set up their kingdom at Dwarka, on the banks of river Gomti." 
                history_quote="ॐ नमः भगवते वासुदेवाय कृष्णाय क्लेशनाशाय गोविंदाय नमो नमः।"
                
                history_2="The entire establishment was destroyed after the death of Lord Krishna as per the mythology. In the early eighties, an important archaeological site was found at Dwarka. Many archaeological evidences were found in the form of a stone with script."
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default Dwarkadhish
