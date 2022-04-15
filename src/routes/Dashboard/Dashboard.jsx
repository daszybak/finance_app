import React from 'react';
import {MainContent, SideBar, TopBar} from '../../containers';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <TopBar />
      <div className="row">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
