import React from 'react';
import { Breadcrumb } from 'antd';

import CreateTodoForm from './CreateTodoForm';

const CreateTodo = (props) =>{
    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo</Breadcrumb.Item>
              <Breadcrumb.Item>Create</Breadcrumb.Item>
            </Breadcrumb>
            <CreateTodoForm />
        </div>
    )
}

export default CreateTodo;