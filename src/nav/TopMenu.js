import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TopMenu({toggleDrawer, open}) {

   const jsx_code = 
     
     (  
        <Box sx={{ border: '3px solid gray', display: 'flex', flexDirection: 'column', boxShadow: 3, alignItems: 'center' }}>
            {/* TOP BLUE BAR */}
           <AppBar position="static">
              <Toolbar sx={{/*border: '2px red solid',*/ height: '48px!important', minHeight: 'unset!important'}}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={ toggleDrawer(!open) }
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">{"MeDOK"}</Typography>
              </Toolbar>
           </AppBar>
       </Box>
     );
// const jsx_code = <h2>Prikazi ovo</h2>
    return jsx_code;
}

export default TopMenu;