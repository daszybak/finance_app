import React from 'react';

import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

const TopBar = () => {
  return (
    <div className="row-[1/1] col-[2/-1] grid grid-cols-6 items-center border h-[70px]">
      <div>
        <h6>Search</h6>
      </div>
      <div className="col-start-5">
        <p>Languages</p>
      </div>
      <div className="col-start-6">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopBar;
