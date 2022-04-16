import React from 'react';

import TopBar from '../TopBar/TopBar';

import './main-content.scss';

const MainContent = () => {
  return (
    <div className="col">
      <TopBar />
      <div>
        <h6>MainContent (Stock data, charts)</h6>
      </div>
    </div>
  );
};

export default MainContent;
