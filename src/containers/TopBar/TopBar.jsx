import React from 'react';

const TopBar = () => {
  return (
    <div className="border row align-items-center" style={{minHeight: '70px'}}>
      <div className="col-9">
        <h6>Search</h6>
      </div>
      <div className="col">
        <p>Languages</p>
      </div>
      <div className="col">
        <p>Light/Dark Mode</p>
      </div>
    </div>
  );
};

export default TopBar;
