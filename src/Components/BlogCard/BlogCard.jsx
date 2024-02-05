import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = ({cardImg}) => {
  return (
    <Box>
        <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={cardImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" align='center' component="div" color='tomato'>
                    PERFUMES
                    </Typography>

                      <Link to={'./details'} style={{TextDecoder:'none'}}>
                    <Typography gutterBottom variant="h5" align='center' component="div" sx={{textDecoration:'none'}}>

                    wearing this makes everyone loves you!
                    </Typography>
                      </Link>
                    
                    <Typography gutterBottom variant="body2" align='center' color='text.secondary'>
                    It's womens love
                    </Typography>

                    <Typography variant="body2" align='center' color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
    </Box>
  )
}

export default BlogCard