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
                <MandirImage />
            </Box>
            <MandirEnd />
            <Footer />
        </Box>
    )
}

export default BankeBihari
