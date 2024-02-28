import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'react-router-dom';

const MandirList = ({ mandir }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, 2))
    }

    const handleIndicator = ({ index }) => {
        setActiveIndex(index)
    }

    return (
        <Carousel
            index={activeIndex}
            onChange={(_, newIndex) => setActiveIndex(newIndex)}

            indicators={false}

            autoPlay={false}

            swipe={true}
            indicatorIconButtonProps={{
                onClick: (_, index) => handleIndicator(index),
            }}
            nextIconButtonProps={{
                onClick: handleNext,
            }}
            prevIconButtonProps={{
                onClick: handlePrevious,
            }}
        >

            {
                mandir.map((item) => <Item key={item.page} item={item} />)
            }
        </Carousel>

    )

    function Item({ item }) {
        return (
            <Box bgcolor='#093649'>
                <Grid container>
                    <Grid item xs={12}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Paper variant='outlined' style={{ background: 'transparent', marginRight: '1%', border: 'none' }}>
                                <img src='/images/home/services_sign.png' width='13px' height='16px' />
                            </Paper>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} color='white' style={{ opacity: '70%' }} fontSize='24px' marginTop='1%'>Discover Mandir of India</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} color='white' style={{ opacity: '70%' }} fontSize='12px' marginTop='1%'>Discover Mandir of India</Typography>
                            <Paper variant='outlined' style={{ background: 'transparent', marginLeft: '1%', border: 'none' }}>
                                <img src='/images/home/services_sign.png' width='13px' height='16px' />
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} color='white' fontSize='32px' marginTop='1%'>{item.region}</Typography>
                            <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} color='white' fontSize='16px' marginTop='1%'>{item.region}</Typography>
                        </Box>
                    </Grid>

                </Grid>

                <Box marginLeft='5%' marginRight='5%' marginTop='2%'>

                    {/* For md and larger screens */}
                    <Grid container justifyContent='space-between' display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name1} place={item.place1} content={item.content1} btnText={item.btnText} img={item.img1} navlink={item.nav1} />
                        </Grid>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name2} place={item.place2} content={item.content2} btnText={item.btnText} img={item.img2} navlink={item.nav2} />
                        </Grid>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name3} place={item.place3} content={item.content3} btnText={item.btnText} img={item.img3} navlink={item.nav3} />s
                        </Grid>
                    </Grid>

                    <Grid container justifyContent='space-between' display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name4} place={item.place4} content={item.content4} btnText={item.btnText} img={item.img4} navlink={item.nav4} />
                        </Grid>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name5} place={item.place5} content={item.content5} btnText={item.btnText} img={item.img5} navlink={item.nav5} />
                        </Grid>
                        <Grid item xs={3.5}>
                            <MandirCard name={item.name6} place={item.place6} content={item.content6} btnText={item.btnText} img={item.img6} navlink={item.nav6} />
                        </Grid>
                    </Grid>

                    {/* For lg and xl */}
                    <Grid container marginTop='5%' paddingBottom='5%' display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                        <Grid item md={5} display='flex' justifyContent='end'>
                            {activeIndex !== 0 && (<Button variant='outlined' onClick={handlePrevious} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', }}>Prev</Button>)},
                        </Grid>
                        <Grid item md={2} display='flex' justifyContent='center' >
                            <Button variant='outlined' onClick={() => setActiveIndex(0)} style={{ color: 'white', border: activeIndex === 0 ? 'none' : '1px solid white', backgroundColor: activeIndex === 0 ? '#ff6505' : 'transparent', marginRight: '1%' }}>1</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(1)} style={{ color: 'white', border: activeIndex === 1 ? 'none' : '1px solid white', backgroundColor: activeIndex === 1 ? '#ff6505' : 'transparent', marginRight: '1%' }}>2</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(2)} style={{ color: 'white', border: activeIndex === 2 ? 'none' : '1px solid white', backgroundColor: activeIndex === 2 ? '#ff6505' : 'transparent', marginRight: '1%' }}>3</Button>
                        </Grid>
                        <Grid item md={5} display='flex' justifyContent='start'>
                            {activeIndex !== 2 && (<Button variant='outlined' disabled={activeIndex === 2 ? true : false} onClick={handleNext} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', marginRight: '1%' }}>Next</Button>)},
                        </Grid>

                    </Grid>

                    {/* For md */}
                    <Grid container marginTop='5%' paddingBottom='5%' display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' }}>
                        <Grid item md={5} display='flex' justifyContent='end'>
                            {activeIndex !== 0 && (<Button variant='outlined' onClick={handlePrevious} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', marginRight: '10%' }}>Prev</Button>)},
                        </Grid>
                        <Grid item md={2} display='flex' justifyContent='center' >
                            <Button variant='outlined' onClick={() => setActiveIndex(0)} style={{ color: 'white', border: activeIndex === 0 ? 'none' : '1px solid white', backgroundColor: activeIndex === 0 ? '#ff6505' : 'transparent', marginRight: '1%' }}>1</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(1)} style={{ color: 'white', border: activeIndex === 1 ? 'none' : '1px solid white', backgroundColor: activeIndex === 1 ? '#ff6505' : 'transparent', marginRight: '1%' }}>2</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(2)} style={{ color: 'white', border: activeIndex === 2 ? 'none' : '1px solid white', backgroundColor: activeIndex === 2 ? '#ff6505' : 'transparent', marginRight: '1%' }}>3</Button>
                        </Grid>
                        <Grid item md={5} display='flex' justifyContent='start'>
                            {activeIndex !== 2 && (<Button variant='outlined' disabled={activeIndex === 2 ? true : false} onClick={handleNext} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', marginLeft: '10%' }}>Next</Button>)},
                        </Grid>
                    </Grid>

                    {/* For xs and sm */}
                    <Grid container marginTop='5%' paddingBottom='5%' display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <Grid item xs={12} display='flex' justifyContent='center' >
                            <Button variant='outlined' onClick={() => setActiveIndex(0)} style={{ color: 'white', border: activeIndex === 0 ? 'none' : '1px solid white', backgroundColor: activeIndex === 0 ? '#ff6505' : 'transparent', fontSize: '10px' }}>1</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(1)} style={{ color: 'white', border: activeIndex === 1 ? 'none' : '1px solid white', backgroundColor: activeIndex === 1 ? '#ff6505' : 'transparent', fontSize: '10px' }}>2</Button>,
                            <Button variant='outlined' onClick={() => setActiveIndex(2)} style={{ color: 'white', border: activeIndex === 2 ? 'none' : '1px solid white', backgroundColor: activeIndex === 2 ? '#ff6505' : 'transparent', fontSize: '10px' }}>3</Button>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        )
    }
}


const MandirCard = ({ name, place, content, btnText, img, navlink }) => {
    return (
        <Box borderRadius='20px' justifyContent='center' alignItems='center'>
            <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                <img src={img} />
                <Box bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Typography textAlign='center' style={{ fontSize: '16px', fontWeight: '500' }}>{name}</Typography>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <Typography textAlign='center' style={{ fontSize: '8px', fontWeight: '500' }}>{name}</Typography>
                    </Box>

                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Typography textAlign='center' style={{ fontSize: '14px' }}>{place}</Typography>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <Typography textAlign='center' style={{ fontSize: '4px' }}>{place}</Typography>
                    </Box>

                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ fontSize: '12px', fontWeight: '500', opacity: '70%', marginLeft: '7%', marginRight: '5%' }}>{content}</Typography>

                    <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                        <NavLink to={navlink} style={{ textDecoration: 'none' }}><Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', textTransform: 'none' }} >{btnText}</Button></NavLink>
                    </Box>
                    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                        <NavLink to={navlink} style={{ textDecoration: 'none' }}><Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: '1px solid #f24e1e', borderRadius: '10px', marginTop: '5%', textTransform: 'none', fontSize: '5px' }} >{btnText}</Button></NavLink>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default MandirList
