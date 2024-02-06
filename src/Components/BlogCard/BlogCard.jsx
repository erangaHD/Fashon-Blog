import { Box, CardContent, CardMedia, Typography, Link } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'


const BlogCard = (props) => {

  const description = props.description
  
  
  // const words = description.split(' ');
  // const truncatedDescription = words.slice(0, 30).join(' ');
  

  return (
    <Box>
      {console.log(typeof description)}
        <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={props.cardImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" align='center' component="div" color='tomato'>
                    {props.topic}
                    </Typography>

                      <Link href='./details' sx={{textDecoration:'none'}}>
                      {/* <Link to={'./details'} style={{TextDecoder:'none'}}> */}
                    <Typography gutterBottom variant="h5" align='center' component="div" sx={{textDecoration:'none'}}>

                    {props.title}
                    </Typography>
                      </Link>                 
                    
                    <Typography variant="body2" align='center' color="text.secondary">
                    {/* {description} */}
                    {/* {`${truncatedDescription}...`} */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus vitae architecto mollitia quidem vero dolor id veniam maiores, rerum earum incidunt commodi porro quaerat.
                    </Typography>
                </CardContent>
    </Box>
  )
}

export default BlogCard