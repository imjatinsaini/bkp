import { Box } from '@mui/material'
import React from 'react'
import MandirImage from '../../../Widgets/MandirWidgets/MandirDetails/MandirImage'
import MandirEnd from '../../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const SiddhiVinayak = () => {
    return (
        <Box>
            <NewNavbar />
            <Box marginLeft='5%' marginRight='5%'>
                <MandirImage
                 image='/images/mandir/west/siddhivinayak.png'
                  name='Shree Siddhivinayak Temple'
                  location=':Prabhadevi, Mumbai'
                  state=':Maharashtra'
                  country=':India'
                  best_time=':Throughout the year'
                  languages=':Hindi, English'
                  timing=': 5:30 AM to 9:00 PM'
                  photography=':Not Allowed'
                  intro_1="Shree Siddhivinayak Mandir is dedicated to Lord Ganesha. Located in Prabhadevi in Mumbai, it is unquestionably the most popular and significant temple of Lord Shree Ganesh. This two centuries old Ganpati temple is the richest temple in Mumbai with an average donation of about Rs100 Cr per annum. Devotees from all over the country visit this temple with great reverence and faith."
                intro_2='Also known as "Navasacha Ganapati" or "Navasala Pavanara Ganapati", Shri Siddhi Vinayak Ji bestows his blessings upon his devotees with prosperity if humbly and genuinely prayed.'
                history_1="This was constructed around the core shrine on 19th November 1801. Those days the locality had ample of shrubbery and innumerous coconut trees. The Shree Siddhivinayak idol comprises of black stone and is 2.5 ft. high from its base and approx. 2 ft. wide." 
                history_quote="ॐ नमो सिद्धि विनायकाय सर्वकार्यकर्तात्रे सर्वविघ्नप्रशमनाय सर्वार्ज्ञ वश्यकर्णाय सर्वजन सर्वास्त्री पुरुषाकर्षणाय श्रीं ॐ स्वाहा॥"
                
                history_2="Whenever Shree RamKrishna Jambhekar Maharaj, living in the  Prabhadevi area of Mumbai visited Akkalkot for darshan of  Shree Swami Samarth,  Shree Swami Samarth came out of his Samadhi & greeted him. "
                
                  />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default SiddhiVinayak
