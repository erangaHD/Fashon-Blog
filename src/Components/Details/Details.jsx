import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import detailImg from '../../static/detail3.webp'
import postImg from '../../static/user.jpg'
import Rightbar from '../Rightbar/Rightbar'

const Details = () => {
  return (
    <Box>
        <Box
        sx={{
            backgroundImage: `url(${detailImg})`,
            backgroundPosition:'center',
            backgroundSize: 'cover',
            height: '250px'
        }}
        >
            <Typography
            align='center'
            color={'black'}
            variant='h2'
            sx={{fontWeight:900, padding:10}}
            >
                Clicked Poste Title
            </Typography>
        </Box>
        <Container>
            <hr />
            <Stack
            direction={{xs:'column', md:'row'}}
            spacing={{xs:1, sm:2, md:8}}
            mt={8}
            >
                <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                    <Typography
                    m={4}
                    align='center'
                    color={'gray'}
                    variant='body1'
                    sx={{fontWeight:900}}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptate iure vel ipsam ad recusandae. Voluptate ut dolore odit, 
                        ducimus deserunt sed pariatur neque rerum cupiditate fugit cumque 
                        amet? Perferendis, cupiditate culpa. Soluta aliquam aliquid nostrum 
                        distinctio exercitationem, esse ad, ipsam illo ipsum nobis nulla, quis 
                        tenetur accusamus at tempore asperiores!
                    </Typography>
                    <CardMedia
                    component={'img'}
                    height={'300px'}
                    image={postImg}
                    alt='test'
                    />

                    <Typography align='center' variant='h4' mt={2}>
                        Wait for it wait
                    </Typography>

                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptate iure vel ipsam ad recusandae. Voluptate ut dolore odit, 
                        ducimus deserunt sed pariatur neque rerum cupiditate fugit cumque 
                        amet? Perferendis, cupiditate culpa. Soluta aliquam aliquid nostrum 
                        distinctio exercitationem, esse ad, ipsam illo ipsum nobis nulla, quis 
                        tenetur accusamus at tempore asperiores!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptate iure vel ipsam ad recusandae. Voluptate ut dolore odit, 
                        ducimus deserunt sed pariatur neque rerum cupiditate fugit cumque 
                        amet? Perferendis, cupiditate culpa. Soluta aliquam aliquid nostrum 
                        distinctio exercitationem, esse ad, ipsam illo ipsum nobis nulla, quis 
                        tenetur accusamus at tempore asperiores!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptate iure vel ipsam ad recusandae. Voluptate ut dolore odit, 
                        ducimus deserunt sed pariatur neque rerum cupiditate fugit cumque 
                        amet? Perferendis, cupiditate culpa. Soluta aliquam aliquid nostrum 
                        distinctio exercitationem, esse ad, ipsam illo ipsum nobis nulla, quis 
                        tenetur accusamus at tempore asperiores!
                    </Typography>
                        
                </Box>

                <Box flex={1}>
                    <Rightbar/>
                </Box>

            </Stack>
        </Container>
    </Box>
  )
}

export default Details