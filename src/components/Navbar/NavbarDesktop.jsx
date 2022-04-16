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

const NavbarDesktop = () => {
  return (
    <nav className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column gap-4 mb-4">
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
      <div className="d-flex flex-column gap-4 bottom-0">
        <NavbarLink to="settings">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <div>
              <IoSettingsOutline /> Settings
            </div>
          </IconContext.Provider>
        </NavbarLink>
        <NavbarLink className="d-flex align-items-end" to="logout">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <div>
              <IoLogOutOutline /> Log out
            </div>
          </IconContext.Provider>
        </NavbarLink>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
