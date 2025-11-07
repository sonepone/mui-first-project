import React, { useState } from "react";
import Sidebar from "./shell/Sidebar";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* TOP BLUE BAR */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR DRAWER */}
      <Sidebar open={open} onClose={toggleDrawer} />

      {/* MAIN CONTENT */}
      <main style={{ padding: 20 }}>
        <h1>Welcome</h1>
        <p>This is your page content.</p>
      </main>
    </>
  );
}

export default App;