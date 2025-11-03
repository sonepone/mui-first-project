import { NavLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Orders from '../components/Orders';
function MainNavigation() {
    const location = useLocation();
    const paths = ['/', '/extended', '/yup', '/tabela', '/drawer'];
    const current = paths.includes(location.pathname) ? location.pathname : false;

    return (
      <nav>
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
      </nav>
    );
  }

  export default MainNavigation;