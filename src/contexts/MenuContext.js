import React, { useState } from 'react';
import { menuItems } from '../components/Menu/menuItems';

export const MenuContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {},
  menuItems: []
});

const MenuContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen: isOpen,
        toggleMenu: toggleMenu,
        menuItems: menuItems,
        setMenuState: setOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
