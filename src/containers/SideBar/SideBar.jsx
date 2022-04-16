import React from 'react';

import {NavbarDesktop} from '../../components';

const SideBar = () => {
  return (
    <aside className="vh-100 col-2 d-flex flex-column flex-shrink-0 bg-light p-3 pt-0">
      <div className="d-flex flex-column h-100">
        <div>
          <h5 className="d-flex align-items-center" style={{minHeight: '70px'}}>
            Lobel Investing
          </h5>
        </div>
        <NavbarDesktop />
      </div>
    </aside>
  );
};

export default SideBar;
