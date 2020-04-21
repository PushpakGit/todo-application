import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import {createTodo} from '../Actions/index';

let CreateTodoForm = ({createTodo}) =>{
    const formRef = React.createRef();
    const onFinish = values => {
        console.log('Success:', values);
        values["status"] = "TODO"
        createTodo(values)
        formRef.current.resetFields();
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 16,
        },
      };

    const tailLayout = {
    wrapperCol: {
        offset:4 ,
        span: 16,
    },
    };
      
    return(
        <Form
        {...layout}
        ref={formRef}
        name="todoform"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your todos title!',
            },
          ]}
        >
        <Input />
      </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your todos description!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create Todo
          </Button>
        </Form.Item>
      </Form>
      )
}

const mapDispatchToProps = {
    createTodo:(param)=>createTodo(param)
}

CreateTodoForm = connect(null,mapDispatchToProps)(CreateTodoForm)

export default CreateTodoForm;