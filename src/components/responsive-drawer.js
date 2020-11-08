import React from 'react';
import Hamburger from './hamburger';
import MainNav from './main-nav';

function ResponsiveDrawer() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevIsMobileOpen) => !prevIsMobileOpen);
  };

  return (
    <div>
      <Hamburger handleDrawerToggle={handleDrawerToggle} isMobileOpen={isMobileOpen} />
      <MainNav handleDrawerToggle={handleDrawerToggle} isMobileOpen={isMobileOpen} />
    </div>
  );
}

export default ResponsiveDrawer;
