import React from 'react';
import { Breadcrumb } from 'antd';

import TodoList from './TodoList';

const Dashboard = (props) =>{
    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <TodoList />
        </div>
    )
}

export default Dashboard;