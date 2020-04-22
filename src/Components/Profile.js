import React from 'react';
import { Breadcrumb } from 'antd';

const Profile = (props) =>{
    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo</Breadcrumb.Item>
              <Breadcrumb.Item>Profile</Breadcrumb.Item>
            </Breadcrumb>
            <h3>No data</h3>
        </div>
    )
}

export default Profile;