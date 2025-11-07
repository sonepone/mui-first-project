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

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem key={"Sone"} disablePadding>
            <ListItemButton component={Link} to={"/tabela"}>
              <ListItemIcon>
                <BalanceIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Sone"} />
            </ListItemButton>
          </ListItem>
//=====================================================================
          <ListItem key={"Submenu"} disablePadding>
            <ListItemButton onClick={(event) =>
                                          {
                                            event.stopPropagation();
                                            setSubMenuOpen(!subMenuOpen)
                                          }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Submenu" />
            </ListItemButton>
            {subMenuOpen && (
              <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem key={"Submenu1"} disablePadding>
                    <ListItemButton component={Link} to={"/submenu1"}>
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Submenu1" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key={"Submenu2"} disablePadding>
                    <ListItemButton component={Link} to={"/submenu2"}>
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Submenu2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key={"Submenu3"} disablePadding>
                    <ListItemButton component={Link} to={"/submenu3"}>
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Submenu3" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            )}
          </ListItem>
//=====================================================================


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

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
