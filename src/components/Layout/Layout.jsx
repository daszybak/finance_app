import React from 'react';
import {SideBar, TopBar} from '../../containers';

const Layout = ({children}) => {
  return (
    <div className="grid  grid-cols-[82px_repeat(15,1fr)] xl:grid-cols-[220px_repeat(15,1fr)] grid-rows-[70px_1fr] h-screen auto-rows-auto text-black dark:text-white bg-white dark:bg-bgBlack">
      <SideBar />
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
