import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { markTodoDone, getTodos, deleteTodo } from '../Actions/index';
import { connect } from 'react-redux';

let TodoList = ({getTodos, deleteTodo, markTodoDone, todos, loading}) =>{
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
        
    const columns = [
        {
        title: 'Title',
        dataIndex: 'title',
        key:'title'
        },
        {
        title: 'Description',
        dataIndex: 'description',
        key:'description'
        },
        {
        title: 'Status',
        dataIndex: 'status',
        key:'status'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                {
                record.status === "TODO" ? <a style={{ marginRight: 16 }} onClick={()=>markTodoDone(record)}>Mark Done</a> : ''
                }
                <a onClick={()=>markAsDelete(record)}>Delete</a>
              </span>
            ),
          },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) =>{ console.log("selectedRowKeys",selectedRowKeys); setSelectedRowKeys(selectedRowKeys)},
      };

      const pagination = {
          pageSize:5,
        //   total:8,
          onChange:(tt)=>{console.log("Change",tt)}
      }

      const hasSelected = selectedRowKeys.length > 0;

    useEffect(()=>{
      getTodos()        
    },[])

    let markAsDelete = function(rec){
        deleteTodo(rec.key);
    }

    return(
        <div>
            {/* {
              todos.map((todo,index) => <TodoListItem key={index} title={todo.title} description={todo.description} status={todo.status} />)  
            } */}
            <span style={{ marginLeft: 8 }}>
                { hasSelected ? `Selected ${selectedRowKeys.length} items` : '' }
            </span>
            <Table columns={columns} 
                    bordered={true} 
                    loading={loading}
                    dataSource={todos} 
                    rowSelection={rowSelection}
                    pagination={pagination}
                     />
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
  todos: state.data.todos,
  loading:state.data.loading
}}

const mapDispatchToProps = {
  getTodos,
  deleteTodo,
  markTodoDone
};

TodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoList;