import React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

const PopularPost = (props) => {
  return (
    <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-end">
                <ListItemAvatar>
                <Avatar sx={{height:80, width:80}} variant='square' alt="Remy Sharp" src={props.image} />
                </ListItemAvatar>
                <ListItemText
                
                secondary=
                    
                        {props.text}
                    
                
                />
            </ListItem>
        </List>
  )
}

export default PopularPost