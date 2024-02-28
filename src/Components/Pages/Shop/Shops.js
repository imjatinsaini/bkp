import React from 'react'
import ShopsIntro from '../../Widgets/ShopsWidgets/ShopsIntro'
import { Box } from '@mui/material'
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
    </Box>
  )
}

export default Shops
