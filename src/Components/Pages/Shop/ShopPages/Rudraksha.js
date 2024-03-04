import { Box, Grid } from '@mui/material'
import React from 'react'
import NewNavbar from './../../../Layout/NewNavbar'
import IntroImage from '../../../Widgets/ShopsWidgets/ShopsDetails/IntroImage'
import ShopFilter from '../../../Widgets/ShopsWidgets/ShopsDetails/ShopFilter'
import ShopCard from '../../../Widgets/ShopsWidgets/ShopsDetails/ShopCard'
import ShopCoupon from '../../../Widgets/ShopsWidgets/ShopsDetails/ShopCoupon'
import Footer from './../../../Widgets/HomeWidgets/Footer'

const Rudraksha = () => {
    return (
        <Box>
            <NewNavbar />
            <IntroImage />
            <Box marginLeft='3%' marginRight='3%'>
                <ShopFilter />
                <Grid container>
                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                    </Box>

                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                    </Box>

                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                        <Grid item xs={0.4}></Grid>
                        <Grid item xs={2.5}>
                            <ShopCard />
                        </Grid>
                    </Box>

                </Grid>
            </Box>
            <ShopCoupon />
            <Footer />
        </Box>
    )
}

export default Rudraksha
