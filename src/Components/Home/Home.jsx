import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'
import Recents from '../Recents/Recents'
import Rightbar from '../Rightbar/Rightbar'

const Home = () => {
  return (
    <Box>
        <Hero/>
        <Container>
            <Categories/>
            <hr style={{marginTop:20}} />
            <Stack direction={{sm:'column', md:'row'}} spacing={2} mt={8}>
                <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                    <Recents/>
                </Box>
                <Box flex={1}>
                    <Rightbar/>
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Home