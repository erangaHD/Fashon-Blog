import { Box, Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import getImageUrl from '../../utils'
import articles from '../../data/articles.json'


const Recents = () => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:1}}>

            {
                articles.map((item, id) => {
                    return(
                        item.articleID === 1 ? 
                        <Grid item xs={12}><BlogCard title={item.title} topic={item.topic} description={item.description} cardImg={getImageUrl(item.image)}/></Grid> :
                        <Grid item md={6} xs={12}><BlogCard title={item.title} topic={item.topic} description={item.description} cardImg={getImageUrl(item.image)}/></Grid>
                    )
                })
            }


            {/* <Grid item xs={12}>
                <BlogCard title={articles[1].title} topic={articles[1].topic} description={articles[1].description} cardImg={getImageUrl(articles[2].image)}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard title={articles[1].title} topic={articles[1].topic} description={articles[1].description} cardImg={cardImg1}/> 
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard title={articles[1].title} topic={articles[1].topic} description={articles[1].description} cardImg={cardImg1}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard title={articles[1].title} topic={articles[1].topic} description={articles[1].description} cardImg={cardImg1}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <BlogCard title={articles[1].title} topic={articles[1].topic} description={articles[1].description} cardImg={cardImg1}/>
            </Grid> */}
            
            
        </Grid>
    </Box>
  )
}

export default Recents