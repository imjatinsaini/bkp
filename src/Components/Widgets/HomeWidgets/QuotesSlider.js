import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Paper, Typography, Avatar, IconButton } from '@mui/material'
import React, {useState} from 'react'

const QuotesSlider = () => {

    const [isNext,setIsNext] = useState(false)
    const [isPrevious, setIsPrevious] = useState(false)

    return (
        <Box style={{ backgroundImage: "url('/images/home/quotes_background.png')",backgroundSize: 'contain' ,padding: '2%' }}>
            <Box border='1px solid white' borderRadius='10px' >
                { /* For larger screens than sm */}
                <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                        <img src='/images/home/quotes_sign.png' width='13px' height='16px' />
                    </Paper>
                    <Typography color='black' fontSize='24px' marginTop='1%'>Quotes</Typography>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                        <img src='/images/home/quotes_sign.png' width='13px' height='16px' />
                    </Paper>
                </Box>
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginRight: '1.5%', border: 'none' }}>
                        <img src='/images/home/quotes_sign.png' width='11px' height='13px' />
                    </Paper>
                    <Typography color='black' fontSize='18px' marginTop='1%'>Quotes</Typography>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginLeft: '1.5%', border: 'none' }}>
                        <img src='/images/home/quotes_sign.png' width='11px' height='13px' />
                    </Paper>
                </Box>

                { /* For larger screens than sm */}
                <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '5%', border: 'none', borderTop: '5px solid white', marginBottom: '2%' }} mx='auto' />
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid white', marginBottom: '2%' }} mx='auto' />

                { /* For larger screens than md */}
                <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='20%' marginRight='20%'>
                    <Typography color='white' fontSize='24px' fontWeight='500' marginTop='2.5%' textAlign='center'>“जब हमारा मन कमजोर होता हैं, तब परिस्थितियां समस्या बन जाती हैं और जब हमारा मन कठोर होता है तब परिस्थितियां चुनौती बन जाती हैं। जब हमारा मन मजबूत होता हैं, तब परिस्थितियां अवसर बन जाती हैं।”</Typography>
                </Box>
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='10%' marginRight='10%'>
                    <Typography color='white' fontSize='15px' marginTop='2.5%' fontWeight='500' textAlign='center'>“जब हमारा मन कमजोर होता हैं, तब परिस्थितियां समस्या बन जाती हैं और जब हमारा मन कठोर होता है तब परिस्थितियां चुनौती बन जाती हैं। जब हमारा मन मजबूत होता हैं, तब परिस्थितियां अवसर बन जाती हैं।”</Typography>
                </Box>

                { /* For larger screens than md */}
                <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} alignItems='center' justifyContent='right' marginLeft='20%' marginRight='20%' marginTop='3%'>
                    <Avatar sx={{ backgroundColor: 'white', width: '8px', height: '8px', marginRight: '2%' }}></Avatar>
                    <Typography color='white' fontSize='24px' textAlign='right' fontWeight='500'>श्रीमदभागवतगीता</Typography>
                </Box>
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} alignItems='center' justifyContent='right' marginLeft='20%' marginRight='10%' marginBottom='3%' marginTop='3%'>
                    <Avatar sx={{ backgroundColor: 'white', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                    <Typography color='white' fontSize='12px' textAlign='right' fontWeight='350' >
                        श्रीमदभागवतगीता
                    </Typography>
                </Box>

                <Box display='flex' justifyContent='space-between' marginLeft='3%' marginRight='3%' marginBottom='2%' marginTop='2%'>
                    <IconButton style={{ border: isPrevious ? '1px solid black' : '1px solid white', color: isPrevious ? '#f24e1e' : 'white', backgroundColor: isPrevious ? 'black' : 'transparent' }} onMouseOver={()=>setIsPrevious(true)} onMouseOut={()=>setIsPrevious(false)}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton style={{ border: isNext ? '1px solid black' : '1px solid white', color: isNext ? '#f24e1e' : 'white', backgroundColor: isNext ? 'black' : 'transparent' }} onMouseOver={()=>setIsNext(true)} onMouseOut={()=>setIsNext(false)}>
                        <ArrowForward />
                    </IconButton>
                </Box>

            </Box>
        </Box>
    )
}

export default QuotesSlider
