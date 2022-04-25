import React from 'react';
import {NavbarDesktop} from '../../components';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

const SideBar = () => {
  return (
    <aside className="row-span-full flex flex-col shrink-0 p-3 pt-0 col-[1/1] xl:w-[220px] border ">
      <div className="flex flex-col h-full">
        <div>
          <h5
            className=" items-center invisible xl:visible xl:flex"
            style={{minHeight: '70px'}}
          >
            Lobel Investing
          </h5>
        </div>
        <NavbarDesktop className={`hidden xl:flex`} />
        <NavbarMobile className={`flex flex-col items-center  xl:hidden`} />
      </div>
    </aside>
  );
};

export default SideBar;
