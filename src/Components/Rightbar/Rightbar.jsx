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
        {/* <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
        </List>
        
        <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
        </List>
        <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
        </List>
        <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
        </List>
        <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
        </List>
        <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={postImg} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {" — I'll be in your neighborhood doing errands this…"}
                    
                
                />
            </ListItem>
            
        </List> */}
        <Divider variant='inset' component={'div'} />

        <Typography align='center' bgcolor={'black'} color={'white'}>
            About us
        </Typography>

        <BlogCard cardImg={postImg}/>

    </Box>
  )
}

export default Rightbar