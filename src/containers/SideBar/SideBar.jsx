import React from 'react';
import {NavbarDesktop} from '../../components';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

const SideBar = () => {
  return (
    <aside className="row-span-full flex flex-col shrink-0 p-3 pt-0 col-[1/1] xl:w-[220px] border ">
      <div className="flex flex-col h-full">
        <div className="hidden xl:flex xl:justify-center xl:items-center">
          <h5 className="min-h-[70px]">Lobel Investing</h5>
        </div>
        <div className="m-auto flex flex-col min-h-[70px] items-center xl:hidden">
          <BurgerMenu />
        </div>
        <NavbarDesktop className={`hidden xl:flex`} />
        <NavbarMobile className={`flex flex-col items-center  xl:hidden`} />
      </div>
    </aside>
  );
};

export default SideBar;
