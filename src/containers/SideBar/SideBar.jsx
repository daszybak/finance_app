import React from 'react';

import {NavbarDesktop} from '../../components';

const SideBar = () => {
  return (
    <aside className="vh-100 col-2 d-flex flex-column flex-shrink-0 p-3 bg-light">
      <div className="d-flex flex-column px-3 h-100">
        <div>
          <h5 className="mb-2 py-2">Lobel Finance</h5>
          <hr />
        </div>
        <NavbarDesktop />
      </div>
    </aside>
  );
};

export default SideBar;
