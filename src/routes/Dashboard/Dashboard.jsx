import React from 'react';
import {MainContent, SideBar, TopBar} from '../../containers';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col-10 p-0">
          <TopBar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
