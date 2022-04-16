import React from 'react';
import {SideBar} from '../../containers';
import {Layout} from '../../components';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
  return (
    <Layout>
      <SideBar />
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
