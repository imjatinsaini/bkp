import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import './../../../Styles/Carousel.css'

var slider = [
    {
        "id": 1,
        "heading": "Bringing Sacred Blessings Home: Your Divine Connection Awaits Online",
        "subheading": "You're invited to connect with something sacred and special from the comfort of your home online. It's an opportunity to experience a divine connection.",
        "btnText": "Explore Services",
        "quote": "आत्मा की अन्वेषणा, शांति का सफर।",
        "img1": "/images/home/carousel_shiva.png",
        "img2": "/images/home/carosuel_krishna.png",
        "img3": "/images/home/carousel_ganesh.png"
    },
    {
        "id": 2,
        "heading": "Bringing Sacred Blessings Home: Your Divine Connection Awaits Online",
        "subheading": "You're invited to connect with something sacred and special from the comfort of your home online. It's an opportunity to experience a divine connection.",
        "btnText": "Explore Services",
        "quote": "आत्मा की अन्वेषणा, शांति का सफर।",
        "img1": "/images/home/carousel_shiva.png",
        "img2": "/images/home/carosuel_krishna.png",
        "img3": "/images/home/carousel_ganesh.png"
    },
    {
        "id": 3,
        "heading": "Bringing Sacred Blessings Home: Your Divine Connection Awaits Online",
        "subheading": "You're invited to connect with something sacred and special from the comfort of your home online. It's an opportunity to experience a divine connection.",
        "btnText": "Explore Services",
        "quote": "आत्मा की अन्वेषणा, शांति का सफर।",
        "img1": "/images/home/carousel_shiva.png",
        "img2": "/images/home/carosuel_krishna.png",
        "img3": "/images/home/carousel_ganesh.png"
    },

]


