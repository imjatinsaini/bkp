import React from 'react';
import { Box, Typography } from '@mui/material';

const YogaintroImage = ({ imageSrc, title, subtitle1, subtitle2, styles }) => {
    return (
        <Box paddingTop='100px'>
            {styles.map((style, index) => (
                <Box key={index} position='relative' display={style.display}>
                    <img src={imageSrc} width='100%'/>
                    <Box position='absolute' top='30%' left='7%' width={style.textWidth}>
                        <Box>
                            <Typography fontSize={style.titleFontSize} fontWeight='bold' color='white'>{title}</Typography>
                            <Typography fontSize={style.subtitleFontSize} color='white'>{subtitle1}</Typography>
                            <Typography fontSize={style.subtitleFontSize} color='white'>{subtitle2}</Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default YogaintroImage;
