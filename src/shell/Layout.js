import React from 'react';
import MainNavigation from './MainNavigation';
function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
