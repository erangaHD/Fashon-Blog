import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10,
    color: 'white'
})

const Footer = () => {
  return (
    <Box
    sx={{
        background:'black',
        minHeight:'300px',
        bottom:'0px',
        display:'flex',
        justifyContent:'space-around'
        
    }}
    >
        <Stack direction={{sm:'column', md:'row'}}>
        <Stack direction={{xs:'column', sm:'row'}} >
        <Box flex={1} p={7}>
                <Typography color={'white'} align='center'>
                    Contact us
                </Typography>
                <Typography color={'white'} align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography color={'white'} align='center'>
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography color={'white'} align='center'>
                    Lorem amet.
                </Typography>
            </Box>

            <Box flex={1} p={7}>
                <Typography color={'white'} align='center'>
                    Data policy
                </Typography>
                <Typography color={'white'} align='center'>
                    Cookies
                </Typography>
                <Typography color={'white'} align='center'>
                    Data Saftey
                </Typography>
            </Box>
        </Stack>
        <Stack direction={{xs:'column', sm:'row'}}>
        <Box flex={1} p={7}>
                <Typography color={'white'} align='center'>
                    Categories
                </Typography>
                <Typography color={'white'} variant='body2' align='center'>
                    Kids
                </Typography>
                <Typography color={'white'} variant='body2' align='center'>
                    Men
                </Typography>
                <Typography color={'white'} variant='body2' align='center'>
                    Women
                </Typography>
            </Box>

            <Box flex={1} p={7} >
                <Typography color={'white'} align='center'>
                    Follow us
                </Typography>
                <SocialBox justifyContent={'center'}>               
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <XIcon/>                
                 </SocialBox>
            </Box>    
        </Stack>    

            
        </Stack>
    </Box>
  )
}

export default Footer