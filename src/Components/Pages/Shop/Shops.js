import React from 'react'
import ShopsIntro from '../../Widgets/ShopsWidgets/ShopsIntro'
import { Box, Button } from '@mui/material'
import NewNavbar from './../../Layout/NewNavbar'
import ShopCategory from '../../Widgets/ShopsWidgets/ShopCategory'
import ShopEnd from '../../Widgets/ShopsWidgets/ShopEnd'

const Shops = () => {
  return (
    <Box>
      <NewNavbar />
      <ShopsIntro />
      <ShopCategory />
      <ShopEnd />
      {/* <Box display='flex' marginBottom='2%' >
        <Button sx={{ borderLeft: '40vw solid red', borderBottom: '20vh solid transparent', borderTop: 'none', borderRight: 'none', }}></Button>
        <Button sx={{ borderRight: '40vw solid red', borderBottom: '20vh solid transparent', borderTop: 'none', borderLeft: 'none', }}></Button>
      </Box> */}
    </Box>
  )
}

export default Shops
