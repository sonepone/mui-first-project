import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
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
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AndroidIcon from '@mui/icons-material/Android';
import AttractionsIcon from '@mui/icons-material/Attractions';
import * as MuiIcons from '@mui/icons-material';


// pomocna funkcija za kreiranje komponenti ikonica po imenu
const createIconComponent = (iconName) => {
   const IconComponent = MuiIcons[iconName];
   return IconComponent ? <IconComponent /> : <MuiIcons.HelpOutline />;
};

const DynamicIconComponent = ({ iconName, ...props }) => {
  // Access the component from the MuiIcons object using bracket notation
  const Icon = MuiIcons[iconName];

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found`);
    return null; 
  }

  // Create the element dynamically
  return React.createElement(Icon, props, null);
};




function SideMenu({toggleDrawer, open}) {
   // objekat koji kontrolise da li je submenu otvoren ili zatvoren
   // u aplikaciji moze biti vise submenu-a, pa u ovom objektu stoje svi
   // npr. {sub1: true, sub2: false} -- znaci: submenu1 - otvoren;  submenu2 - zatvoren
   const  [submenuOpen, setSubmenuOpen] = React.useState({});

   // toggle statusa pojedinacnog submenija
  const toggleSubmenu = (submenuName) => {
     setSubmenuOpen( (prevSubmenuOpen) => {

        const newSubmenuOpen = {
          ...prevSubmenuOpen, 
          [submenuName]:  !prevSubmenuOpen[submenuName]
            
        };

        return newSubmenuOpen;
     } );
  };

  // zatvaranje ili otvaranje svih submenija
  const setAllSubmenus = (newState) => {
     setSubmenuOpen( (previousState) => {
         let returnObject = {};
         for(const key in previousState){
            returnObject[key] = newState;
         }
         return returnObject;
     } );
  };

  //===========================================================
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" 
       onClick={() => { 
               console.log('Klik na bilo koju stavku menija');
               setAllSubmenus(false);       // sve submenije zatvaramo
               toggleDrawer(false).apply(); // zatvaramo drawer
              }}
       onKeyDown={toggleDrawer(false)}>
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

          {/* Sada slijedi submenu */}
           {/* <ListItem key={"MojSubmenu1"} disablePadding>  */}

            <ListItemButton onClick={(event) => { 
                                          event.stopPropagation() /*da se ne zatvori glavni meni*/; 
                                          toggleSubmenu('submenu1');
                                       }
                                    }
            >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Projects" />
              {submenuOpen['submenu1']/*openMenu1*/ ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={submenuOpen['submenu1'] /*openMenu1*/} timeout="auto" unmountOnExit>
              <List component="div" disablePadding 
                 onClick={(event) => 
                    { 
                      setAllSubmenus(false);
                    }
                  }>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary="Project A" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><DynamicIconComponent iconName="AcUnit" /></ListItemIcon>
                  <ListItemText primary="Project B" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><DynamicIconComponent iconName="Light" /></ListItemIcon>
                  <ListItemText primary="Project C" />
                </ListItemButton>
              </List>
            </Collapse>
          {/* </ListItem> */}
        <Divider />
        {/* Expandable Menu 2 */}
        <ListItemButton onClick={(event) => { 
             event.stopPropagation();
               //setOpenMenu2(!openMenu2);
               toggleSubmenu('submenu2')
             }}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Management" />
          { submenuOpen['submenu2']/*openMenu2*/ ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={ submenuOpen['submenu2'] /*openMenu2*/} timeout="auto" unmountOnExit>
          <List component="div" disablePadding 
             onClick={() => { 
               //setOpenMenu1(false); 
               //setOpenMenu2(false); 
               setAllSubmenus(false);
               }
               }>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Roles" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Permissions" />
            </ListItemButton>
          </List>
        </Collapse>
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
  //===========================================================



   const jsx_code = (
      <div>
        <Drawer open={open} 
           onClose={ () => {  
              ( toggleDrawer(false))(); 
                setAllSubmenus(false); // zatvaramo sve submenij      
              }}>
          {DrawerList}
        </Drawer>
      </div>
      
   );

   return jsx_code;

}



export default SideMenu;