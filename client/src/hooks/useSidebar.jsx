import { useState } from 'react';

const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarStyles = {
    width: isCollapsed ? '50px' : '300px',
    transition: 'width 0.3s',
  };

  const iconStyles = {
    transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s',
  };

  const menuItemStyles = {
    opacity: isCollapsed ? '0' : '1',
    width: isCollapsed ? '0' : '100%',
    transition: 'all 0.2s ease-in-out',
  };

  return { 
    isCollapsed, 
    toggleSidebar, 
    sidebarStyles, 
    iconStyles, 
    menuItemStyles 
  };
};

export default useSidebar;
