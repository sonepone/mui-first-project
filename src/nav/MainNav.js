import React from 'react';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
function MainNav() {
    const [open, setOpen] = React.useState(false);
    console.log("MainNav rendered - open = ", open);
    const toggleDrawer = (newOpen) => () => {
        console.log("Toggle drawer called. New open state: ", newOpen);
        setOpen(newOpen);
    };

    return ( 
        <nav>
           <TopMenu  toggleDrawer={toggleDrawer} open={open} />           
           <SideMenu toggleDrawer={toggleDrawer} open={open} />
        </nav>
    );
}


export default MainNav