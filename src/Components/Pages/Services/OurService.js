import { Box } from '@mui/material'
import React from 'react'
import NewNavbar from '../../Layout/NewNavbar'
import ServicesIntro from '../../Widgets/ServicesWidgets/ServicesIntro'
import ServiceCard from '../../Widgets/ServicesWidgets/ServiceCard'
import ServiceEnd from '../../Widgets/ServicesWidgets/ServiceEnd'

const OurService = () => {
    return (
        <Box>
            <NewNavbar />
            <ServicesIntro />
            <ServiceCard
                service_image='/images/services/services_puja.png'
                service_name='Puja (पूजा)'
                service_details='Unable to visit your desired temple? Schedule personalized pujas online, conducted by experienced pandits at remote locations. Immerse yourself in divine blessings from afar, effortlessly connecting with your faith.'
                left={true}
            />
            <ServiceCard
                service_image='/images/services/services_prasad.png'
                service_name='Prasad (प्रसाद)'
                service_details="Offer prasad to the gods from your home with our online service. We'll deliver the blessed prasad to your doorstep, bringing divine blessings right to you."
                left={false}
            />
            <ServiceCard
                service_image='/images/services/services_hawan.png'
                service_name='Hawan (हवन)'
                service_details="Participate in a traditional hawan ceremony at a distant temple via live video call with your own pandit ji. Choose the type of hawan you wish to perform and immerse yourself in the sacred ambiance from the comfort of your home."
                left={true}
            />
            <ServiceCard
                service_image='/images/services/services_prasad.png'
                service_name='Brahman Bhoj (ब्राह्मण भोज)'
                service_details="Experience Brahman Bhoj online: Choose your feast, pay, and we'll perform it for you. Receive digital images and videos, connecting you to the divine, no matter where you are."
                left={false}
            />
            <ServiceCard
                service_image='/images/services/services_astrology.png'
                service_name='Astrology (ज्योतिष)'
                service_details="Connect instantly with diverse pandit jis for personalized consultations via chat or call, exploring insights into love, career, and personal growth."
                left={true}
            />
            <ServiceCard
                service_image='/images/services/services_prasad.png'
                service_name='Pandit ji on request (पंडित जी अनुरोध पर)'
                service_details="Easily locate experienced pandit jis in your locality for all your puja requirements. From traditional rituals to special ceremonies, connect with trusted pandit jis for a seamless and spiritually enriching experience."
                left={false}
            />
            <ServiceCard
                service_image='/images/services/services_astrology.png'
                service_name='Spiritual Travel Guide (आध्यात्मिक यात्रा गाइड)'
                service_details="Connect instantly with diverse pandit jis for personalized consultations via chat or call, exploring insights into love, career, and personal growth."
                left={true}
            />
            <ServiceEnd />
        </Box>
    )
}

export default OurService
