import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { DynamicIconComponent } from './DynamicIconComponent';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function SideMenuItem({ menuItem }) {
    const { key, action, title1, title2, iconName, type, submenuItems, toggleSubmenu, submenuOpen, setAllSubmenus } = menuItem;
    
    let jsx_code = null;
console.log('SideMenuItem props:', { key, action, title1, title2, iconName, type, submenuItems, toggleSubmenu, submenuOpen  });
    if (type === 'common-menu-item') {
        jsx_code = (
          <ListItem key={key} disablePadding>
            <ListItemButton component={Link} to={action}>
              <ListItemIcon>
                <DynamicIconComponent iconName={iconName} />
                {/* <BalanceIcon />  */}
              </ListItemIcon>
              <ListItemText primary={title1} secondary={title2} />
            </ListItemButton>
          </ListItem>            
        );
    }
    else if (type === 'container-menu-item') {
       jsx_code = (
        <>
            <ListItemButton onClick={(event) => { 
                                          event.stopPropagation() /*da se ne zatvori glavni meni*/; 
                                          toggleSubmenu(key);
                                       }
                                    }
            >
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <DynamicIconComponent iconName={iconName} />
              </ListItemIcon>
              <ListItemText primary={title1} secondary={title2} />
              {submenuOpen[key] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={submenuOpen[key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding 
                 onClick={(event) => 
                    { 
                      setAllSubmenus(false);
                    }
                  }>
                    {submenuItems && submenuItems.map((subItem) => (

                        <ListItemButton sx={{ pl: 4 }} component={Link} to={subItem.action} key={subItem.key}>
                          <ListItemIcon>
                            {subItem.iconName && <DynamicIconComponent iconName={subItem.iconName} />}
                          </ListItemIcon>
                          <ListItemText primary={subItem.title1} secondary={subItem.title2} />
                        </ListItemButton>
                    ))}
              </List>
            </Collapse>
        </>

       );


    }
    else if (type === 'separator-menu-item') {
        jsx_code = (<Divider />);
    }


    return jsx_code;
}


export default SideMenuItem;