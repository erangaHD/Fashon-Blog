import { Box, Grid } from '@mui/material'
import React from 'react'
import cardImg1 from '../../static/image1.webp'
import BlogCard from '../BlogCard/BlogCard'

const Recents = () => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:1}}>
            <Grid item xs={12}>
                <BlogCard cardImg={cardImg1}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard cardImg={cardImg1}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard cardImg={cardImg1}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard cardImg={cardImg1}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard cardImg={cardImg1}/> 
            </Grid>
            
            
        </Grid>
    </Box>
  )
}

export default Recents