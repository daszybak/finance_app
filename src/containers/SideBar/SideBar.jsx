import React from 'react';

import {NavbarDesktop} from '../../components';

const SideBar = () => {
  return (
    <aside className="row-span-full flex flex-col shrink-0 bg-white p-3 pt-0 col-[1/3] border ">
      <div className="flex flex-col h-full">
        <div>
          <h5 className="flex items-center" style={{minHeight: '70px'}}>
            Lobel Investing
          </h5>
        </div>
        <NavbarDesktop />
      </div>
    </aside>
  );
};

export default SideBar;
