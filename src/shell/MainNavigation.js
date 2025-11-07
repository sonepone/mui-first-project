import { NavLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Orders from '../components/Orders';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
//=====================================================================
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import BalanceIcon from '@mui/icons-material/Balance';
import Drawer from '@mui/material/Drawer';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AndroidIcon from '@mui/icons-material/Android';
import AttractionsIcon from '@mui/icons-material/Attractions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
//=====================================================================


function MainNavigation() {
    const location = useLocation();
    const paths = ['/', '/extended', '/yup', '/tabela', '/drawer'];
    const current = paths.includes(location.pathname) ? location.pathname : false;

//=====================================================================
const [open, setOpen] = React.useState(false);
const [openMenu1, setOpenMenu1] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem key={"Sone"} disablePadding>
            <ListItemButton component={Link} to={"/tabela"}>
              <ListItemIcon>
                <BalanceIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Tabela"} secondary="ElementiTabele" />
            </ListItemButton>
          </ListItem>

          <ListItem key={"MyForm"} disablePadding>
            <ListItemButton component={Link} to={"/"}>
              <ListItemIcon>
                <AirplanemodeActiveIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Neka forma"} secondary={"MyForm"}/>
            </ListItemButton>
          </ListItem>

          <ListItem key={"ExtendedForm"} disablePadding>
            <ListItemButton component={Link} to={"/extended"}>
              <ListItemIcon>
                <AndroidIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Проширена форма"} secondary={"ExtendedForm"}/>
            </ListItemButton>
          </ListItem>

          <ListItem key={"Orders"} disablePadding>
            <ListItemButton component={Link} to={"/orders"}>
              <ListItemIcon>
                <AttractionsIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItemButton>
          </ListItem>

          {/* pokusavam dodati item sa submenu  */}
          {/* <ListItem key={"MojSubmenu1"} disablePadding> */}

            <ListItemButton onClick={(event) => { event.stopPropagation(); setOpenMenu1(!openMenu1)}}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Projects" />
              {openMenu1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding onClick={(event) => { setOpenMenu1(false);  }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary="Project A" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary="Project B" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary="Project C" />
                </ListItemButton>
              </List>
            </Collapse>

          {/* </ListItem> */}

        <Divider />
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );





//=====================================================================



    return (
      <nav>
        <div>
          {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>


        <Box sx={{ border: '3px solid gray', display: 'flex', flexDirection: 'column', boxShadow: 3, alignItems: 'center' }}>

          {/* <Box sx={{ height: 40 , width: '100%', backgroundColor: '#165799ff', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
            <Box sx={{ display: 'flex', alignItems: 'center',   borderRadius: 1, color: 'white' }}>
              <IconButton aria-label="menu" sx={{ m: 2, color: 'white' }} onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box> */}

          {/* TOP BLUE BAR */}
          <AppBar position="static">
            {/* <Toolbar sx={{border: '2px red solid', height: '32px!important', minHeight: 'unset!important'}}> */}
            <Toolbar sx={{border: '2px red solid', height: '48px!important', minHeight: 'unset!important'}}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!open)}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6">My App</Typography>
            </Toolbar>
          </AppBar>


          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs
                value={current}
                aria-label="navigation tabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label="MyForm" value="/" component={NavLink} to="/" />
                <Tab label="ExtendedForm" value="/extended" component={NavLink} to="/extended" />
                <Tab label="FormWithYup" value="/yup" component={NavLink} to="/yup" />
                <Tab label="ElementiTabele" value="/tabela" component={NavLink} to="/tabela" />
                <Tab label="TemporaryDrawer" value="/drawer" component={NavLink} to="/drawer" />
                <Tab label="Orders" value="/orders" component={NavLink} to="/orders" />
            </Tabs>
          </Box>
        </Box>
      </nav>
    );
  }

  export default MainNavigation;