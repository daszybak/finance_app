import React from 'react';
import {IconContext} from 'react-icons';

import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoListOutline,
  IoCalculatorOutline,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

import NavbarLink from './NavbarLink/NavbarLink';

import './navbar.scss';

const NavbarDesktop = ({className}) => {
  return (
    <nav className={`flex flex-col justify-between h-full ${className}`}>
      <div className="flex flex-col gap-4 mb-4">
        <NavbarLink to="/">
          <IoHomeOutline /> Home
        </NavbarLink>
        <NavbarLink to="news">
          <IoNewspaperOutline /> News
        </NavbarLink>
        <NavbarLink to="watchlist">
          <IoListOutline /> Watchlist
        </NavbarLink>
        <NavbarLink to="calculator">
          <IoCalculatorOutline /> Calculator
        </NavbarLink>
        <NavbarLink to="chat">
          <IoChatbubblesOutline /> Chat
        </NavbarLink>
      </div>
      <div className="flex flex-col gap-4 bottom-0">
        <NavbarLink to="settings">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoSettingsOutline />
            <h6>Settings</h6>
          </IconContext.Provider>
        </NavbarLink>
        <NavbarLink to="logout">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoLogOutOutline />
            <h6> Log out</h6>
          </IconContext.Provider>
        </NavbarLink>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
