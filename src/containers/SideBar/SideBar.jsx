import React from 'react';
import {NavbarDesktop} from '../../components';

import NavbarMobile from '../../components/Navbar/NavbarMobile';
import {useSelector} from 'react-redux';

const SideBar = () => {
  const SidebarStatus = useSelector((state) => state.sidebarStatus);
  return (
    <aside className="row-[2/3] flex flex-col shrink-0 p-3 pt-3 col-[1/1] xl:w-[220px] border ">
      <div className="flex flex-col h-full">
        <NavbarDesktop className={`hidden xl:flex`} />
        <NavbarMobile className={`flex flex-col items-center  xl:hidden`} />
      </div>
    </aside>
  );
};

export default SideBar;
