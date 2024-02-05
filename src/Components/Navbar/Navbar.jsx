import { AppBar, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import React, { useState } from 'react'

const Navbar = () => {

    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent: 'space-between'
    })

    const SocialBox = styled(Box)({
        display: 'flex',
        gap: 10,
    })
    
    const MenuBox = styled(Box)({
        display: 'flex',
        gap: 30,
    })

    const MenuItems = [
        {Name: 'Home', Link: '/'},
        {Name: 'Products', Link: '#'},
        {Name: 'Portfolio', Link: '#'},
        {Name: 'Blog', Link: '#'},
        {Name: 'Contact us', Link: '#'}
    ]

    const SearchBox = styled(Box)({
        display: 'flex',
        gap: 5,
    })

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AppBar sx={{background: 'black'}} position='fixed'>
        <StyledToolbar>
            <SocialBox>
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
            </SocialBox>
            
            <MenuBox
            sx={{display: {xs:'none', sm: 'none', md:'flex'}}}
            >
                {MenuItems.map((item, id) => {
                    return (

                        <Typography sx={{cursor:'pointer', fontSize:'14px'}} key={id}>
                            {item.Name}
                        </Typography>
                    )
                })}
                
            </MenuBox>
            <SearchBox>
                <InputBase placeholder='Search...' sx={{color:'white'}}/>
                <MenuRoundedIcon
                sx={{display: {xs:'flex', sm: 'flex', md:'none'}}}
                onClick={()=>setMenuOpen(!menuOpen)}
                />
            </SearchBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={menuOpen}
        onClose={()=>setMenuOpen(!menuOpen)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350, height:'90vh'}}>
                {MenuItems.map((item, id) => {
                    return (

                        <MenuItem 
                        sx={{cursor:'pointer', fontSize:'14px'}} key={id}
                        onClick={()=>setMenuOpen(!menuOpen)}
                        >
                            {item.Name}
                        </MenuItem>
                    )
                })}
        </Box>
        
      </Menu>
    </AppBar>
  )
}

export default Navbar