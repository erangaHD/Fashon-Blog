import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import kids from '../../static/kidsImg.jpg'
import men from '../../static/menImg.jpg'
import women from '../../static/womenImg.jpg'

const StyledBox = styled(Box)({
    height:200,
    width:'100%',
    cursor:'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
})

const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    background:'white',
    opacity: '0.8'
})

const Categories = () => {
  return (
    <Box>
        <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1, sm:2, md:4}} mt={5}>
            <StyledBox sx={{backgroundImage:`url(${kids})`}}>
                <StyledTypography variant='h3' align='center'>
                    Kids
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:`url(${men})`}}>
                <StyledTypography variant='h3' align='center'>
                    Men
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={{backgroundImage:`url(${women})`}}>
                <StyledTypography variant='h3' align='center'>
                    Women
                </StyledTypography>
            </StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories