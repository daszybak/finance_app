import React from 'react';

import {Navbar} from '../../components';

const SideBar = () => {
  return (
    <div className="vh-100 col-2 d-flex flex-column flex-shrink-0 p-3 bg-light ">
      <Navbar />
    </div>
  );
};

export default SideBar;
