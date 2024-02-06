import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import postImg from '../../static/user.jpg'
import BlogCard from '../BlogCard/BlogCard'
import getImageUrl from '../../utils'
import popular from '../../data/popular.json'
import PopularPost from './PopularPost'

const Rightbar = () => {
  return (
    <Box>
        <Typography align='center' bgcolor={'black'} color={'white'}>
            Most Popular
        </Typography>
        {
            popular.map((item, id) => {
                return <PopularPost key={id} image={getImageUrl(item.image)} text={item.postText}/>
            })
        }
        
        <Divider variant='inset' component={'div'} />

        <Typography align='center' bgcolor={'black'} color={'white'}>
            About us
        </Typography>

        <BlogCard cardImg={postImg}/>

    </Box>
  )
}

export default Rightbar