import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function Sidebar({ open, onClose }) {
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }} // improves performance on mobile
    >
      <List sx={{ width: 250 }} onClick={onClose} onKeyDown={onClose}>

        {/* Normal Menu Items */}
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        {/* Expandable Menu 1 */}
        <ListItemButton onClick={(event) => { event.stopPropagation(); setOpenMenu1(!openMenu1)}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Projects" />
          {openMenu1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={(event) => { setOpenMenu1(false)}}>
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

        {/* Expandable Menu 2 */}
        <ListItemButton onClick={() => setOpenMenu2(!openMenu2)}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Management" />
          {openMenu2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenu2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
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
    </Drawer>
  );
}