const CarouselSlider = () => {
    return (
        <Carousel className='carousel' indicators={false} animation='slide' duration={1000} autoPlay={false} navButtonsAlwaysVisible={true}  >
            {
                slider.map((item) => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}

function Item({ item }) {

    const [positions, setPositions] = useState([
        { top: '3%', right: '10%', width: '100%', zIndex: 1 },
        { top: '50%', right: '80%', width: '50%', zIndex: 3 },
        { top: '50%', right: '0%', width: '70%', zIndex: 2 },
    ]);

    const [positionsMd, setPositionsMd] = useState([
        { top: '3%', right: '10%', width: '100%', zIndex: 1 },
        { top: '40%', right: '80%', width: '50%', zIndex: 3 },
        { top: '40%', right: '0%', width: '70%', zIndex: 2 },
    ])

    const [positionsXs, setPositionsXs] = useState([
        { top: '17%', right: '10%', width: '100%', zIndex: 1 },
        { top: '38%', right: '80%', width: '50%', zIndex: 3 },
        { top: '38%', right: '0%', width: '70%', zIndex: 2 },
    ])

    const [positionsSm, setPositionsSm] = useState([
        { top: '10%', right: '10%', width: '100%', zIndex: 1 },
        { top: '35%', right: '80%', width: '50%', zIndex: 3 },
        { top: '35%', right: '0%', width: '70%', zIndex: 2 },
    ])

    /* Anticlockwise rotation */
    useEffect(() => {
        const interval = setInterval(() => {
            setPositions(prevPositions => {
                /* For lg and big screens */
                const newPositions = [...prevPositions];
                const lastPosition = newPositions.pop();
                newPositions.unshift(lastPosition);
                return newPositions;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const intervalMd = setInterval(() => {
            setPositionsMd(prevPositionsMd => {
                /* For md screens */
                const newPositionsMd = [...prevPositionsMd];
                const lastPositionMd = newPositionsMd.pop();
                newPositionsMd.unshift(lastPositionMd);
                return newPositionsMd;
            });
        }, 2000);
        return () => clearInterval(intervalMd);
    }, []);

    useEffect(() => {
        const intervalXs = setInterval(() => {
            setPositionsXs(prevPositionsXs => {
                /* For xs screens */
                const newPositionsXs = [...prevPositionsXs];
                const lastPositionXs = newPositionsXs.pop();
                newPositionsXs.unshift(lastPositionXs);
                return newPositionsXs;
            });
        }, 2000);
        return () => clearInterval(intervalXs);
    }, []);

    useEffect(() => {
        const intervalSm = setInterval(() => {
            setPositionsSm(prevPositionsSm => {
                /* For sm screens */
                const newPositionsSm = [...prevPositionsSm];
                const lastPositionSm = newPositionsSm.pop();
                newPositionsSm.unshift(lastPositionSm);
                return newPositionsSm;
            });
        }, 2000);
        return () => clearInterval(intervalSm);
    }, []);

    return (
        <Box marginLeft='2%' marginRight='2%'>
            {/* For lg and big screens */}
            {/* Experiment */}
            <Grid container borderRadius='15px' style={{ background: '-webkit-linear-gradient(150deg, #f29d4b 56.31%, #ff7d00)',  }} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <Grid item md={6} marginTop='7%'>
                    <Box marginLeft='5%'>
                        <Box marginTop='4%'>
                            <Typography style={{ fontSize: '40px', fontWeight: '500' }}>{item.heading}</Typography>
                        </Box>
                        <Box marginRight='5%' marginBottom='8%'>
                            <Typography style={{ fontSize: '16px' }}>{item.subheading}</Typography>
                        </Box>
                        {item.btnText && item.btnText.trim() !== '' && (
                            <Box >
                                <Button style={{ borderRadius: '35px', backgroundColor: '#f24e1e', color: 'white', padding: '2.0%' }}>{item.btnText}</Button>
                            </Box>
                        )}
                        <Box marginBottom='10%' marginTop='8%'>
                            <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.quote}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} overflow='hidden' marginTop='3%'>
                    <Box sx={{ position: 'relative', height: '100%' }} marginLeft='25%' marginRight='5%' marginBottom='10%' paddingTop='40%'>
                        <img src={item.img1} alt="Shiva" className="image-transition" style={{ position: 'absolute', ...positions[0] }} />
                        <img src={item.img2} alt="Krishna" className="image-transition" style={{ position: 'absolute', ...positions[1] }} />
                        <img src={item.img3} alt="Ganesh" className="image-transition" style={{ position: 'absolute', ...positions[2] }} />
                    </Box>
                </Grid>
            </Grid>
            {/* For md screen */}
            <Grid container borderRadius='15px' style={{ background: '-webkit-linear-gradient(150deg, #f29d4b 56.31%, #ff7d00)', backgroundSize: 'cover' }} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' }}>
                <Grid item md={6} marginTop='7%'>
                    <Box marginLeft='5%'>
                        <Box marginTop='7%'>
                            <Typography style={{ fontSize: '28px', fontWeight: '500' }}>{item.heading}</Typography>
                        </Box>
                        <Box marginRight='5%' marginBottom='10%'>
                            <Typography style={{ fontSize: '18px' }}>{item.subheading}</Typography>
                        </Box>
                        <Box marginBottom='15%'>
                            <Button style={{ borderRadius: '35px', backgroundColor: '#f24e1e', color: 'white', padding: '2.0%' }}>{item.btnText}</Button>
                        </Box>
                        <Box marginBottom='20%'>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.quote}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} overflow='hidden' marginTop='12%'>
                    <Box sx={{ position: 'relative', height: '100%' }} marginLeft='25%' marginRight='5%' marginBottom='10%' paddingTop='40%'>
                        <img src={item.img1} alt="Shiva" className="image-transition" style={{ position: 'absolute', ...positionsMd[0] }} />
                        <img src={item.img2} alt="Krishna" className="image-transition" style={{ position: 'absolute', ...positionsMd[1] }} />
                        <img src={item.img3} alt="Ganesh" className="image-transition" style={{ position: 'absolute', ...positionsMd[2] }} />
                    </Box>
                </Grid>
            </Grid>
            {/* For xs screen */}
            <Grid container borderRadius='15px' style={{ background: '-webkit-linear-gradient(150deg, #f29d4b 56.31%, #ff7d00)', backgroundSize: 'cover' }} display={{ xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid item xs={6} marginTop='10%'>
                    <Box marginLeft='5%'>
                        <Box marginTop='7%' marginBottom='10%'>
                            <Typography style={{ fontSize: '15px', fontWeight: '500' }}>{item.heading}</Typography>
                        </Box>
                        <Box marginRight='5%' marginBottom='10%'>
                            <Typography style={{ fontSize: '10px' }}>{item.subheading}</Typography>
                        </Box>
                        <Box marginBottom='25%'>
                            <Button style={{ borderRadius: '35px', backgroundColor: '#f24e1e', color: 'white', padding: '2.0%' }}>{item.btnText}</Button>
                        </Box>
                        <Box marginBottom='20%'>
                            <Typography style={{ fontSize: '10px', fontWeight: 'bold' }}>{item.quote}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} overflow='hidden' marginTop='12%'>
                    <Box sx={{ position: 'relative', height: '100%' }} marginLeft='25%' marginRight='5%' marginBottom='10%' paddingTop='40%'>
                        <img src={item.img1} alt="Shiva" className="image-transition" style={{ position: 'absolute', ...positionsXs[0] }} />
                        <img src={item.img2} alt="Krishna" className="image-transition" style={{ position: 'absolute', ...positionsXs[1] }} />
                        <img src={item.img3} alt="Ganesh" className="image-transition" style={{ position: 'absolute', ...positionsXs[2] }} />
                    </Box>
                </Grid>
            </Grid>
            {/* For sm screen */}
            <Grid container borderRadius='15px' style={{ background: '-webkit-linear-gradient(150deg, #f29d4b 56.31%, #ff7d00)', backgroundSize: 'cover' }} display={{ xs: 'none', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid item sm={6} marginTop='10%'>
                    <Box marginLeft='5%'>
                        <Box marginTop='7%' marginBottom='10%'>
                            <Typography style={{ fontSize: '20px', fontWeight: '500' }}>{item.heading}</Typography>
                        </Box>
                        <Box marginRight='5%' marginBottom='10%'>
                            <Typography style={{ fontSize: '15px' }}>{item.subheading}</Typography>
                        </Box>
                        <Box marginBottom='15%'>
                            <Button style={{ borderRadius: '35px', backgroundColor: '#f24e1e', color: 'white', padding: '2.0%' }}>{item.btnText}</Button>
                        </Box>
                        <Box marginBottom='20%'>
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.quote}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={6} overflow='hidden' marginTop='12%'>
                    <Box sx={{ position: 'relative', height: '100%' }} marginLeft='25%' marginRight='5%' marginBottom='10%' paddingTop='40%'>
                        <img src={item.img1} alt="Shiva" className="image-transition" style={{ position: 'absolute', ...positionsSm[0] }} />
                        <img src={item.img2} alt="Krishna" className="image-transition" style={{ position: 'absolute', ...positionsSm[1] }} />
                        <img src={item.img3} alt="Ganesh" className="image-transition" style={{ position: 'absolute', ...positionsSm[2] }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CarouselSlider
